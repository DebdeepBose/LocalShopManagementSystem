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
          if (w < 640) return i % 2 === 0 ? 275 : -275; 
          if (w < 1024) return i % 2 === 0 ? 275 : -275; 
          return i % 2 === 0 ? 450 : -450; 
        },
        rotation: 320,
        borderRadius: "30%",
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
    <div
      className="h-screen w-full flex items-center justify-center gap-6 sm:gap-8 md:gap-12 overflow-hidden px-4 md:px-0"
      ref={scrollRef}
    >
      <div className="scroll-box w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-2xl bg-gradient-to-br from-pink-400 to-fuchsia-500 shadow-lg brightness-90 flex flex-col items-center justify-center gap-2 sm:gap-4">
        <Store className="w-20 h-20 sm:w-24 sm:h-24 text-fuchsia-950 rotate-[40deg]" />
        <span className="text-xl sm:text-2xl md:text-3xl rotate-[40deg] font-extrabold tracking-wide text-fuchsia-950 font-[cursive]">
          Manager
        </span>
      </div>

      <div className="scroll-box w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-500 shadow-lg brightness-90 flex flex-col items-center justify-center gap-2 sm:gap-4">
        <ShoppingBag className="w-20 h-20 sm:w-24 sm:h-24 text-amber-900 rotate-[-15deg]" />
        <span className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-wide text-amber-900 font-[cursive]">
          Customer
        </span>
      </div>
    </div>
  );
};

export default ChooseToStart;
