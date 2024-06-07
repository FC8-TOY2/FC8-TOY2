/* eslint-disable @next/next/no-img-element */
import React from 'react';

const index = () => {
  return (
    <header className="flex items-center justify-between px-6 fixed w-full h-[80px] border-b border-gray-200">
      <img src="/images/logo.png" alt="logo" />
      <div className="flex">
        <button type="button" className="mr-4 text-sm text-gray-400">
          로그아웃
        </button>
        <img src="/images/logo.png" className="w-[32px]" alt="profile" />
      </div>
    </header>
  );
};

export default index;
