'use client';

import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { doc, getDoc } from 'firebase/firestore';
import { auth, dataBase } from '@/db/firebase';
import { uIdState } from '@/recoil/atom';
import { UserData } from '@/db/user';
import Image from 'next/image';
import UserDataDiv from './userData';

function MyPageInfo() {
  const uid = useRecoilValue(uIdState);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [currentUser, setCurrentUser] = useState(auth.currentUser);

  useEffect(() => {
    if (uid) {
      const fetchUserData = async () => {
        const userDoc = doc(dataBase, 'users', uid);
        const userSnap = await getDoc(userDoc);
        setUserData(userSnap.data() as UserData);
      };
      fetchUserData();
    }
  }, [uid]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-around items-center">
      <Image
        className="w-32 h-32 rounded-full mt-4 shadow-2xl"
        src={
          userData?.photoURL ||
          currentUser?.photoURL ||
          '/images/default_profile_img.jpeg'
        }
        width={128}
        height={128}
        alt={userData?.userName || '기본 이미지'}
      />
      <div className="flex gap-10">
        <div className="flex flex-col gap-4">
          <UserDataDiv dataName="사원이름" userDataInfo={userData?.userName} />
          <UserDataDiv dataName="부서" userDataInfo={userData?.dept} />
          <UserDataDiv dataName="직책" userDataInfo={userData?.jobPosition} />
        </div>
        <div className="flex flex-col gap-4">
          <UserDataDiv dataName="E-mail" userDataInfo={userData?.email} />
          <UserDataDiv dataName="입사일" userDataInfo={userData?.userName} />
        </div>
      </div>
    </div>
  );
}

export default MyPageInfo;
