import Link from 'next/link';
import React from 'react';
import Logo from './Logo';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Footer: React.FC = () => {
    return (
        <footer id="contact" className="w-full px-6 lg:px-28 py-20 flex flex-col justify-start items-start gap-8">
            <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-8">
                <Link href="/" className="flex justify-start items-center gap-1.5">
                    <Logo />
                    <div className="justify-start text-stone-950 text-2xl lg:text-3xl font-medium leading-loose">
                        {siteDetails.siteName}
                    </div>
                </Link>
                <div className="flex justify-start items-center gap-8 lg:gap-14 flex-wrap justify-center">
                    {menuItems.map((item) => (
                        <Link
                            key={item.text}
                            href={item.url}
                            className="text-slate-500 text-base font-medium leading-relaxed hover:text-stone-950 transition-colors"
                        >
                            {item.text}
                        </Link>
                    ))}
                </div>
                <div className="flex justify-center items-center gap-6">
                    <div className="w-10 h-10 p-4 rounded-[99px] border border-slate-500 flex justify-center items-center gap-2 hover:bg-sky-50 transition-colors cursor-pointer">
                        <div className="text-slate-500 text-xs font-bold leading-normal">FB</div>
                    </div>
                    <div className="w-10 h-10 p-4 rounded-[99px] border border-slate-500 flex justify-center items-center gap-2 hover:bg-sky-50 transition-colors cursor-pointer">
                        <div className="text-slate-500 text-xs font-bold leading-normal">IN</div>
                    </div>
                    <div className="w-10 h-10 p-4 rounded-[99px] border border-slate-500 flex justify-center items-center gap-2 hover:bg-sky-50 transition-colors cursor-pointer">
                        <div className="text-center text-slate-500 text-xs font-bold leading-normal">IG</div>
                    </div>
                </div>
            </div>
            <div className="w-full pt-8 border-t border-black/10 flex flex-col lg:flex-row justify-between items-center gap-4">
                <div className="text-center text-slate-500 text-sm font-normal leading-tight">
                    © {new Date().getFullYear()} Eastsidebarbells. All rights reserved.
                </div>
                <div className="flex justify-start items-center gap-4">
                    <Link href="#" className="opacity-80 text-center text-slate-500 text-sm font-normal leading-tight hover:opacity-100 transition-opacity">
                        Privacy & Policy
                    </Link>
                    <Link href="#" className="opacity-80 text-center text-slate-500 text-sm font-normal leading-tight hover:opacity-100 transition-opacity">
                        Help Center
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
