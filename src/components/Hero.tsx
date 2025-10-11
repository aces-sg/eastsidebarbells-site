import React from 'react';
import Link from 'next/link';
import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    return (
        <section id="hero" className="bg-sky-50 flex flex-col justify-start items-start pt-24">
            <div className="w-full px-6 lg:px-28 pt-12 pb-20 flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24">
                <div className="w-full lg:w-[527px] flex flex-col justify-start items-start gap-8">
                    <div className="w-full flex flex-col justify-start items-start gap-4">
                        <div className="h-10 px-4 pt-3 pb-3.5 bg-white rounded-[500px] inline-flex justify-center items-center gap-2 overflow-hidden">
                            <div className="justify-start text-stone-950 text-base font-semibold leading-tight">
                                {heroDetails.badge}
                            </div>
                        </div>
                        <h1 className="w-full text-stone-950 text-4xl lg:text-6xl font-medium capitalize leading-tight lg:leading-[76px]">
                            {heroDetails.heading}
                        </h1>
                        <p className="w-full text-slate-500 text-base font-normal leading-relaxed">
                            {heroDetails.subheading}
                        </p>
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
                <div className="flex-1 flex justify-start items-start gap-4">
                    <div className="w-60 lg:w-80 h-96 lg:h-[472px] bg-slate-200 rounded-[20px]" />
                    <div className="flex flex-col justify-start items-start gap-4">
                        <div className="w-40 lg:w-56 h-48 lg:h-64 bg-slate-200 rounded-[20px]" />
                        <div className="w-40 lg:w-56 h-32 lg:h-44 bg-slate-200 rounded-[20px]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
