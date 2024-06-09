'use client';

import React, { useCallback } from 'react';
import Link from 'next/link';
import { getAuth, signOut } from 'firebase/auth';
import Cookies from 'js-cookie';
import { toast } from 'react-toastify';
import { useSetRecoilState } from 'recoil';
import { uIdState, userDataState } from '@/recoil/atom';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '../Button';

const Header = () => {
  const setUid = useSetRecoilState(uIdState);
  const setUserData = useSetRecoilState(userDataState);
  const router = useRouter();

  const handleLogOut = useCallback(async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      Cookies.remove('uid');
      setUid('');
      setUserData(null);
      router.push('/login');
    } catch (error) {
      toast.error('로그아웃에 실패했습니다.');
    }
  }, [router, setUid, setUserData]);

  return (
    <header className="bg-white flex items-center justify-between px-6 fixed z-50 w-full h-[80px] border-b border-gray-200">
      <Link href="/">
        <Image src="/images/logo.png" alt="logo" width={50} height={57} />
      </Link>
      <div className="flex">
        <Button onClick={handleLogOut}>로그아웃</Button>
        {/* <button
          type="button"
          onClick={handleLogOut}
          className="mr-4 text-sm text-gray-400"
        >
          로그아웃
        </button> */}
      </div>
    </header>
  );
};

export default Header;
