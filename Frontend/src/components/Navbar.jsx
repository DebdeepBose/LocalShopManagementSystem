const Navbar = () => {
  return (
    <nav
      className="
        h-14 px-6 flex items-center justify-between
        bg-white/80 backdrop-blur-md
        border-b border-gray-200 mx-4 mt-2
        shadow-[0_4px_12px_rgba(0,0,0,0.08)]
        border-l-violet-400 border-l-4
      "
    >
      <h1 className="text-lg font-semibold text-gray-800">
        Management Dashboard
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Admin</span>
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
    </nav>
  );
};

export default Navbar;
