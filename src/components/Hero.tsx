import React from "react";
import Link from "next/link";
import { heroDetails } from "@/data/hero";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="bg-sky-50 flex flex-col justify-start items-start pt-24"
    >
      <div className="w-full px-4 lg:px-28 py-6 lg:pt-12 lg:pb-20 flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-24">
        <div className="w-full lg:w-[527px] flex flex-col justify-start items-start gap-8">
          <div className="w-full flex flex-col justify-start items-start gap-4">
            <div className="h-10 px-4 pt-3 pb-3.5 bg-white rounded-[500px] inline-flex justify-center items-center gap-2 overflow-hidden">
              <div className="justify-start text-stone-950 text-base font-semibold leading-tight">
                {heroDetails.badge}
              </div>
            </div>
            <h1 className="w-full text-stone-950 text-3xl lg:text-6xl font-medium capitalize leading-9 lg:leading-[76px]">
              {heroDetails.heading}
            </h1>
            <p className="w-full text-slate-500 text-base font-normal leading-relaxed">
              {heroDetails.subheading}
            </p>
            {/* Mobile image grid */}
            <div className="w-full lg:hidden flex justify-start items-start gap-4">
              <div className="flex-1 h-44 bg-slate-200 rounded-2xl" />
              <div className="flex-1 h-44 bg-slate-200 rounded-2xl" />
            </div>
            <div className="w-full lg:hidden h-48 bg-slate-200 rounded-xl" />
          </div>
          <Link
            href={heroDetails.ctaLink}
            className="h-11 px-6 pt-3.5 pb-4 bg-yellow-200 rounded-lg inline-flex justify-center items-center gap-2 overflow-hidden hover:bg-yellow-300 transition-colors"
          >
            <div className="justify-start text-stone-950 text-base font-semibold leading-tight">
              {heroDetails.ctaText}
            </div>
          </Link>
        </div>
        {/* Desktop image grid */}
        <div className="hidden lg:flex flex-1 justify-end items-start gap-4">
          <div className="w-80 h-[472px] bg-slate-200 rounded-[20px]" />
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="w-56 h-64 bg-slate-200 rounded-[20px]" />
            <div className="w-56 h-44 bg-slate-200 rounded-[20px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
