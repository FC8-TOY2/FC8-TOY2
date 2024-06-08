/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const index = () => {
  return (
    <aside className="p-[30px] fixed top-[80px] left-0 h-screen w-[260px] border-r border-gray-200">
      <div className="pb-[10px] mb-[20px] border-b border-gray-200">
        <p className="mb-[10px] text-sm text-gray-400">기본정보</p>
        <Link
          href="/mypage"
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
          href="/salary"
          className="flex items-center gap-2 pl-[5px] h-[50px] rounded  hover:bg-gray-100"
        >
          <img
            className="w-[28px] h-[28px]"
            src="/images/salary.png"
            alt="급여내역바로가기"
          />
          <p>급여내역</p>
        </Link>
        <Link
          href="/fix"
          className="flex items-center gap-2 pl-[5px] h-[50px] rounded  hover:bg-gray-100"
        >
          <img
            className="w-[28px] h-[28px]"
            src="/images/fix.png"
            alt="정정내역 링크"
          />
          <p>정정내역</p>
        </Link>
        <Link
          href="/correct"
          className="flex items-center gap-2 pl-[5px] h-[50px] rounded  hover:bg-gray-100"
        >
          <img
            className="w-[28px] h-[28px]"
            src="/images/correct.png"
            alt="정정신청 링크"
          />
          <p>정정신청</p>
        </Link>
      </div>

      <div className="pb-[10px] mb-[20px] border-b border-gray-200">
        <p className="mb-[10px] text-sm text-gray-400">일정관리</p>
        <Link
          href="/calendar"
          className="flex items-center gap-2 pl-[5px] h-[50px] rounded  hover:bg-gray-100"
        >
          <img
            className="w-[28px] h-[28px]"
            src="/images/calendar.png"
            alt="캘린더 링크"
          />
          <p>캘린더</p>
        </Link>
      </div>
    </aside>
  );
};

export default index;
