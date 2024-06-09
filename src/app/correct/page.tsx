import PayStubCorrectForm from '@/templates/PayStubCorrectForm';
import React from 'react';
import SideBar from '@/components/SideBar';
import Header from '@/components/Header';

function CorrectPage() {
  return (
    <>
      <Header />
      <SideBar />
      <main className="pt-[130px] pr-[50px] pl-[310px] pb-[30px]">
        <PayStubCorrectForm />
      </main>
    </>
  );
}

export default CorrectPage;
