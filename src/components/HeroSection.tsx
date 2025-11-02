import React from "react";
import { ArrowRight, Hammer } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center text-white bg-[#1E3A4C] overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-90"
        style={{
          backgroundImage:
            'url("https://plus.unsplash.com/premium_photo-1682148770244-8b42b1f6cdb1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170")',
        }}
      ></div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A4C]/60 via-[#1E3A4C]/55 to-[#0F1E26]/75"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Logo + Title */}
        <div className="flex flex-col items-center space-y-4 mb-8">
          <div className="p-1 bg-white rounded-2xl shadow-lg">
            <img src="/logo.png" alt="logo" className="w-[180px] rounded-2xl shadow-lg" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            KK Steels & Scaffolding
          </h1>
          <p className="text-lg md:text-xl text-[#F5C542] font-semibold tracking-wide">
            Building the Future, Foundation First.
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8">
          Trusted supplier of high-quality scaffolding, centering materials, and
          construction equipment across Hyderabad — delivering reliability,
          safety, and strength for every build.
        </p>

        {/* Button */}
        <button
          onClick={scrollToContact}
          className="inline-flex items-center justify-center gap-3 bg-[#F5C542] text-[#1E3A4C] font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-[#e0b53b] hover:scale-105 transition-all duration-300"
        >
          <span>Get a Project Quote</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
