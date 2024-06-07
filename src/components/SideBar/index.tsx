/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const index = () => {
  return (
    <aside className="p-[30px] fixed top-[80px] left-0 h-screen w-[260px] border-r border-gray-200">
      <div className="pb-[10px] mb-[20px] border-b border-gray-200">
        <p className="mb-[10px] text-sm text-gray-400">기본정보</p>
        <Link
          href="/salary/fix"
          className="flex items-center gap-2 pl-[5px] h-[50px] rounded  hover:bg-gray-100"
        >
          <img
            className="w-[28px] h-[28px]"
            src="/images/profile.png"
            alt="프로필 링크"
          />
          <p>프로필</p>
        </Link>
      </div>

      <div className="pb-[10px] mb-[20px] border-b border-gray-200">
        <p className="mb-[10px] text-sm text-gray-400">급여관리</p>
        <Link
          href="/salary/fix"
          className="flex items-center gap-2 pl-[5px] h-[50px] rounded  hover:bg-gray-100"
        >
          <img
            className="w-[28px] h-[28px]"
            src="/images/profile.png"
            alt="프로필 링크"
          />
          <p>급여내역</p>
        </Link>
        <Link
          href="/salary/fix"
          className="flex items-center gap-2 pl-[5px] h-[50px] rounded  hover:bg-gray-100"
        >
          <img
            className="w-[28px] h-[28px]"
            src="/images/profile.png"
            alt="프로필 링크"
          />
          <p>정정내역</p>
        </Link>
        <Link
          href="/salary/fix"
          className="flex items-center gap-2 pl-[5px] h-[50px] rounded  hover:bg-gray-100"
        >
          <img
            className="w-[28px] h-[28px]"
            src="/images/profile.png"
            alt="프로필 링크"
          />
          <p>정정수정</p>
        </Link>
      </div>

      <div className="pb-[10px] mb-[20px] border-b border-gray-200">
        <p className="mb-[10px] text-sm text-gray-400">일정관리</p>
        <Link
          href="/salary/fix"
          className="flex items-center gap-2 pl-[5px] h-[50px] rounded  hover:bg-gray-100"
        >
          <img
            className="w-[28px] h-[28px]"
            src="/images/profile.png"
            alt="프로필 링크"
          />
          <p>캘린더</p>
        </Link>
      </div>
    </aside>
  );
};

export default index;
