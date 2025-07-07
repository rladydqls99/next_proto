import { Header } from "@/widgets/headers";
import { SideNav } from "@/widgets/side-nav";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex">
        <SideNav />
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
