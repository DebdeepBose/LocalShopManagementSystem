import { Store, ShoppingBag } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ChooseToStart = () => {
  const navigate = useNavigate();

  return (
    <div className="relative select-none min-h-[70vh] md:min-h-screen w-full flex flex-col items-center justify-center px-4 overflow-hidden">
      <div
        className="absolute top-[18%] left-[8%] w-36 h-36 md:w-64 md:h-64 rounded-full
             bg-gradient-to-br from-orange-400 via-pink-500 to-fuchsia-600
             blur-[10px] opacity-75 mix-blend-screen"
        style={{ animation: "floatA 12s ease-in-out infinite" }}
      />

      <div
        className="absolute bottom-[14%] right-[8%] w-40 h-40 md:w-64 md:h-64 rounded-full
             bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400
             blur-[10px] opacity-75 mix-blend-screen"
        style={{ animation: "floatB 14s ease-in-out infinite" }}
      />

      <h2 className="relative z-10 mb-25 text-3xl md:text-5xl font-extrabold text-slate-200 tracking-tight">
        Login As
      </h2>

      <div className="relative z-10 w-full max-w-4xl grid grid-cols-2 gap-6 sm:gap-10">
        <div
          onClick={() => navigate("/manager")}
          className="rounded-2xl bg-gradient-to-br from-pink-400 to-fuchsia-500 shadow-lg brightness-95 flex flex-col items-center justify-center py-12 transition-all duration-300 hover:scale-105 active:scale-95"
        >
          <Store className="w-16 h-16 md:w-20 md:h-20 text-fuchsia-950 mb-3" />
          <span className="text-lg sm:text-2xl md:text-3xl font-extrabold text-fuchsia-950 font-[cursive]">
            Manager
          </span>
        </div>

        <div onClick={() => navigate("/customer")} 
        className="rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 shadow-lg flex flex-col items-center justify-center py-12 transition-all duration-300 hover:scale-105 active:scale-95">
          <ShoppingBag className="w-16 h-16 md:w-20 md:h-20 text-amber-900 mb-3" />
          <span className="text-lg md:text-3xl font-extrabold text-amber-900 font-[cursive]">
            Customer
          </span>
        </div>
      </div>

      <style>{`
        @keyframes floatA {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(100px,-80px); }
        }
        @keyframes floatB {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-90px,70px); }
        }
      `}</style>
    </div>
  );
};

export default ChooseToStart;
