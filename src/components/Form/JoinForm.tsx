'use client';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { auth, dataBase, storage } from '@/db/firebase';
import { useState } from 'react';
import { Bounce, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import {
  deptState,
  jobPositionState,
  profilePhotoState,
  userNameState,
} from '@/recoil/atom';
import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import Button from './Button';
import FormContainer from './FormContainer';
import TextInput from './TextInput';
import setInputValue from './setValue';
import validateEmail from './validateEmail';

function JoinForm() {
  const router = useRouter();

  const [userName, setUserName] = useRecoilState(userNameState);
  const [jobPosition, setJobPosition] = useRecoilState(jobPositionState);
  const [dept, setDept] = useRecoilState(deptState);

  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [profilePhotoURL, setProfilePhotoURL] =
    useRecoilState(profilePhotoState);

  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [jobPositionError, setJobPositionError] = useState('');
  const [deptError, setDeptError] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [passwordCheck, setPasswordCheck] = useState('');
  const [passwordCheckClicked, setPasswordCheckClicked] = useState(false);

  const [loading, setLoading] = useState(false);

  const setUserNameValue = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event, setUserName);
  };

  const setJobPositionValue = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event, setJobPosition);
  };

  const setDeptValue = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event, setDept);
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

  const handleProfilePhotoChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0] || null;
    setProfilePhoto(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePhotoURL(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setProfilePhotoURL(null);
    }
  };

  const onSubmitJoin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const setErrorEmpty = () => {
      setNameError('');
      setJobPositionError('');
      setDeptError('');
      setPasswordError('');
      setEmailError('');
    };
    switch (true) {
      case userName === '':
        setErrorEmpty();
        setNameError('유저이름을 입력해주세요');
        break;
      case jobPosition === '':
        setErrorEmpty();
        setJobPositionError('직책을 입력해주세요');
        break;
      case dept === '':
        setErrorEmpty();
        setDeptError('부서를 입력 해주세요');
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
        setLoading(true);
        setErrorEmpty();
        try {
          const credentials = await createUserWithEmailAndPassword(
            auth,
            userEmail,
            password,
          );
          await updateProfile(credentials.user, { displayName: userName });

          const userDoc = {
            userName,
            jobPosition,
            dept,
            email: userEmail,
          };

          await setDoc(doc(dataBase, 'users', credentials.user.uid), userDoc);

          if (profilePhoto) {
            const profilePhotoRef = ref(
              storage,
              `profilePhotos/${credentials.user.uid}`,
            );
            await uploadBytes(profilePhotoRef, profilePhoto);
            const photoURL = await getDownloadURL(profilePhotoRef);
            await updateProfile(credentials.user, { photoURL });
          }
          toast.success('회원가입이 완료 되었습니다', {
            pauseOnHover: false,
            progress: undefined,
            onClose: () => router.push('/login'),
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
    <FormContainer onSubmit={onSubmitJoin}>
      {loading ? <h1>로딩중</h1> : <>회원정보를 입력해주세요</>}
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
        label="직책"
        type="text"
        name="jopPosition"
        placeholder="직책을 입력해주세요"
        value={jobPosition}
        onChange={setJobPositionValue}
        error={jobPositionError}
      />
      <TextInput
        label="부서"
        type="text"
        name="dept"
        placeholder="부서를 입력해주세요"
        value={dept}
        onChange={setDeptValue}
        error={deptError}
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
        label="프로필 사진"
        type="file"
        name="profilePhoto"
        placeholder="프로필사진을 올려주세요"
        onChange={handleProfilePhotoChange}
      />

      {profilePhotoURL && (
        <img
          src={profilePhotoURL}
          alt="프로필 미리보기"
          className="w-32 h-32 rounded-full mt-4 shadow-2xl"
        />
      )}

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
