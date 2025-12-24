import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Store, ShoppingBag } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const ChooseToStart = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const boxes = gsap.utils.toArray(scrollRef.current.children);

    boxes.forEach((box, i) => {
      gsap.to(box, {
        x: () => {
          const w = window.innerWidth;
          if (w < 640) return i % 2 === 0 ? 300 : -300;
          if (w < 1024) return i % 2 === 0 ? 275 : -275;
          return i % 2 === 0 ? 500 : -500;
        },
        rotation: 340,
        borderRadius: "25%",
        scale: window.innerWidth < 768 ? 1.25 : 1.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: box,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="select-none h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 md:px-0">
      <h2 className="mb-25 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-200 tracking-tight">
        Login As
      </h2>

      <div
        className="w-full flex items-center justify-center gap-6 sm:gap-8 md:gap-12"
        ref={scrollRef}
      >
        <div className="scroll-box w-44 h-44 sm:w-60 sm:h-60 md:w-66 md:h-66 rotate-[125deg] md:rotate-[5deg] rounded-2xl bg-gradient-to-br from-pink-400 to-fuchsia-500 shadow-lg brightness-90 flex items-center justify-center">
          <div className="hover:scale-110 transition-all duration-200 active:scale-90  rotate-[47deg] flex flex-col items-center">
            <Store className="w-20 h-20 sm:w-24 sm:h-24 text-fuchsia-950" />
            <span className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-fuchsia-950 font-[cursive]">
              Manager
            </span>
          </div>
        </div>

        <div className="scroll-box w-44 h-44 sm:w-60  sm:h-60 md:w-66 md:h-66 rotate-[125deg] md:rotate-[5deg] rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 shadow-lg brightness-90 flex items-center justify-center">
          <div className="hover:scale-110 transition-all duration-200 active:scale-90 rotate-[47deg] flex flex-col items-center">
            <ShoppingBag className="w-20 h-20 sm:w-24 sm:h-24 text-amber-900" />
            <span className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-amber-900 font-[cursive]">
              Customer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseToStart;
