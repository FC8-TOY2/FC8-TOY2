'use client';

import Table from '@/components/Table/Table';
import { Row } from '@/types';
import { useEffect, useState } from 'react';
import { getPayStub } from '@/db/payStub';
import MyPageCompo from '@/components/MyPage/MyPageCompo';
import SideBar from '@/components/SideBar';
import Header from '@/components/Header';

export default function Home() {
  const [rows, setRows] = useState<Row[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    async function fetchPayStubs() {
      const result = await getPayStub('0wUVcrcQClHQS1zpuuRO'); // Replace 'user-id' with the actual user ID

      if ('error' in result) {
        setError(result.error);
      } else {
        const payStubs = result.payStub.docs.map((doc) => doc.data());
        const formattedRows = payStubs.map((stub) => ({
          month: stub.month,
          base_salary: stub.base_salary,
          overtime_pay: stub.overtime_pay,
          holiday_work: stub.holiday_work,
          unpaid_leave: stub.unpaid_leave,
          tax: stub.tax,
          net_pay: stub.net_pay,
        }));
        setRows(formattedRows);
      }
    }

    fetchPayStubs();
  }, []);

  if (error) {
    return <div>에러: {error}</div>;
  }

  return (
    <>
      <Header />
      <SideBar />
      <main className="pt-[130px] pr-[50px] pl-[310px] pb-[30px]">
        <div>
          <h1 className="text-4xl font-bold">급여내역</h1>
          <h2 className="my-7 text-2xl font-bold">직원정보</h2>
          <section className="w-3/4 bg-slate-50 border border-violet-400 flex flex-col selection:justify-center rounded-xl p-4">
            <MyPageCompo btnShow={false} />
          </section>
          <h2 className="my-7 text-2xl font-bold">급여명세</h2>
          <Table rows={rows} tableType="salary" />
        </div>
      </main>
    </>
  );
}
