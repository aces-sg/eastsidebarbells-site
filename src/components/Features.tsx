'use client';

import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { features } from '@/data/features';

const Features: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? features.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === features.length - 1 ? 0 : prevIndex + 1));
    };

    const currentFeature = features[currentIndex];

    return (
        <section id="features" className="w-full px-4 py-12 lg:px-28 lg:py-20 flex flex-col justify-start items-start gap-8 lg:gap-12">
            {/* Mobile Carousel */}
            <div className="w-full lg:hidden flex flex-col justify-start items-start gap-8">
                <div className="w-full flex flex-col justify-start items-start gap-4">
                    <div className="h-10 px-4 pt-3.5 pb-4 bg-sky-50 rounded-[500px] inline-flex justify-center items-center gap-2 overflow-hidden">
                        <div className="justify-start text-stone-950 text-base font-semibold leading-tight">
                            Our Core Features
                        </div>
                    </div>
                    <h2 className="w-full text-stone-950 text-2xl font-medium leading-loose">
                        {currentFeature.title} - Monitor your stats and performance.
                    </h2>
                    <p className="w-full text-slate-500 text-base font-normal leading-relaxed">
                        Our all-in-one fitness management solution empowers you to revolutionize your fitness journey. Seamlessly train smarter, optimizing your workouts with personalized insights and data-driven recommendations.
                    </p>
                </div>
                <div className="w-full h-72 px-4 py-5 bg-lime-100 rounded-[20px] flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                    <div className="w-full flex-1 bg-slate-200 rounded-lg" />
                </div>
                <div className="w-full flex justify-between items-center">
                    <button
                        onClick={handlePrevious}
                        className="w-12 h-12 pl-2 pr-2.5 py-2.5 bg-white rounded-[500px] outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2.5 hover:bg-gray-50 transition-colors"
                        aria-label="Previous feature"
                    >
                        <FiChevronLeft className="w-10 h-10 text-stone-950" />
                    </button>
                    <div className="justify-start">
                        <span className="text-slate-500 text-sm font-normal leading-tight">{currentIndex + 1}/{features.length} </span>
                        <span className="text-stone-950 text-sm font-medium leading-tight">Progress Monitoring </span>
                    </div>
                    <button
                        onClick={handleNext}
                        className="w-12 h-12 pl-2.5 pr-2 py-2.5 bg-lime-200 rounded-[500px] flex justify-center items-center gap-2.5 hover:bg-lime-300 transition-colors"
                        aria-label="Next feature"
                    >
                        <FiChevronRight className="w-10 h-10 text-stone-950" />
                    </button>
                </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden lg:flex w-full justify-start items-start gap-12">
                <div className="flex-1 flex flex-col justify-between items-start">
                    <div className="w-full flex flex-col justify-start items-start gap-4">
                        <div className="h-10 px-4 pt-3.5 pb-4 bg-sky-50 rounded-[500px] inline-flex justify-center items-center gap-2 overflow-hidden">
                            <div className="justify-start text-stone-950 text-base font-semibold leading-tight">
                                Our Core Feature
                            </div>
                        </div>
                        <h2 className="w-full text-stone-950 text-5xl font-medium capitalize leading-[60px]">
                            {currentFeature.title}
                        </h2>
                        <p className="w-full text-slate-500 text-base font-normal leading-relaxed">
                            {currentFeature.description}
                        </p>
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <div className="text-stone-950 text-xl font-medium leading-loose">
                            Progress Monitoring
                        </div>
                        <div className="h-14 flex justify-start items-center gap-4">
                            <button
                                onClick={handlePrevious}
                                className="w-14 h-14 pl-2 pr-2.5 py-2.5 bg-white rounded-[500px] outline outline-1 outline-offset-[-1px] outline-slate-200 flex justify-center items-center gap-2.5 hover:bg-gray-50 transition-colors"
                                aria-label="Previous feature"
                            >
                                <FiChevronLeft className="w-10 h-10 text-stone-950" />
                            </button>
                            <div className="text-slate-500 text-xl font-normal leading-loose">
                                {currentIndex + 1}/{features.length}
                            </div>
                            <button
                                onClick={handleNext}
                                className="w-14 h-14 pl-2.5 pr-2 py-2.5 bg-lime-200 rounded-[500px] flex justify-center items-center gap-2.5 hover:bg-lime-300 transition-colors"
                                aria-label="Next feature"
                            >
                                <FiChevronRight className="w-10 h-10 text-stone-950" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-[575px] p-7 bg-lime-100 rounded-[20px] flex flex-col justify-start items-start gap-2.5 overflow-hidden">
                    <div className="w-full h-[466px] bg-slate-200 rounded-lg" />
                </div>
            </div>
        </section>
    );
};

export default Features;
