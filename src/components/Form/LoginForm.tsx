'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/db/firebase';
import { Bounce, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { FirebaseError } from 'firebase/app';
import { useSetRecoilState } from 'recoil';
import { uIdState } from '@/recoil/atom';
import Button from './Button';
import FormContainer from './FormContainer';
import TextInput from './TextInput';
import setInputValue from './setValue';
import validateEmail from './validateEmail';

function LoginForm() {
  const router = useRouter();
  const setUid = useSetRecoilState(uIdState);

  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [loading, setLoading] = useState(false);

  const setEmailValue = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event, setUserEmail);
  };

  const setPasswordValue = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event, setPassword);
  };

  const onSubmitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const setErrorEmpty = () => {
      setPasswordError('');
      setEmailError('');
    };
    switch (true) {
      case userEmail === '':
        setErrorEmpty();
        setEmailError('이메일을 입력해 주세요');
        break;
      case !validateEmail(userEmail):
        setErrorEmpty();
        setEmailError('유효한 이메일을 입력해주세요');
        break;
      case password === '':
        setErrorEmpty();
        setPasswordError('패스워드를 입력해주세요');
        break;
      default:
        setLoading(true);
        setErrorEmpty();
        try {
          await signInWithEmailAndPassword(auth, userEmail, password);
          const userCredential = await signInWithEmailAndPassword(
            auth,
            userEmail,
            password,
          );
          const { user } = userCredential;
          setUid(user.uid);

          toast.success('로그인이 완료되었습니다!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Bounce,
            onClose: () => router.push('/mypage'),
          });
        } catch (error) {
          if (error instanceof FirebaseError) {
            toast.error('이메일과 비밀번호를 다시 확인해주세요!', {
              position: 'top-center',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
              transition: Bounce,
            });
          }
        } finally {
          setLoading(false);
        }
    }
  };

  return (
    <FormContainer onSubmit={onSubmitLogin}>
      {loading ? <h1>로딩중</h1> : <>회원정보를 입력해주세요</>}
      <TextInput
        label="이메일"
        type="text"
        name="eMail"
        placeholder="이메일을 입력해주세요"
        onChange={setEmailValue}
        value={userEmail}
        error={emailError}
      />
      <TextInput
        label="비밀번호"
        type="password"
        name="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={setPasswordValue}
        value={password}
        error={passwordError}
      />
      <Button
        type="submit"
        backgroundColor="bg-violet-600 "
        buttonInnerText="로그인"
        textColor="text-white"
      />
    </FormContainer>
  );
}

export default LoginForm;
