import MyPageCompo from '@/components/MyPage/MyPageCompo';

function MyPagePage() {
  return (
    <section className="w-3/4 bg-slate-50 border border-violet-400 flex flex-col selection:justify-center rounded-xl p-4">
      <h2 className="font-semibold">내 인사정보</h2>
      <MyPageCompo />
    </section>
  );
}

export default MyPagePage;
