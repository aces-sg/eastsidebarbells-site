import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ctaDetails } from "@/data/cta"

const CTA: React.FC = () => {
    return (
        <section id="cta" className="w-full px-4 lg:px-40 py-10 lg:py-14 bg-lime-200 flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-24 overflow-hidden relative">
            {/* Decorative circles - visible on desktop */}
            <div className="hidden lg:block w-[907px] h-[907px] rounded-full border border-lime-50 absolute -left-96" />
            <div className="hidden lg:block w-[1184px] h-[1184px] rounded-full border border-lime-50 absolute -left-[500px]" />
            <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-8 lg:gap-20 z-10">
                <div className="w-full flex flex-col justify-start items-start gap-4">
                    <div className="h-10 px-4 pt-3.5 pb-4 bg-lime-100 rounded-[500px] inline-flex justify-center items-center gap-2 overflow-hidden">
                        <div className="justify-start text-stone-950 text-base font-semibold leading-tight">
                            {ctaDetails.badge}
                        </div>
                    </div>
                    <h2 className="w-full text-stone-950 text-3xl lg:text-5xl font-medium capitalize leading-tight lg:leading-[60px]">
                        {ctaDetails.heading}
                    </h2>
                    <p className="w-full text-stone-950 text-base font-normal leading-relaxed">
                        {ctaDetails.subheading}
                    </p>
                </div>
                <Link
                    href={ctaDetails.ctaLink}
                    className="h-11 px-6 pt-3.5 pb-4 bg-white rounded-lg inline-flex justify-center items-center gap-2 overflow-hidden hover:bg-gray-50 transition-colors"
                >
                    <div className="justify-start text-stone-950 text-base font-semibold leading-tight">
                        {ctaDetails.ctaText}
                    </div>
                </Link>
            </div>
            <div className="w-full lg:w-auto flex flex-col justify-start items-start gap-4 lg:gap-6 z-10">
                <div className="w-full flex justify-start items-center gap-4 lg:gap-6">
                    <div className="w-32 lg:w-44 h-40 lg:h-56 bg-white rounded-2xl relative overflow-hidden">
                        <Image
                            src="/images/bishan-park-1.webp"
                            alt="Bishan Park workout"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex-1 lg:w-96 h-40 lg:h-56 bg-white rounded-2xl relative overflow-hidden">
                        <Image
                            src="/images/bishan-park-2.webp"
                            alt="Kettlebell training"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="w-full lg:w-[634px] h-32 lg:h-48 bg-white rounded-2xl relative overflow-hidden">
                    <Image
                        src="/images/bishan-park-3.webp"
                        alt="Group fitness at Bishan Park"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    )
}

export default CTA