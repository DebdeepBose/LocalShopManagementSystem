import ManagementDashboardCard from "../../components/ManagementDashboardCard";

const ManagementMain = () => {
  return (
    <div className="min-h-screen bg-gray-200 px-4 py-6 flex justify-center">
      {/* DASHBOARD PANEL */}
      <div
        className="
          w-full max-w-6xl
          bg-white rounded-xl
          shadow-[0_4px_20px_rgba(0,0,0,0.08)]
          p-6
        "
      >
        {/* Cards go here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          <ManagementDashboardCard />
          <ManagementDashboardCard />
          <ManagementDashboardCard />
          <ManagementDashboardCard />
          <ManagementDashboardCard />
          <ManagementDashboardCard />
        </div>
      </div>
    </div>
  );
};

export default ManagementMain;
