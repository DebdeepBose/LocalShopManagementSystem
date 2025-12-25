import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex justify-center">
      {/* Glass wrapper */}
      <div
        className="
          w-full
          bg-white/5 backdrop-blur-xl
          border border-white/10
          shadow-[0_8px_40px_rgba(0,0,0,0.5)]
        "
      >
        <Navbar />

        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
