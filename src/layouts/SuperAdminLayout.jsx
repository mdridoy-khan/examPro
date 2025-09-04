import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const SuperAdminLayout = () => {
  return (
    <>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default SuperAdminLayout;
