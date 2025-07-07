import { CircleUserRoundIcon } from "lucide-react";

import Link from "next/link";

import { PrimaryButton } from "@/shared";

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
        <PrimaryButton size="sm">로그아웃</PrimaryButton>
      </div>
    </div>
  );
};

export default Header;
