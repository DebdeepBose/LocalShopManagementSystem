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
    <div className="bg-slate-900 rounded-xl md:px-1 md:py-1 px-2 py-2 flex justify-center h-fit">
      <div
        className="
          w-full h-fit
          bg-white/10 backdrop-blur-xl
          rounded-xl
          border border-white/20
          shadow-[0_8px_32px_rgba(0,0,0,0.45)]
          py-10 md:py-16 px-2 md:px-8
        "
      >
        <div
          className="grid 
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-3
            xl:grid-cols-3
            gap-y-8
            lg:gap-y-24 md:gap-x-12
            lg:gap-x-0
            justify-items-center"
        >
          <ManagementDashboardCard
            text="Set Up"
            icons={<Settings className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />}
          />
          <ManagementDashboardCard
            text="Edit"
            icons={<Edit2 className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />}
          />
          <ManagementDashboardCard
            text="Shop Items"
            icons={<Package className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />}
          />
          <ManagementDashboardCard
            text="Services"
            icons={<CalendarCheck className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />}
          />
          <ManagementDashboardCard
            text="Schedule"
            icons={<Clock className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />}
          />
          <ManagementDashboardCard
            text="Analytics"
            icons={<BarChart2 className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagementMain;
