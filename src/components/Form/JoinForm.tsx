'use client';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { auth } from '@/db/firebase';
import { useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Button from './Button';
import FormContainer from './FormContainer';
import TextInput from './TextInput';
import setInputValue from './setValue';

function JoinForm() {
  const router = useRouter();

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordCheckClicked, setPasswordCheckClicked] = useState(false);

  const setUserNameValue = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event, setUserName);
  };

  const setEmailValue = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event, setUserEmail);
  };

  const setPasswordValue = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event, setPassword);
  };

  const setPasswordCheckValue = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event, setPasswordCheck);
  };

  const handlePasswordCheck = (event: React.MouseEvent) => {
    event.stopPropagation();
    switch (true) {
      case password === '':
        setPasswordError('비밀번호를 입력해주세요.');
        break;
      case password.length < 6:
        setPasswordError('비밀번호는 6자리 이상을 입력해주세요');
        break;
      case password !== passwordCheck:
        setPasswordError(
          '비밀번호 확인이 일치하지 않습니다. 다시 입력해주세요.',
        );
        break;
      default:
        setPasswordError('비밀번호 확인이 일치합니다.');
        setPasswordCheckClicked(true);
        break;
    }
  };

  const validateEmail = (email: string) => {
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regEx.test(email);
  };

  const onSubmitJoin = async () => {
    const setErrorEmpty = () => {
      setNameError('');
      setPasswordError('');
      setEmailError('');
    };
    switch (true) {
      case userName === '':
        setErrorEmpty();
        setNameError('유저이름을 입력해주세요');
        break;
      case userEmail === '':
        setErrorEmpty();
        setEmailError('이메일을 입력해주세요');
        break;
      case !validateEmail(userEmail):
        setErrorEmpty();
        setEmailError('유효한 이메일을 입력해주세요');
        break;
      case password === '':
        setErrorEmpty();
        setPasswordError('비밀번호를 입력해주세요');
        break;
      case passwordCheckClicked === false:
        setErrorEmpty();
        setPasswordError('비밀번호 확인버튼을 눌러주세요');
        break;
      default:
        setErrorEmpty();
        try {
          const credentials = await createUserWithEmailAndPassword(
            auth,
            userEmail,
            password,
          );
          await updateProfile(credentials.user, { displayName: userName });
          toast.success('회원가입이 완료 되었습니다', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Bounce,
            onClose: () => router.push('/'),
          });
        } catch (error) {
          if (error instanceof FirebaseError) {
            toast.error('다시 시도 해 주세요');
          }
        } finally {
          toast.success('끝!');
        }
    }
    return console.log('Rmt!');
  };

  return (
    <FormContainer onSubmit={onSubmitJoin}>
      <TextInput
        label="이름"
        type="text"
        name="name"
        placeholder="이름을 입력해주세요"
        value={userName}
        onChange={setUserNameValue}
        error={nameError}
      />

      <TextInput
        label="이메일"
        type="text"
        name="eMail"
        placeholder="이메일을 입력해주세요"
        value={userEmail}
        onChange={setEmailValue}
        error={emailError}
      />

      <TextInput
        label="비밀번호"
        type="password"
        name="password"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={setPasswordValue}
      />

      <TextInput
        label="비밀번호 확인"
        type="password"
        name="password-check"
        placeholder="비밀번호를 다시 입력해주세요"
        value={passwordCheck}
        onChange={setPasswordCheckValue}
        error={passwordError}
      />

      <Button
        type="button"
        onClick={handlePasswordCheck}
        backgroundColor="bg-violet-600 "
        buttonInnerText="비밀번호 확인"
        textColor="text-white"
      />
      <Button
        type="submit"
        backgroundColor="bg-violet-600 "
        buttonInnerText="회원가입"
        textColor="text-white"
      />
    </FormContainer>
  );
}

export default JoinForm;
