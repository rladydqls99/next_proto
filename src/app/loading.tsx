const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="space-y-8 text-center">
        {/* 로딩 스피너 */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-300 border-t-blue-600"></div>
        </div>

        {/* 로딩 메시지 */}
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-800">로딩 중...</h2>
          <p className="text-slate-600">잠시만 기다려주세요</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
