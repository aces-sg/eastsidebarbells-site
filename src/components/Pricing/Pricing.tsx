import React from 'react';
import Link from 'next/link';
import { FiCheck } from 'react-icons/fi';
import { tiers } from "@/data/pricing";

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="w-full p-6 lg:p-28 flex flex-col justify-center items-center gap-12">
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="h-10 px-4 pt-3.5 pb-4 bg-sky-50 rounded-[500px] inline-flex justify-center items-center gap-2 overflow-hidden">
                    <div className="justify-start text-stone-950 text-base font-semibold leading-tight">Pricing</div>
                </div>
                <h2 className="text-center text-stone-950 text-3xl lg:text-5xl font-medium capitalize leading-tight lg:leading-[60px]">
                    Choose Your FitMove Plan
                </h2>
                <p className="text-center text-slate-500 text-base font-normal leading-relaxed">
                    Simple pricing for every level of commitment. Start your journey today.
                </p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {tiers.map((tier) => (
                    <div
                        key={tier.name}
                        className={`flex-1 p-6 rounded-2xl flex flex-col justify-center items-start gap-6 ${
                            tier.recommended ? 'bg-yellow-200' : 'bg-sky-50'
                        }`}
                    >
                        <div className="w-full flex flex-col justify-start items-start gap-6">
                            <div className="w-full flex flex-col justify-start items-start gap-2">
                                <h3 className="w-full text-stone-950 text-2xl font-semibold leading-loose">
                                    {tier.name}
                                </h3>
                                <p className={`w-full text-sm font-normal leading-tight ${
                                    tier.recommended ? 'text-stone-950' : 'text-slate-500'
                                }`}>
                                    {tier.description}
                                </p>
                            </div>
                            <div className="w-full">
                                <span className="text-stone-950 text-3xl lg:text-4xl font-medium capitalize leading-10">
                                    ${tier.price}/
                                </span>
                                <span className="text-stone-950 text-lg font-medium leading-normal">month</span>
                            </div>
                        </div>
                        <div className="w-52 h-0 border-t border-black/10"></div>
                        <div className="w-full flex flex-col justify-start items-start gap-3">
                            {tier.features.map((feature, index) => (
                                <div key={index} className="flex justify-center items-center gap-2">
                                    <FiCheck className={`w-6 h-6 ${
                                        tier.recommended ? 'text-stone-950' : 'text-slate-500'
                                    }`} />
                                    <div className={`text-base font-normal leading-relaxed ${
                                        tier.recommended ? 'text-stone-950' : 'text-slate-500'
                                    }`}>
                                        {feature}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Link
                            href="#cta"
                            className="w-full h-11 px-6 pt-3.5 pb-4 bg-white rounded-lg inline-flex justify-center items-center gap-2 overflow-hidden hover:bg-gray-50 transition-colors"
                        >
                            <div className="justify-start text-stone-950 text-base font-semibold leading-tight">
                                Choose Plan
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Pricing;