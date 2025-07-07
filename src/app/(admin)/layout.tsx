import { GlobalHeader } from "@/widgets/headers";
import { SideNav } from "@/widgets/side-nav";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex min-h-screen flex-col">
      <GlobalHeader />
      <div className="flex flex-1">
        <SideNav />
        <div className="w-full p-6">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
