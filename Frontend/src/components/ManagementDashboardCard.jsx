import React from "react";

const ManagementDashboardCard = ({ text, icons }) => {
  return (
    <div
      className="
        group relative
        w-full max-w-[8rem] md:max-w-full h-32
        md:w-64 md:h-54
        lg:w-88 lg:h-52

        active:scale-95

        bg-white/10
        border border-white/10

        flex flex-col md:flex items-center justify-center
        font-bold rounded-[15px] cursor-pointer

        shadow-[0_10px_40px_rgba(0,0,0,0.6)]
        transform transition-all duration-500
        md:hover:-translate-y-2 md:hover:scale-105

        md:before:content-[''] md:before:absolute md:before:top-0 md:before:right-0
        md:before:w-[20%] md:before:h-[20%]
        md:before:bg-[#1a1a2e]
        md:before:rounded-[0_15px_0_100%] md:before:transition-all md:before:duration-500

        md:after:content-[''] md:after:absolute md:after:bottom-0 md:after:left-0
        md:after:w-[20%] md:after:h-[20%]
        md:after:bg-[#1a1a2e]
        md:after:rounded-[0_100%_0_15px] md:after:transition-all md:after:duration-500

        md:hover:before:w-full md:hover:before:h-full md:hover:before:rounded-[15px]
        md:hover:after:w-full md:hover:after:h-full md:hover:after:rounded-[15px]
      "
    >
      {/* ICON */}
      <span
        className="
          relative z-20
          md:group-hover:opacity-0
          transition-opacity duration-500
          text-white
          text-xl sm:text-2xl md:text-4xl
        "
      >
        {icons && React.isValidElement(icons) ? icons : null}
      </span>

      {text && (
        <span
          className="
            mt-2 text-xs sm:text-sm
            text-violet-500
            md:hidden
          "
        >
          {text}
        </span>
      )}

      {text && (
        <div
          className="
            absolute inset-0 hidden md:flex items-center justify-center
            text-transparent bg-clip-text
            bg-gradient-to-r from-violet-400 to-fuchsia-500
            text-xl lg:text-2xl
            font-bold
            opacity-0 md:group-hover:opacity-100
            transition-opacity duration-300 z-30
          "
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default ManagementDashboardCard;
