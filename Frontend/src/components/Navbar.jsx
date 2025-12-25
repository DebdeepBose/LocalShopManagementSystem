import { Link } from "react-router-dom";
import { LayoutDashboard, Home, Bell } from "lucide-react";

const Navbar = () => {
  return (
    <nav
      className="
        h-14 px-6 flex items-center justify-between mt-2
        bg-white/10 backdrop-blur-xl
        border border-white/15
        border-t-2 border-t-fuchsia-500
        shadow-[0_6px_24px_rgba(0,0,0,0.45)]
        relative select-none
        mx-7 rounded-lg
      "
    >

      <div className="absolute inset-0 rounded-md pointer-events-none ring-1 ring-white/5" />


      <div className="flex items-center gap-4 relative z-10">
        <h1 className="text-lg font-semibold text-white hidden sm:block">
          Management Dashboard
        </h1>

        <div className="flex items-center gap-2">
          <Link
            to="/management"
            title="Dashboard"
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition"
          >
            <LayoutDashboard className="w-5 h-5" />
          </Link>

          <Link
            to="/"
            title="Hero / Home"
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition"
          >
            <Home className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-4 relative z-10">
        <button
          title="Notifications"
          className="relative p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-fuchsia-500 rounded-full" />
        </button>

        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-300 hidden sm:block">
            Admin
          </span>
          <div
            className="
              w-8 h-8 rounded-full
              bg-gradient-to-br from-violet-600 to-fuchsia-600
              text-white
              flex items-center justify-center
              text-sm font-bold
              shadow-[0_4px_12px_rgba(0,0,0,0.4)]
            "
          >
            A
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
