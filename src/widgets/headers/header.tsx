import { CircleUserRoundIcon } from "lucide-react";

import Link from "next/link";

const Header = () => {
  return (
    <div className="border-muted flex items-center justify-between border-b-2 px-10 py-5">
      <Link
        className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent"
        href="/"
      >
        PCMS V3
      </Link>
      <div className="flex items-center gap-2">
        <CircleUserRoundIcon className="h-7 w-7" />
        <span className="font-bold">김용빈님</span>
        <button className="bg-primary cursor-pointer rounded-md px-4 py-0.5 text-white">
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default Header;
