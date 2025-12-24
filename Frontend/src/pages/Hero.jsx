const Hero = () => {
  return (
    <div
      className="
      relative w-full h-screen overflow-hidden
      flex items-center justify-center
      bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]
    "
    >
      <div
        className="
          absolute top-[10%] left-[5%]
          w-40 h-40
          md:w-80 md:h-80
          rounded-full
          bg-gradient-to-br from-orange-500 to-fuchsia-500
          blur-[12px] md:blur-[16px]
          opacity-70
        "
        style={{ animation: "float1 10s ease-in-out infinite" }}
      />

      <div
        className="
          absolute bottom-[15%] right-[5%]
          w-32 h-32
          md:w-56 md:h-56
          rounded-full
          bg-gradient-to-br from-cyan-400 to-violet-600
          blur-[12px] md:blur-[16px]
          opacity-70
        "
        style={{ animation: "float2 10s ease-in-out infinite" }}
      />

      <div
        className="
          absolute top-[8%] left-[55%]
          w-28 h-28
          md:w-44 md:h-44
          rounded-full
          bg-gradient-to-br from-pink-500 to-yellow-400
          blur-[12px] md:blur-[16px]
          opacity-70
        "
        style={{ animation: "float3 12s ease-in-out infinite" }}
      />

      <div
        className="
        relative z-10
        px-6 py-8
        md:px-16 md:py-12
        rounded-2xl
        bg-white/20 backdrop-blur-xl
        border border-white/30
        shadow-[0_8px_32px_rgba(0,0,0,0.35)]
        text-center text-white
        max-w-[90%] md:max-w-none
      "
      >
        <h1
          className="
          text-3xl
          md:text-5xl
          font-bold
          leading-[1.2]
          py-1
          mb-4
          bg-gradient-to-r from-orange-500 to-fuchsia-500
          bg-clip-text text-transparent
        "
        >
          Manage Everything In One Place
        </h1>

        <p
          className="
          text-xl
          md:text-2xl
          mb-6 md:mb-8
          text-slate-300
          font-semibold
        "
        >
          Shop Management Made Easy
        </p>

        <button
          className="
          px-6 py-3
          md:px-8 md:py-3
          rounded-xl
          bg-white/25 backdrop-blur-md
          transition-all duration-300
          hover:bg-white/40 hover:-translate-y-0.5
          text-black font-semibold active:scale-90 hover:scale-105
        "
        >
          Get Started
        </button>
      </div>

      <style>{`
        @keyframes float1 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(100px,-80px); }
        }
        @keyframes float2 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(-90px,70px); }
        }
        @keyframes float3 {
          0%,100% { transform: translate(0,0); }
          50% { transform: translate(80px,-100px); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
