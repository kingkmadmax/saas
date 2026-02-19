import { SidebarProvider } from "@/components/ui/sidebar";
import  {DashboardSidebar} from "@/modules/dashboard/ui/components/dashboard-sidebar"
import { DashboardNavebar } from "@/modules/dashboard/ui/components/dshboardNavebar";
interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return ( 
    <SidebarProvider>
      <DashboardSidebar/>
      <main className="flex flex-col h-screen w-screen bg-muted">
        <DashboardNavebar/>
        {children}
      </main>
    </SidebarProvider>
  );
};
 
export default Layout;