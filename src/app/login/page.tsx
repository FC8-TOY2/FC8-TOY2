import LoginForm from '@/components/Form/LoginForm';

function LoginPage() {
  return (
    <div className="w-1/2 bg-slate-50 border border-violet-400 flex flex-col items-center justify-center rounded-xl">
      <h2 className="font-semibold">로그인</h2>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
