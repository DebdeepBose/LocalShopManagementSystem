import React from "react";

const ManagementDashboardCard = ({ text, icons }) => {
  return (
    <div
      className="
        group relative
        w-full max-w-[10rem] md:max-w-full h-36
        md:w-88 md:h-52

        bg-violet-400
        flex items-center justify-center
        font-bold rounded-[15px] cursor-pointer

        shadow-[4px_6px_15px_rgba(0,0,0,0.2),6px_10px_20px_rgba(0,0,0,0.15)]
        transform transition-all duration-500
        hover:-translate-y-2 hover:scale-105

        before:content-[''] before:absolute before:top-0 before:right-0
        before:w-[20%] before:h-[20%] before:bg-violet-600
        before:rounded-[0_15px_0_100%] before:transition-all before:duration-500

        after:content-[''] after:absolute after:bottom-0 after:left-0
        after:w-[20%] after:h-[20%] after:bg-violet-600
        after:rounded-[0_100%_0_15px] after:transition-all after:duration-500

        hover:before:w-full hover:before:h-full hover:before:rounded-[15px]
        hover:after:w-full hover:after:h-full hover:after:rounded-[15px]
      "
    >
      {/* Icon */}
      <span className="relative z-20 group-hover:opacity-0 transition-opacity duration-500 text-white
                       text-xl sm:text-2xl md:text-4xl">
        {icons && React.isValidElement(icons) ? icons : null}
      </span>

      {/* Hover text */}
      <div className="absolute inset-0 flex items-center justify-center text-white
                      text-sm sm:text-base md:text-xl lg:text-2xl
                      font-bold opacity-0 group-hover:opacity-100
                      transition-opacity duration-300 z-30">
        {text}
      </div>
    </div>
  );
};

export default ManagementDashboardCard;
