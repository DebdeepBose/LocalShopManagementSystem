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
    <div className="min-h-screen bg-violet-300 rounded-xl px-2 py-2 flex justify-center ">
      <div
        className="
          w-full
          bg-white rounded-xl
          shadow-[0_4px_20px_rgba(0,0,0,0.08)]
          py-16 px-2 md:px-8
        "
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-16 md:gap-y-20 justify-items-center">
          <ManagementDashboardCard
            text="Set Up"
            icons={<Settings className="w-6 h-6 md:w-10 md:h-10" />}
          />
          <ManagementDashboardCard
            text="Edit"
            icons={<Edit2 className="w-6 h-6 md:w-10 md:h-10" />}
          />
          <ManagementDashboardCard
            text="Shop Items"
            icons={<Package className="w-6 h-6 md:w-10 md:h-10" />}
          />
          <ManagementDashboardCard
            text="Services"
            icons={<CalendarCheck className="w-6 h-6 md:w-10 md:h-10" />}
          />
          <ManagementDashboardCard
            text="Schedule"
            icons={<Clock className="w-6 h-6 md:w-10 md:h-10" />}
          />
          <ManagementDashboardCard
            text="Analytics"
            icons={<BarChart2 className="w-6 h-6 md:w-10 md:h-10" />}
          />
        </div>
      </div>
    </div>
  );
};

export default ManagementMain;
