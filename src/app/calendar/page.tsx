'use client';

import ScheduleCalendar from '@/components/Calendar';

import SideBar from '@/components/SideBar';
import Header from '@/components/Header';

function CalendarPage() {
  return (
    <>
      <Header />
      <SideBar />
      <main className="pt-[130px] pr-[50px] pl-[310px] pb-[30px]">
        <div className="p-7">
          <div>Title</div>
          <ScheduleCalendar />
        </div>
      </main>
    </>
  );
}

export default CalendarPage;
