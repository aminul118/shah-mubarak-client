"use client";

import { Typewriter } from "react-simple-typewriter";

const HeroText = () => {
  return (
    <h1 className="text-4xl 2xl:text-5xl font-bold leading-tight mb-6">
      <Typewriter
        words={["Expert Guidance to ..", "Transform Your Business"]}
        loop={true}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </h1>
  );
};

export default HeroText;
