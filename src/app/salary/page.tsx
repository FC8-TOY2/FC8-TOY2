import Table from '@/components/Table/Table';
import { Row } from '@/types';

export default function Home() {
  const rows: Row[] = [
    {
      month: '5월',
      base_salary: 1234567,
      overtime_pay: 123456,
      holiday_work: 0,
      unpaid_leave: -123456,
      tax: -12345,
      net_pay: 1234567,
    },
    {
      month: '6월',
      base_salary: 1234567,
      overtime_pay: 123456,
      holiday_work: 0,
      unpaid_leave: -123456,
      tax: -12345,
      net_pay: 1234567,
    },
    {
      month: '7월',
      base_salary: 1234567,
      overtime_pay: 123456,
      holiday_work: 0,
      unpaid_leave: -123456,
      tax: -12345,
      net_pay: 1234567,
    },
  ];
  return (
    <div>
      <h1 className="text-4xl font-bold">급여내역</h1>
      <h2 className="my-7 text-2xl font-bold">직원정보</h2>
      <div className="h-48">인사정보 컴포넌트</div>
      <h2 className="my-7 text-2xl font-bold">급여명세</h2>
      <Table rows={rows} tableType="salary" />
    </div>
  );
}
