import { Link } from "react-router-dom";

const ManagerLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 px-4">
      <div className="w-full max-w-md rounded-2xl p-6 md:p-10
        bg-white/10 backdrop-blur-2xl
        border border-white/20
        shadow-[0_0_40px_rgba(139,92,246,0.15)]">

        <h2 className="text-2xl font-bold text-white mb-6">Manager Login</h2>

        <div className="grid grid-cols-1 gap-5">
          <input
            type="email"
            placeholder="Email"
            className="
              h-12 px-4 rounded-lg
              bg-black/40 text-white placeholder-gray-400
              border border-white/20
              focus:outline-none focus:ring-2 focus:ring-violet-500
            "
          />
          <input
            type="password"
            placeholder="Password"
            className="
              h-12 px-4 rounded-lg
              bg-black/40 text-white placeholder-gray-400
              border border-white/20
              focus:outline-none focus:ring-2 focus:ring-violet-500
            "
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-8">
          <p className="text-sm text-gray-300">
            Not registered?{" "}
            <Link
              to="/manager/register"
              className="text-violet-400 font-medium hover:underline"
            >
              Register
            </Link>
          </p>

          <div className="flex flex-col md:flex-row-reverse gap-4">
            <button className="h-12 px-6 rounded-lg
              bg-gradient-to-r from-violet-600 to-fuchsia-600
              text-white font-medium
              hover:opacity-90 transition">
              Login
            </button>

            <button className="h-12 px-6 rounded-lg
              border border-white/30 text-white
              hover:bg-white/10 transition">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerLogin;
