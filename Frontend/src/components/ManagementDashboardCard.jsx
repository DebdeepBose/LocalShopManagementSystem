const ManagementDashboardCard = () => {
  return (
    <div className="relative w-96 h-56 bg-[mediumturquoise] flex items-center justify-center text-[25px] font-bold rounded-[15px] cursor-pointer
      before:content-[''] before:absolute before:top-0 before:right-0 before:w-[20%] before:h-[20%] before:bg-[lightblue] before:rounded-[0_15px_0_100%] before:transition-all before:duration-500
      after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[20%] after:h-[20%] after:bg-[lightblue] after:rounded-[0_100%_0_15px] after:transition-all after:duration-500
      hover:before:w-full hover:before:h-full hover:before:rounded-[15px]
      hover:after:w-full hover:after:h-full hover:after:rounded-[15px] hover:after:content-['HELLO']">
      HOVER
    </div>
  );
};

export default ManagementDashboardCard;
