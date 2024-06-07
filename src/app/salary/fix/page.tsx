import Table from '@/components/Table/Table';
import { Row } from '@/types';

export default function Home() {
  const rows: Row[] = [
    {
      day: '5월',
      content: '야근 수당 신청합니다.',
      payStatus: '결제 대기',
    },
    {
      day: '6월',
      content: '야근 수당 신청합니다.',
      payStatus: '결제 대기',
    },

    {
      day: '7월',
      content: '야근 수당 신청합니다.',
      payStatus: '결제 대기',
    },
  ];
  return (
    <div className="p-8">
      <div className="mb-[50px] flex justify-between">
        <h1 className="text-4xl font-bold">급여정정내역</h1>
        <button type="button" className="bg-violet-500 text-white px-3 rounded">
          정정 신청
        </button>
      </div>
      <Table rows={rows} tableType="salaryFix" />
    </div>
  );
}
