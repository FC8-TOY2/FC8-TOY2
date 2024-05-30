'use client';

import Button from '@/components/Form/Button';
import JoinForm from '@/components/Form/JoinForm';
import { useRouter } from 'next/navigation';

function JoinPage() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };

  return (
    <div className="w-1/2 bg-slate-50 border border-violet-400 flex flex-col items-center justify-center rounded-xl">
      <h2 className="font-semibold">회원가입</h2>
      <JoinForm />
      <div className="my-3 flex flex-col">
        <span className="text-center ">이미 회원가입하셨나요 ?</span>
        <Button
          onClick={handleLoginClick}
          borderColor="border-violet-400"
          buttonInnerText="로그인"
        />
      </div>
    </div>
  );
}

export default JoinPage;
