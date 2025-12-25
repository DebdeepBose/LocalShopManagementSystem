import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Home,
  Bell,
} from "lucide-react";

const Navbar = () => {
  return (
    <nav
      className="
        h-14 px-6 flex items-center justify-between
        bg-white/90 backdrop-blur-md
        border-b border-gray-200 mx-4 mt-2
        shadow-[0_4px_12px_rgba(0,0,0,0.08)]
        border-l-violet-400 border-l-4
      "
    >
      {/* Left: title + shortcuts */}
      <div className="flex items-center gap-4">
        <h1 className="text-lg font-semibold text-gray-800 hidden sm:block">
          Management Dashboard
        </h1>

        {/* Icons */}
        <div className="flex items-center gap-2">
          <Link
            to="/management"
            title="Dashboard"
            className="p-2 rounded-lg hover:bg-violet-100 text-gray-700 hover:text-violet-600 transition"
          >
            <LayoutDashboard className="w-5 h-5" />
          </Link>

          <Link
            to="/"
            title="Hero / Home"
            className="p-2 rounded-lg hover:bg-violet-100 text-gray-700 hover:text-violet-600 transition"
          >
            <Home className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Right: notifications + profile */}
      <div className="flex items-center gap-4">
        <button
          title="Notifications"
          className="relative p-2 rounded-lg hover:bg-violet-100 text-gray-700 hover:text-violet-600 transition"
        >
          <Bell className="w-5 h-5" />
          {/* notification dot */}
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600 hidden sm:block">
            Admin
          </span>
          <div
            className="
              w-8 h-8 rounded-full
              bg-violet-600 text-white
              flex items-center justify-center
              text-sm font-bold
              shadow-[0_2px_6px_rgba(0,0,0,0.25)]
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
