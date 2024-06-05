// src/components/ProfileEditForm.tsx

'use client';

import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { doc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, dataBase, storage } from '@/db/firebase';
import { uIdState } from '@/recoil/atom';
import { updateProfile } from 'firebase/auth';
import { Bounce, toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { FirebaseError } from 'firebase/app';
import Button from '../Form/Button';
import TextInput from '../Form/TextInput';
import setInputValue from '../Form/setValue';
import FormContainer from '../Form/FormContainer';
import { UserData } from './MyPageInfo';

function ProfileEditForm({
  userData,
  onCancel,
}: {
  userData: UserData | null;
  onCancel: () => void;
}) {
  const router = useRouter();
  const uid = useRecoilValue(uIdState);

  const [userName, setUserName] = useState(userData?.userName || '');
  const [dept, setDept] = useState(userData?.dept || '');
  const [jobPosition, setJobPosition] = useState(userData?.jobPosition || '');
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const [profilePhotoURL, setProfilePhotoURL] = useState<string | null>(
    userData?.photoURL || null,
  );

  const [nameError, setNameError] = useState('');
  const [jobPositionError, setJobPositionError] = useState('');
  const [deptError, setDeptError] = useState('');

  const [loading, setLoading] = useState(false);

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

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const setErrorEmpty = () => {
      setNameError('');
      setJobPositionError('');
      setDeptError('');
    };

    switch (true) {
      case !uid:
        console.log('로그인해라');
        break;
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
      default:
        setLoading(true);
        setErrorEmpty();
        try {
          const userDocRef = doc(dataBase, 'users', uid);
          const updates: Partial<UserData> = {
            userName,
            dept,
            jobPosition,
          };

          if (profilePhoto) {
            const profilePhotoRef = ref(storage, `profilePhotos/${uid}`);
            await uploadBytes(profilePhotoRef, profilePhoto);
            const photoURL = await getDownloadURL(profilePhotoRef);
            updates.photoURL = photoURL;
            await updateProfile(auth.currentUser!, { photoURL });
          }

          await updateDoc(userDocRef, updates);
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
          onCancel();
        } catch (error) {
          if (error instanceof FirebaseError) {
            toast.error('정보수정에 실패하였습니다', {
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
    <FormContainer onSubmit={onSubmit}>
      {loading ? <>로딩</> : <>수정완료</>}
      <TextInput
        label="이름"
        type="text"
        name="userName"
        placeholder="이름을 입력해주세요"
        value={userName}
        onChange={(e) => setInputValue(e, setUserName)}
        error={nameError}
      />
      <TextInput
        label="부서"
        type="text"
        name="dept"
        placeholder="부서를 입력해주세요"
        value={dept}
        onChange={(e) => setInputValue(e, setDept)}
        error={deptError}
      />
      <TextInput
        label="직책"
        type="text"
        name="jobPosition"
        placeholder="직책을 입력해주세요"
        value={jobPosition}
        onChange={(e) => setInputValue(e, setJobPosition)}
        error={jobPositionError}
      />
      <TextInput
        label="프로필 사진"
        type="file"
        name="profilePhoto"
        onChange={handleProfilePhotoChange}
      />
      {profilePhotoURL && (
        <img
          src={profilePhotoURL}
          alt="프로필 미리보기"
          className="w-32 h-32 rounded-full mt-4"
        />
      )}
      <div className="w-full text-end">
        <Button
          type="button"
          backgroundColor="bg-gray-600"
          buttonInnerText="취소"
          textColor="text-white"
          width="w-24"
          onClick={onCancel}
        />
        <Button
          type="submit"
          backgroundColor="bg-violet-600"
          buttonInnerText="저장"
          textColor="text-white"
          width="w-24"
        />
      </div>
    </FormContainer>
  );
}

export default ProfileEditForm;
