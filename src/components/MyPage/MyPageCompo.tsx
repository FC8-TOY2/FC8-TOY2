// src/components/MyPageCompo.tsx

'use client';

import { useRecoilValue } from 'recoil';
import { uIdState } from '@/recoil/atom';
import { useState } from 'react';
import Button from '../Form/Button';
import MyPageInfo from './MyPageInfo';
import ProfileEditForm from './ProfileEditForm';
import { type UserData } from '@/db/user';

interface MyPageCompoProps {
  btnShow: boolean;
}

function MyPageCompo({ btnShow }: MyPageCompoProps) {
  const uid = useRecoilValue(uIdState);
  const [editMode, setEditMode] = useState(false);
  const [userData] = useState<UserData | null>(null);

  const handleEditClick = async () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  return (
    <>
      {uid === null ? (
        <>로그인 해주세요</>
      ) : (
        <div className="flex flex-col gap-4">
          {editMode ? (
            <ProfileEditForm userData={userData} onCancel={handleCancel} />
          ) : (
            <>
              <MyPageInfo />
              {btnShow && (
                <div className="w-full text-end">
                  <Button
                    type="button"
                    backgroundColor="bg-violet-600"
                    buttonInnerText="프로필 수정"
                    textColor="text-white"
                    width="w-24"
                    onClick={handleEditClick}
                  />
                </div>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}

export default MyPageCompo;
