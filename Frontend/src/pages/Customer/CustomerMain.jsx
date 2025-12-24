import CustomerLogin from "./CustomerLogin";

const CustomerMain = () => {
  return (
    <div className="relative min-h-screen bg-slate-900 overflow-hidden flex items-center justify-center">
      <div className="relative z-10 w-full max-w-3xl">
        <CustomerLogin />
      </div>
    </div>
  );
};

export default CustomerMain;
