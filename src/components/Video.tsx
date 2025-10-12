import React from 'react';
import { FiPlay } from 'react-icons/fi';

const Video: React.FC = () => {
    return (
        <section id="video" className="w-full p-6 lg:p-28 flex flex-col justify-start items-start gap-12">
            <div className="w-full flex flex-col justify-center items-center gap-4">
                <div className="h-10 px-4 pt-3.5 pb-4 bg-sky-50 rounded-[500px] inline-flex justify-center items-center gap-2 overflow-hidden">
                    <div className="justify-start text-stone-950 text-base font-semibold leading-tight">Video</div>
                </div>
                <h2 className="w-full lg:w-[962px] text-center text-stone-950 text-3xl lg:text-5xl font-medium capitalize leading-tight lg:leading-[60px]">
                    Join our Workout Today
                </h2>
                <p className="w-full text-center text-slate-500 text-base font-normal leading-relaxed">
                    See we train and grow together
                </p>
            </div>
            <div className="w-full h-64 lg:h-[550px] bg-slate-200 rounded-[20px] flex justify-center items-center gap-2.5">
                <button className="w-16 h-16 pl-1 py-4 bg-white rounded-[500px] flex justify-center items-center gap-2.5 hover:bg-gray-50 transition-colors">
                    <FiPlay className="w-8 h-8 text-lime-300" />
                </button>
            </div>
        </section>
    );
};

export default Video;
