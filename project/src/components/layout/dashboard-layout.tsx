import { Sidebar } from "./sidebar";
import { Outlet } from "react-router-dom";

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block">
        <Sidebar className="w-64" />
      </div>
      <div className="flex-1 p-6 md:p-10">
        <Outlet />
      </div>
    </div>
  );
}