import ManagementDashboardCard from "../../components/ManagementDashboardCard";
import {
  Settings,
  Edit2,
  Package,
  CalendarCheck,
  Clock,
  BarChart2,
} from "lucide-react";

const ManagementMain = () => {
  return (
    <div className=" bg-violet-300 rounded-xl px-2 py-2 flex justify-center h-fit">
      <div
        className="
          w-full h-fit
          bg-white rounded-xl
          shadow-[0_4px_20px_rgba(0,0,0,0.08)]
          py-10 md:py-16 px-2 md:px-8
        "
      >
        <div
          className="grid 
    
    grid-cols-2       /* small screens */
    md:grid-cols-3       /* medium screens */
    lg:grid-cols-3       /* large screens */
    xl:grid-cols-3       /* extra large screens */
    gap-y-8
    lg:gap-y-24 md:gap-x-12
    lg:gap-x-0
    justify-items-center"
        >
          <ManagementDashboardCard
            text="Set Up"
            icons={
              <Settings className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            }
          />
          <ManagementDashboardCard
            text="Edit"
            icons={<Edit2 className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />}
          />
          <ManagementDashboardCard
            text="Shop Items"
            icons={
              <Package className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            }
          />
          <ManagementDashboardCard
            text="Services"
            icons={
              <CalendarCheck className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            }
          />
          <ManagementDashboardCard
            text="Schedule"
            icons={<Clock className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />}
          />
          <ManagementDashboardCard
            text="Analytics"
            icons={
              <BarChart2 className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ManagementMain;
