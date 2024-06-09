'use client';

import Button from '@/components/Form/Button';
import LoginForm from '@/components/Form/LoginForm';
import { useRouter } from 'next/navigation';

function LoginPage() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/join');
  };
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] bg-slate-50 border border-violet-400 flex flex-col selection:justify-center rounded-xl p-4">
      <h2 className="font-semibold text-center">로그인</h2>
      <LoginForm />
      <div className="my-3 flex flex-col">
        <span className="text-center ">처음 방문 이신가요?</span>
        <Button
          onClick={handleLoginClick}
          borderColor="border-violet-400"
          buttonInnerText="회원가입"
        />
      </div>
    </div>
  );
}

export default LoginPage;
