import React, { useEffect, useRef } from "react";

const Hero = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const heading = headingRef.current;
    const line = lineRef.current;

    if (heading && line) {
      heading.classList.add("animate-slide-up");
      setTimeout(() => {
        line.classList.add("w-24", "opacity-100");
      }, 700);
    }

    return () => {
      if (heading) heading.classList.remove("animate-slide-up");
      if (line) line.classList.remove("w-24", "opacity-100");
    };
  }, []);

  return (
    <section className="relative bg-castelnau-green pt-24 pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/brand/logos/castelnau-logo.png')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1
            ref={headingRef}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight opacity-0"
          >
            We compound <br /> shareholders' capital at <br /> high rates of
            return.
          </h1>
          <div
            ref={lineRef}
            className="h-1 bg-white mt-8 mb-16 w-0 opacity-0 transition-all duration-700 ease-in-out"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
