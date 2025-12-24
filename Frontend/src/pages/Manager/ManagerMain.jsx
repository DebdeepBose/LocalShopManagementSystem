import ManagerLogin from "./ManagerLogin";

const ManagerMain = () => {
  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden flex items-center justify-center">
      <div className="relative z-10 w-full max-w-3xl">
        <ManagerLogin />
      </div>
    </div>
  );
};

export default ManagerMain;
