import { ChevronRightIcon, LucideIcon } from "lucide-react";

type PropsType = {
  Icon: LucideIcon | null;
  category: string;
  page: string;
};

const PageHeader = ({ Icon, category, page }: PropsType) => {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {Icon && <Icon className="text-primary" />}
        <h1 className="text-muted-foreground text-xl font-semibold">{category}</h1>
      </div>
      <ChevronRightIcon className="text-muted-foreground h-4 w-4" />
      <h2 className="text-xl font-semibold">{page}</h2>
    </div>
  );
};

export default PageHeader;
