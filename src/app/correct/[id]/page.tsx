import PayStubCorrectForm from '@/templates/PayStubCorrectForm';
import React from 'react';
import SideBar from '@/components/SideBar';
import Header from '@/components/Header';

interface CorrectEditPageProps {
  params: {
    id: string;
  };
}

async function CorrectEditPage({ params: { id } }: CorrectEditPageProps) {
  return (
    <>
      <Header />
      <SideBar />
      <main className="pt-[130px] pr-[50px] pl-[310px] pb-[30px]">
        <PayStubCorrectForm id={id} />
      </main>
    </>
  );
}

export default CorrectEditPage;
