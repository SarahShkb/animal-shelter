import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SidebarProvider>
      <div className="w-full h-full absolute">
        <Navbar />
        <AppSidebar />
        <div className="w-[calc(100%-16rem)] h-[calc(100%-40px)] absolute top-10 left-64">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
