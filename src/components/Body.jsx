import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";

export default function Body() {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="pt-14 flex overflow-hidden">
      {isMobile && isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-40">
          <div
            className="fixed inset-0 bg-black/50"
            onClick={() => dispatch(toggleMenu())}
          />
          <div className="fixed top-14 left-0 bottom-0 w-60 bg-white shadow-xl overflow-y-auto">
            <Sidebar />
          </div>
        </div>
      )}
      <div
        className={`${
          isMobile ? "hidden" : ""
        } ${
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
