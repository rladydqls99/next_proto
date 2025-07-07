import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="space-y-8 px-4 text-center">
        {/* 404 숫자 */}
        <div className="relative">
          <h1 className="text-9xl font-black text-slate-200 md:text-[12rem]">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-9xl font-black text-slate-800 md:text-[12rem]">404</h1>
          </div>
        </div>

        {/* 메인 메시지 */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800 md:text-3xl">
            페이지를 찾을 수 없습니다
          </h2>
          <p className="mx-auto max-w-md text-lg leading-relaxed text-slate-600">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.
            <br />
            URL을 다시 확인해주세요.
          </p>
        </div>

        {/* 액션 버튼 */}
        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
          <Link
            href="/"
            className="transform rounded-xl bg-blue-600 px-8 py-3 font-medium text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-blue-700 hover:shadow-xl active:bg-blue-800"
          >
            홈으로 돌아가기
          </Link>
        </div>

        {/* 추가 정보 */}
        <div className="pt-8 text-sm text-slate-500">
          <p>문제가 지속되면 관리자에게 문의해주세요</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
