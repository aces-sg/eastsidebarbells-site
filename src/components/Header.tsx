'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';

import Logo from './Logo';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-sky-50 fixed top-0 left-0 right-0 z-50 mx-auto w-full">
            <div className="h-24 px-6 lg:px-28 py-6 flex justify-between items-center overflow-hidden">
                {/* Logo */}
                <Link href="/" className="flex justify-start items-center gap-1.5">
                    <Logo />
                    <div className="justify-start text-stone-950 text-2xl lg:text-3xl font-medium leading-loose">
                        {siteDetails.siteName}
                    </div>
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-10 lg:gap-14">
                    {menuItems.map((item, index) => (
                        <li key={item.text}>
                            <Link
                                href={item.url}
                                className={`text-base font-normal leading-relaxed transition-colors ${
                                    index === 0 ? 'text-stone-950 font-bold' : 'text-slate-500 hover:text-stone-950'
                                }`}
                            >
                                {item.text}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA Button */}
                <div className="hidden md:block">
                    <Link
                        href="#cta"
                        className="h-11 px-6 pt-3.5 pb-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-slate-500 inline-flex justify-center items-center gap-2 overflow-hidden hover:bg-slate-50 transition-colors"
                    >
                        <div className="justify-start text-stone-950 text-base font-semibold leading-tight">
                            RSVP Today
                        </div>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="bg-primary text-black focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
                        aria-controls="mobile-menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <HiBars3 className="h-6 w-6" aria-hidden="true" />
                        )}
                        <span className="sr-only">Toggle navigation</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="text-foreground hover:text-primary block" onClick={toggleMenu}>
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="#cta" className="text-black bg-primary hover:bg-primary-accent px-5 py-2 rounded-lg block w-fit" onClick={toggleMenu}>
                                Download App
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
