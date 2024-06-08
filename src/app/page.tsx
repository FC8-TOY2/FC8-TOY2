import Banner from '@/components/Banner';
import Header from '@/components/Header';
import SideBar from '@/components/SideBar';

export default function Home() {
  return (
    <>
      <Header />
      <SideBar />
      <main className="pt-[130px] pr-[50px] pl-[310px] pb-[30px]">
        <Banner />
      </main>
    </>
  );
}
