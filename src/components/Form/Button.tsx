export default function FormButtons() {
  return (
    <div className="w-full flex flex-col gap-2 mt-8 text-center">
      <button
        type="button"
        className="bg-violet-500 rounded-xl py-2 text-white"
      >
        로그인
      </button>
      <button
        type="button"
        className="border border-violet-500 rounded-xl py-2"
      >
        회원가입
      </button>
    </div>
  );
}
