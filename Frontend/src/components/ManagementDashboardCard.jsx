import React from "react";

const ManagementDashboardCard = ({ text, icons }) => {
  return (
    <div
      className="group relative w-64 h-40 sm:w-72 sm:h-44 md:w-80 md:h-52 lg:w-88 lg:h-56 
                 bg-violet-400 flex items-center justify-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] 
                 font-bold rounded-[15px] cursor-pointer 
                 shadow-[4px_6px_15px_rgba(0,0,0,0.2),6px_10px_20px_rgba(0,0,0,0.15)] 
                 transform hover:-translate-y-2 hover:scale-105 transition-all duration-500 
                 before:content-[''] before:absolute before:top-0 before:right-0 before:w-[20%] before:h-[20%] 
                 before:bg-violet-600 before:rounded-[0_15px_0_100%] before:transition-all before:duration-500 
                 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[20%] after:h-[20%] 
                 after:bg-violet-600 after:rounded-[0_100%_0_15px] after:transition-all after:duration-500 
                 hover:before:w-full hover:before:h-full hover:before:rounded-[15px] 
                 hover:after:w-full hover:after:h-full hover:after:rounded-[15px]"
    >
      <span className="relative z-20 group-hover:opacity-0 transition-opacity duration-500 text-white text-2xl sm:text-3xl md:text-4xl">
        {icons && React.isValidElement(icons) ? icons : null}
      </span>

      <div className="absolute inset-0 flex items-center justify-center text-white text-base sm:text-lg md:text-xl lg:text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30">
        {text}
      </div>
    </div>
  );
};

export default ManagementDashboardCard;
