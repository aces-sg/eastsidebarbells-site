"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { faqs } from "@/data/faq";

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="faq"
      className="w-full p-6 lg:p-28 flex flex-col lg:flex-row justify-start items-start gap-12"
    >
      <div className="w-full lg:w-96 flex flex-col justify-between items-start gap-8">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="h-10 px-4 pt-3.5 pb-4 bg-sky-50 rounded-[500px] inline-flex justify-center items-center gap-2 overflow-hidden">
            <div className="justify-start text-stone-950 text-base font-semibold leading-tight">
              FAQ
            </div>
          </div>
          <h2 className="w-full text-stone-950 text-3xl lg:text-5xl font-medium capitalize leading-tight lg:leading-[60px]">
            Still have questions? We&apos;ve got you covered.
          </h2>
          <p className="w-full text-slate-500 text-base font-normal leading-relaxed">
            Here&apos;s everything you need to know to get started to reach your
            fitness goals.
          </p>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <Link
            href="mailto:tangjingyuanivan@gmail.com"
            className="h-11 px-6 pt-3.5 pb-4 rounded-lg border border-slate-500 inline-flex justify-center items-center gap-2 overflow-hidden hover:bg-sky-50 transition-colors"
          >
            <div className="justify-start text-stone-950 text-base font-semibold leading-tight">
              Email Us
            </div>
          </Link>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-start gap-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`w-full p-6 rounded-2xl flex flex-col justify-start items-start gap-2 ${
              openIndex === index ? "bg-neutral-50" : ""
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full flex justify-between items-center"
            >
              <h3 className="text-left text-stone-950 text-lg font-semibold leading-normal">
                {faq.question}
              </h3>
              {openIndex === index ? (
                <FiChevronUp className="w-7 h-7 text-stone-950 flex-shrink-0" />
              ) : (
                <FiChevronDown className="w-7 h-7 text-stone-950 flex-shrink-0" />
              )}
            </button>
            {openIndex === index && (
              <p className="w-full text-slate-500 text-base font-normal leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
