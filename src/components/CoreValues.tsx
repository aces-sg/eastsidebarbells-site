import React from "react";
import { coreValues } from "@/data/coreValues";

const CoreValues: React.FC = () => {
  return (
    <section
      id="values"
      className="w-full px-4 py-10 lg:p-28 flex flex-col justify-center items-center gap-6 lg:gap-12"
    >
      <div className="w-full flex flex-col justify-center items-start lg:items-center gap-4">
        <div className="h-10 px-4 pt-3.5 pb-4 bg-sky-50 rounded-[500px] inline-flex justify-center items-center gap-2 overflow-hidden">
          <div className="justify-start text-stone-950 text-base font-semibold leading-tight">
            Principles of Fitness
          </div>
        </div>
        <h2 className="text-center text-stone-950 text-2xl lg:text-5xl font-medium capitalize leading-loose lg:leading-[60px]">
          Find Your Strength
        </h2>
        <p className="w-full text-left lg:text-center text-slate-500 text-base font-normal leading-relaxed">
          Built for athletes, trainers, and beginners alike—because workouts
          should be fun and effective!
        </p>
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-6">
        {/* Mobile: Image first, then all cards */}
        <div className="w-full lg:hidden h-64 p-4 bg-sky-100 rounded-[20px]" />

        {/* Desktop: First row with image and 2 cards */}
        <div className="w-full hidden lg:flex justify-center items-center gap-6">
          <div className="flex-1 h-72 px-8 py-14 bg-sky-100 rounded-[20px]" />
          {coreValues.slice(0, 2).map((value, index) => (
            <div
              key={index}
              className="flex-1 h-72 p-8 bg-neutral-50 rounded-[20px] flex flex-col justify-between items-start gap-8"
            >
              <div className="w-14 h-14 bg-lime-200 rounded-[500px] inline-flex justify-center items-center gap-2.5">
                {value.icon}
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <h3 className="w-full text-stone-950 text-2xl font-semibold leading-loose">
                  {value.title}
                </h3>
                <p className="w-full text-slate-500 text-base font-medium leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: All value cards */}
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="w-full lg:hidden p-4 bg-neutral-50 rounded-[20px] flex flex-col justify-start items-start gap-4"
          >
            <div className="w-10 h-10 bg-lime-200 rounded-[500px] inline-flex justify-center items-center gap-2.5">
              <div className="w-6 h-6">{value.icon}</div>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <h3 className="w-full text-stone-950 text-lg font-medium leading-normal">
                {value.title}
              </h3>
              <p className="w-full text-slate-500 text-base font-medium leading-relaxed">
                {value.description}
              </p>
            </div>
          </div>
        ))}

        {/* Desktop: Second row with 2 cards and image */}
        <div className="w-full hidden lg:flex justify-start items-start gap-6">
          {coreValues.slice(2, 4).map((value, index) => (
            <div
              key={index}
              className="flex-1 h-72 p-8 bg-neutral-50 rounded-[20px] flex flex-col justify-between items-start gap-8"
            >
              <div className="w-14 h-14 bg-lime-200 rounded-[500px] inline-flex justify-center items-center gap-2.5">
                {value.icon}
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <h3 className="w-full text-stone-950 text-2xl font-semibold leading-loose">
                  {value.title}
                </h3>
                <p className="w-full text-slate-500 text-base font-medium leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
          <div className="flex-1 h-72 px-8 py-14 bg-sky-100 rounded-[20px]" />
        </div>

        {/* Mobile: Image last */}
        <div className="w-full lg:hidden h-64 p-4 bg-sky-100 rounded-[20px]" />
      </div>
    </section>
  );
};

export default CoreValues;
