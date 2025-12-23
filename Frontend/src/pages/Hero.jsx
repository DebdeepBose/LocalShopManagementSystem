const Hero = () => {
  return (
    <div className="
      relative w-full h-screen overflow-hidden
      flex items-center justify-center
      bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]
    ">

  
      <div
        className="
          absolute top-[10%] left-[5%]
          w-40 h-40
          md:w-[320px] md:h-[320px]
          rounded-full
          bg-gradient-to-br from-orange-500 to-fuchsia-500
          blur-[20px] md:blur-[30px]
          opacity-60
        "
        style={{ animation: "float1 10s ease-in-out infinite" }}
      />


      <div
        className="
          absolute bottom-[15%] right-[5%]
          w-32 h-32
          md:w-[220px] md:h-[220px]
          rounded-full
          bg-gradient-to-br from-cyan-400 to-violet-600
          blur-[20px] md:blur-[30px]
          opacity-60
        "
        style={{ animation: "float2 14s ease-in-out infinite" }}
      />

      <div
        className="
          absolute top-[8%] left-[55%]
          w-28 h-28
          md:w-[180px] md:h-[180px]
          rounded-full
          bg-gradient-to-br from-pink-500 to-yellow-400
          blur-[16px] md:blur-[25px]
          opacity-60
        "
        style={{ animation: "float3 16s ease-in-out infinite" }}
      />

      {/* Glass Card */}
      <div className="
        relative z-10
        px-6 py-8
        md:px-16 md:py-12
        rounded-2xl
        bg-white/20 backdrop-blur-xl
        border border-white/30
        shadow-[0_8px_32px_rgba(0,0,0,0.35)]
        text-center text-white
        max-w-[90%] md:max-w-none
      ">
        <h1 className="
          text-4xl
          md:text-6xl
          font-bold
          leading-[1.2]
          py-1
          mb-4
          bg-gradient-to-r from-orange-500 to-fuchsia-500
          bg-clip-text text-transparent
        ">
          Ready To Manage?
        </h1>

        <p className="
          text-base
          md:text-2xl
          mb-6 md:mb-8
          text-slate-200
        ">
          Experience the future of productivity.
        </p>

        <button className="
          px-6 py-3
          md:px-8 md:py-3
          rounded-xl
          bg-white/25 backdrop-blur-md
          transition-all duration-300
          hover:bg-white/40 hover:-translate-y-0.5
        ">
          Get Started
        </button>
      </div>

      <style>{`
        @keyframes float1 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(80px,-60px); }
        }
        @keyframes float2 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-70px,50px); }
        }
        @keyframes float3 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(60px,-80px); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
