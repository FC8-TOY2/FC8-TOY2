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
    <div className="w-1/2 bg-slate-50 border border-violet-400 flex flex-col items-center justify-center rounded-xl">
      <h2 className="font-semibold">로그인</h2>
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
