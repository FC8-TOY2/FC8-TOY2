import JoinForm from '@/components/Form/JoinForm';
import Link from 'next/link';

function JoinPage() {
  const id = '1';
  return (
    <div className="w-1/2 bg-slate-50 border border-violet-400 flex flex-col items-center justify-center rounded-xl">
      <h2 className="font-semibold">회원가입</h2>
      <JoinForm />
      <Link href={`mypage/${id}`}> 단지테스트</Link>
    </div>
  );
}

export default JoinPage;
