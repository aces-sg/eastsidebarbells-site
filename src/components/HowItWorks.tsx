import React from "react";
import Link from "next/link";
import { howItWorksData } from "@/data/howItWorks";

const HowItWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="w-full p-6 lg:p-28 bg-sky-50 flex flex-col lg:flex-row justify-center items-start gap-12 overflow-hidden"
    >
      <div className="w-full lg:w-96 flex flex-col justify-between items-start gap-8">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="h-10 px-4 pt-3.5 pb-4 bg-sky-100 rounded-[500px] inline-flex justify-center items-center gap-2 overflow-hidden">
            <div className="justify-start text-stone-950 text-base font-semibold leading-tight">
              {howItWorksData.badge}
            </div>
          </div>
          <h2 className="w-full text-stone-950 text-3xl lg:text-5xl font-medium capitalize leading-tight lg:leading-[60px]">
            {howItWorksData.title}
          </h2>
          <p className="w-full text-stone-950 text-base font-normal leading-relaxed">
            {howItWorksData.description}
          </p>
        </div>
        <Link
          href={howItWorksData.ctaLink}
          className="h-11 px-6 pt-3.5 pb-4 rounded-lg border border-slate-500 inline-flex justify-center items-center gap-2 overflow-hidden hover:bg-white transition-colors"
        >
          <div className="justify-start text-stone-950 text-base font-semibold leading-tight">
            {howItWorksData.ctaText}
          </div>
        </Link>
      </div>
      <div className="w-full lg:w-[567px] relative flex flex-col justify-start items-start gap-10 lg:gap-14">
        <div className="hidden lg:block w-px h-96 absolute left-[20px] top-[1px] bg-slate-300"></div>
        {howItWorksData.steps.map((step, index) => (
          <div
            key={index}
            className="w-full flex justify-start items-start gap-6"
          >
            <div className="w-10 h-10 p-2.5 bg-blue-100 rounded-[600px] border border-sky-100 flex flex-col justify-center items-center gap-2.5 flex-shrink-0">
              <div className="text-center text-stone-950 text-base font-semibold leading-tight">
                {step.number}
              </div>
            </div>
            <div className="flex-1 rounded-2xl flex flex-col justify-center items-start gap-1.5">
              <h3 className="text-stone-950 text-lg font-semibold leading-normal">
                {step.title}
              </h3>
              <p className="w-full opacity-70 text-stone-950 text-sm font-normal leading-tight">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
