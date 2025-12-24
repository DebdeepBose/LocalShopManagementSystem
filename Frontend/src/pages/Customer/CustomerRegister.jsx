import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; 

const CustomerRegister = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4 relative">
      
      <Link
        to="/"
        className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center
                   bg-black/40 rounded-full text-white hover:bg-black/60 transition"
      >
        <ArrowLeft className="w-5 h-5" />
      </Link>

      <div className="w-full max-w-3xl rounded-2xl p-6 md:p-10
        bg-white/10 backdrop-blur-2xl
        border border-white/20
        shadow-[0_0_40px_rgba(139,92,246,0.15)]">

        <h2 className="text-2xl font-bold text-white mb-6">
          Register as a Customer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            "First name",
            "Last name",
            "Email",
            "Password",
          ].map((label) => (
            <input
              key={label}
              type="text"
              placeholder={label}
              className="
                h-12 px-4 rounded-lg
                bg-black/40 text-white placeholder-gray-400
                border border-white/20
                focus:outline-none focus:ring-2 focus:ring-violet-500
              "
            />
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-8">
          <p className="text-sm text-gray-300">
            Already registered?{" "}
            <Link
              to="/customer/login"
              className="text-violet-400 font-medium hover:underline"
            >
              Login
            </Link>
          </p>

          <div className="flex flex-col md:flex-row-reverse gap-4">
            <button className="h-12 px-6 rounded-lg active:scale-95
              bg-gradient-to-r from-violet-600 to-fuchsia-500
              text-white font-medium
              hover:opacity-90 transition">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerRegister;
