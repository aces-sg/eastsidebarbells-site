import React from 'react';
import { coreValues } from '@/data/coreValues';

const CoreValues: React.FC = () => {
    return (
        <section id="values" className="w-full p-6 lg:p-28 flex flex-col justify-center items-center gap-12">
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="h-10 px-4 pt-3.5 pb-4 bg-sky-50 rounded-[500px] inline-flex justify-center items-center gap-2 overflow-hidden">
                    <div className="justify-start text-stone-950 text-base font-semibold leading-tight">Value</div>
                </div>
                <h2 className="text-center text-stone-950 text-3xl lg:text-5xl font-medium capitalize leading-tight lg:leading-[60px]">
                    Our Core Value
                </h2>
                <p className="text-center text-slate-500 text-base font-normal leading-relaxed">
                    Built for athletes, trainers, and beginners alike—because fitness should be flexible and powerful.
                </p>
            </div>
            <div className="w-full flex flex-col justify-start items-start gap-6">
                <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-6">
                    <div className="w-full lg:w-96 h-48 lg:h-72 px-8 py-14 bg-sky-100 rounded-[20px]" />
                    {coreValues.slice(0, 2).map((value, index) => (
                        <div
                            key={index}
                            className="flex-1 h-auto lg:h-72 p-8 bg-neutral-50 rounded-[20px] flex flex-col justify-between items-start gap-8"
                        >
                            <div className="w-14 h-14 bg-lime-200 rounded-[500px] inline-flex justify-center items-center gap-2.5">
                                {value.icon}
                            </div>
                            <div className="w-full flex flex-col justify-start items-start gap-2">
                                <h3 className="w-full text-stone-950 text-xl lg:text-2xl font-semibold leading-loose">
                                    {value.title}
                                </h3>
                                <p className="w-full text-slate-500 text-base font-medium leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-6">
                    {coreValues.slice(2, 4).map((value, index) => (
                        <div
                            key={index}
                            className="flex-1 h-auto lg:h-72 p-8 bg-neutral-50 rounded-[20px] flex flex-col justify-between items-start gap-8"
                        >
                            <div className="w-14 h-14 bg-lime-200 rounded-[500px] inline-flex justify-center items-center gap-2.5">
                                {value.icon}
                            </div>
                            <div className="w-full flex flex-col justify-start items-start gap-2">
                                <h3 className="w-full text-stone-950 text-xl lg:text-2xl font-semibold leading-loose">
                                    {value.title}
                                </h3>
                                <p className="w-full text-slate-500 text-base font-medium leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className="w-full lg:w-96 h-48 lg:h-72 px-8 py-14 bg-sky-100 rounded-[20px]" />
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
