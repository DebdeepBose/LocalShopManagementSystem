import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="flex min-h-screen pt-1 gap-4 pl-2 pb-2">
      <main className="flex-1 flex flex-col">
        <Navbar />
        <div className="p-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
