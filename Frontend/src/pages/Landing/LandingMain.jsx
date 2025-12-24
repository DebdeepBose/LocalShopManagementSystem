import { useRef } from "react";
import Hero from "./Hero";
import ChooseToStart from "./ChooseToStart";
import { animate } from "framer-motion";

const LandingMain = () => {
  const chooseRef = useRef(null);

  const scrollToChoose = () => {
    if (!chooseRef.current) {
      return;
    }

    const targetY = chooseRef.current.offsetTop;

    animate(window.scrollY, targetY, {
      duration: 1.3,
      ease: "easeInOut",
      onUpdate: (v) => window.scrollTo(0, v),
    });
  };

  return (
    <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <Hero onGetStarted={scrollToChoose} />
      <div ref={chooseRef}>
        <ChooseToStart />
      </div>
    </div>
  );
};

export default LandingMain;
