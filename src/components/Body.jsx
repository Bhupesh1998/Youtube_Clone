import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import Maincontainer from "./Maincontainer";
import { Outlet } from "react-router-dom";

export default function Body() {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  return (
    <div className="pt-14 flex overflow-hidden">
      <div
        className={`${
          isSidebarOpen ? "w-60" : "w-0 overflow-hidden"
        } transition-all duration-300 shrink-0`}
      >
        <Sidebar />
      </div>
      <div className="flex-1 min-w-0">
        <Outlet />
      </div>
    </div>
  );
}
