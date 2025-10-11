import React from 'react';
import Link from 'next/link';
import { aboutData } from '@/data/about';

const About: React.FC = () => {
    return (
        <section id="about" className="w-full p-6 lg:p-28 flex flex-col justify-start items-start gap-12">
            <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8">
                <div className="flex flex-col justify-center items-center gap-4">
                    <div className="h-10 px-4 pt-3.5 pb-4 bg-sky-50 rounded-[500px] inline-flex justify-center items-center gap-2 overflow-hidden">
                        <div className="justify-start text-stone-950 text-base font-semibold leading-tight">
                            {aboutData.badge}
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[945px] text-stone-950 text-2xl lg:text-3xl font-medium leading-8 lg:leading-10">
                    {aboutData.description}
                </div>
            </div>
            <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-6">
                <div className="w-full lg:w-96 p-8 bg-yellow-200 rounded-[20px] flex flex-col justify-start items-start gap-8">
                    <div className="w-full text-stone-950 text-2xl lg:text-3xl font-medium capitalize leading-9">
                        {aboutData.stats.title}
                    </div>
                    <div className="flex flex-col justify-start items-start gap-8">
                        <div className="w-full flex flex-col sm:flex-row justify-start items-center gap-8">
                            {aboutData.stats.items.slice(0, 2).map((stat, index) => (
                                <div key={index} className="flex-1 flex flex-col justify-start items-start gap-2">
                                    <div className="text-stone-950 text-3xl lg:text-4xl font-medium capitalize leading-10">
                                        {stat.value}
                                    </div>
                                    <div className="w-full opacity-60 text-stone-950 text-base font-normal leading-relaxed">
                                        {stat.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full flex flex-col sm:flex-row justify-start items-center gap-8">
                            {aboutData.stats.items.slice(2, 4).map((stat, index) => (
                                <div key={index} className="flex-1 flex flex-col justify-start items-start gap-2">
                                    <div className="text-stone-950 text-3xl lg:text-4xl font-medium capitalize leading-10">
                                        {stat.value}
                                    </div>
                                    <div className="w-full opacity-60 text-stone-950 text-base font-normal leading-relaxed">
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
                <div className="flex-1 h-64 lg:h-[452px] bg-slate-200 rounded-[20px]" />
            </div>
        </section>
    );
};

export default About;
