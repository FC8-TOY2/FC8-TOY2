'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { Row } from '@/types';

interface ItemProps {
  row: Row;
  tableType: string;
}

const Item: React.FC<ItemProps> = ({ row, tableType }) => {
  const router = useRouter();
  const handleButtonClick = () => {
    if (tableType === 'salaryFix') {
      router.push(`/correct/${row.id}`);
    } else {
      router.push('/correct');
    }
  };
  if (tableType === 'salary') {
    return (
      <li className="border-b border-gray-300 ">
        <div className="h-[50px] flex items-center">
          <div className="flex-1 p-1 px-4 text-indent-20">{row.month}</div>
          <div className="flex-1 p-1">{row.base_salary}</div>
          <div className="flex-1 p-1">{row.overtime_pay}</div>
          <div className="flex-1 p-1">{row.holiday_work}</div>
          <div className="flex-1 p-1">{row.unpaid_leave}</div>
          <div className="flex-1 p-1">{row.tax}</div>
          <div className="flex-1 p-1">{row.net_pay}</div>
          <div className="flex-1 p-1">
            <button
              type="button"
              className="bg-violet-500 text-white px-3 rounded"
              onClick={handleButtonClick}
            >
              신청하기
            </button>
          </div>
        </div>
      </li>
    );
  }

  if (tableType === 'salaryFix') {
    return (
      <li className="border-b border-gray-300">
        <div className="h-[50px] flex items-center">
          <div className="flex-[1] p-1 px-4 text-indent-20">{row.day}</div>
          <div className="flex-[4] p-1">{row.content}</div>
          <div className="flex-[2] p-1">{row.payStatus}</div>
          <div className="flex-[1] p-1">
            <button
              type="button"
              className="bg-violet-500 text-white px-3 rounded"
              onClick={handleButtonClick}
            >
              수정
            </button>
          </div>
        </div>
      </li>
    );
  }

  return null;
};

export default Item;
