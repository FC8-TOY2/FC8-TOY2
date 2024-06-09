import MyPageCompo from '@/components/MyPage/MyPageCompo';
import SideBar from '@/components/SideBar';
import Header from '@/components/Header';

function MyPagePage() {
  return (
    <>
      <Header />
      <SideBar />
      <main className="pt-[130px] pr-[50px] pl-[310px] pb-[30px]">
        <section className="w-3/4 bg-slate-50 border border-violet-400 flex flex-col selection:justify-center rounded-xl p-4">
          <h2 className="font-semibold">내 인사정보</h2>
          <MyPageCompo btnShow />
        </section>
      </main>
    </>
  );
}

export default MyPagePage;
