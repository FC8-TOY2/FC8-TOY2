'use client';

import Table from '@/components/Table/Table';
import { Row } from '@/types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getPayStubCorrections } from '@/db/payStubCorrection';
import { useRecoilValue } from 'recoil';
import { uIdState } from '@/recoil/atom';
import SideBar from '@/components/SideBar';
import Header from '@/components/Header';
import { toast } from 'react-toastify';

export default function Home() {
  const router = useRouter();
  const [rows, setRows] = useState<Row[]>([]);
  const [error, setError] = useState<string | null>(null);
  const uId = useRecoilValue(uIdState);

  if (!uId) {
    toast.error('유저를 찾을 수 없습니다.', {
      onClose: () => router.push('/login'),
    });
  }

  useEffect(() => {
    async function fetchPayStubCorrections() {
      const result = await getPayStubCorrections(uId);

      if ('error' in result) {
        setError(result.error);
      } else {
        const payStubCorrections = result.payStubCorrections.docs.map(
          (doc) => ({
            id: doc.id,
            day: doc.data().correctDate,
            content: doc.data().detail,
            payStatus: '결제 대기',
          }),
        );
        setRows(payStubCorrections);
      }
    }

    if (uId) {
      fetchPayStubCorrections();
    }
  }, [uId]);

  const handleButtonClick = () => {
    router.push('/correct');
  };

  if (error) {
    return <div>에러: {error}</div>;
  }

  return (
    <>
      <Header />
      <SideBar />
      <main className="pt-[130px] pr-[50px] pl-[310px] pb-[30px]">
        <div className="p-8">
          <div className="mb-[50px] flex justify-between">
            <h1 className="text-4xl font-bold">급여정정내역</h1>
            <button
              type="button"
              className="bg-violet-500 text-white px-3 rounded"
              onClick={handleButtonClick}
            >
              정정 신청
            </button>
          </div>
          <Table rows={rows} tableType="salaryFix" />
        </div>
      </main>
    </>
  );
}
