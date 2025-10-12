import React from 'react';
import Link from 'next/link';
import { aboutData } from '@/data/about';

const About: React.FC = () => {
    return (
        <section id="about" className="w-full px-4 py-10 lg:p-28 flex flex-col justify-start items-start gap-6 lg:gap-12">
            <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-4 lg:gap-8">
                <div className="flex flex-col justify-center items-start lg:items-center gap-4">
                    <div className="h-10 px-4 pt-3.5 pb-4 bg-sky-50 rounded-[500px] inline-flex justify-center items-center gap-2 overflow-hidden">
                        <div className="justify-start text-stone-950 text-base font-semibold leading-tight">
                            {aboutData.badge}
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[945px] text-stone-950 text-xl lg:text-3xl font-medium leading-loose lg:leading-10">
                    {aboutData.description}
                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-6">
                {/* Mobile: Image first */}
                <div className="w-full lg:hidden h-64 bg-slate-200 rounded-[20px]" />

                <div className="w-full lg:w-96 p-4 lg:p-8 bg-yellow-200 rounded-[20px] flex flex-col justify-start items-start gap-6 lg:gap-8">
                    <div className="w-full text-stone-950 text-2xl lg:text-3xl font-medium capitalize leading-loose lg:leading-9">
                        {aboutData.stats.title}
                    </div>
                    <div className="w-full flex flex-col justify-start items-start gap-6 lg:gap-8">
                        <div className="w-full flex justify-start items-center gap-6 lg:gap-8">
                            {aboutData.stats.items.slice(0, 2).map((stat, index) => (
                                <div key={index} className="flex-1 flex flex-col justify-start items-start gap-2">
                                    <div className="text-stone-950 text-4xl font-medium capitalize leading-10">
                                        {stat.value}
                                    </div>
                                    <div className="w-full opacity-60 text-stone-950 text-sm lg:text-base font-normal leading-tight lg:leading-relaxed">
                                        {stat.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full flex justify-start items-center gap-6 lg:gap-8">
                            {aboutData.stats.items.slice(2, 4).map((stat, index) => (
                                <div key={index} className="flex-1 flex flex-col justify-start items-start gap-2">
                                    <div className="text-stone-950 text-4xl font-medium capitalize leading-10">
                                        {stat.value}
                                    </div>
                                    <div className="w-full opacity-60 text-stone-950 text-sm lg:text-base font-normal leading-tight lg:leading-relaxed">
                                        {stat.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <Link
                        href={aboutData.stats.ctaLink}
                        className="w-full h-11 px-6 pt-3.5 pb-4 bg-white rounded-lg inline-flex justify-center items-center gap-2 overflow-hidden hover:bg-gray-50 transition-colors"
                    >
                        <div className="justify-start text-stone-950 text-base font-semibold leading-tight">
                            {aboutData.stats.ctaText}
                        </div>
                    </Link>
                </div>

                {/* Desktop: Image second */}
                <div className="hidden lg:block flex-1 h-[452px] bg-slate-200 rounded-[20px]" />
            </div>
        </section>
    );
};

export default About;
