'use client'

import React, { useCallback } from 'react';
import Link from 'next/link';
import { getAuth, signOut } from 'firebase/auth';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { uIdState, userDataState } from '@/recoil/atom';
import { useRouter } from 'next/navigation';

const index = () => {
  const setUid = useSetRecoilState(uIdState);
  const setUserData = useSetRecoilState(userDataState);
  const router = useRouter()

  const handleSubmit = useCallback(async () => {
    try {
      const auth = getAuth()
      await signOut(auth)
      Cookies.remove('uid')
      setUid('')
      setUserData(null)
      router.push('/login')
    } catch(error) {
      console.log(error)
      toast.error('로그아웃에 실패했습니다.')
    }
  }, [])

  return (
    <header className="flex items-center justify-between px-6 fixed w-full h-[80px] border-b border-gray-200">
      <Link href="/">
        <img src="/images/logo.png" alt="logo" />
      </Link>
      <div className="flex">
        <button type="button" onClick={handleSubmit} className="mr-4 text-sm text-gray-400">
          로그아웃
        </button>
      </div>
    </header>
  );
};

export default index;
