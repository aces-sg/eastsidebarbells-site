import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="w-full p-6 lg:p-28 flex flex-col justify-center items-center gap-12">
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="h-10 px-4 pt-3.5 pb-4 bg-sky-50 rounded-[500px] inline-flex justify-center items-center gap-2 overflow-hidden">
                    <div className="justify-start text-stone-950 text-base font-semibold leading-tight">Testimonials</div>
                </div>
                <h2 className="text-center text-stone-950 text-3xl lg:text-5xl font-medium capitalize leading-tight lg:leading-[60px]">
                    What Our Members are Saying
                </h2>
                <p className="text-center text-slate-500 text-base font-normal leading-relaxed">
                    Hear how FitMove has transformed the fitness journeys of users, one workout at a time.
                </p>
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-8">
                <div className="w-full lg:w-96 h-64 lg:h-[476px] bg-slate-200 rounded-[20px]" />
                <div className="flex-1 p-8 bg-lime-200 rounded-[20px] flex flex-col justify-start items-start gap-6">
                    <div className="w-8 h-8 relative overflow-hidden">
                        <div className="w-3.5 h-5 left-[1px] top-[6.54px] absolute text-lime-700 text-2xl">&quot;</div>
                        <div className="w-3.5 h-5 left-[17.49px] top-[6.55px] absolute text-lime-700 text-2xl">&quot;</div>
                    </div>
                    <div className="w-full flex flex-col justify-start items-start gap-8">
                        <p className="w-full text-stone-950 text-2xl lg:text-3xl font-medium leading-8 lg:leading-10">
                            &quot;I lost 15 lbs in 2 months using their personalized training plan. Love it! The daily progress tracking kept me accountable. It&apos;s simple to use and incredibly effective for long-term change.&quot;
                        </p>
                        <div className="w-full text-lime-700 text-xl lg:text-2xl font-normal leading-loose">
                            - Sarah Reinner
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-start items-end gap-32 lg:gap-64">
                    <div className="flex justify-start items-end gap-6">
                        <div className="w-32 lg:w-40 h-32 lg:h-40 bg-slate-200 rounded-[20px]" />
                        <div className="flex flex-col justify-start items-start gap-2">
                            <div className="text-slate-500 text-base font-normal leading-relaxed">Next Customer</div>
                            <div className="flex justify-start items-center gap-2">
                                <div className="text-stone-950 text-lg font-medium leading-normal">Laurent</div>
                                <FiChevronRight className="w-6 h-6 text-stone-950" />
                            </div>
                        </div>
                    </div>
                    <div className="h-14 flex justify-start items-center gap-6">
                        <button className="w-14 h-14 p-2.5 bg-white rounded-[500px] flex justify-center items-center gap-2.5 hover:bg-gray-50 transition-colors">
                            <FiChevronLeft className="w-10 h-10 text-stone-950" />
                        </button>
                        <button className="w-14 h-14 p-2.5 bg-lime-200 rounded-[500px] flex justify-center items-center gap-2.5 hover:bg-lime-300 transition-colors">
                            <FiChevronRight className="w-10 h-10 text-stone-950" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
