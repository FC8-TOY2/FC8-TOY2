/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const index = () => {
  return (
    <header className="flex items-center justify-between px-6 fixed w-full h-[80px] border-b border-gray-200">
      <Link href="/">
        <img src="/images/logo.png" alt="logo" />
      </Link>
      <div className="flex">
        <button type="button" className="mr-4 text-sm text-gray-400">
          로그아웃
        </button>
      </div>
    </header>
  );
};

export default index;
