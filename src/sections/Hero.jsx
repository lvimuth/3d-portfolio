import React from "react";

function Hero() {
  return (
    <section className="min-h-screen w-full flrx flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-2xl text-xl font-medium text-white text-center font-generalsans">
          Hello, I'm Lakshitha Vimuth <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient ">
          Innovating the Web with AI-Driven Intelligence
        </p>
      </div>
    </section>
  );
}

export default Hero;
