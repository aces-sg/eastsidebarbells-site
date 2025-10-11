import React from 'react';
import { blogPosts } from '@/data/blog';

const Blog: React.FC = () => {
    return (
        <section id="blog" className="w-full p-6 lg:p-28 flex flex-col justify-center items-center gap-12">
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="h-10 px-4 pt-3.5 pb-4 bg-sky-50 rounded-[500px] inline-flex justify-center items-center gap-2 overflow-hidden">
                    <div className="justify-start text-stone-950 text-base font-semibold leading-tight">Blog</div>
                </div>
                <h2 className="text-center text-stone-950 text-3xl lg:text-5xl font-medium capitalize leading-tight lg:leading-[60px]">
                    From the FitMove Blog
                </h2>
                <p className="text-center text-slate-500 text-base font-normal leading-relaxed">
                    Tips, stories, and strategies to help you stay fit and focused.
                </p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogPosts.map((post, index) => (
                    <div key={index} className="flex-1 flex flex-col justify-start items-start gap-6">
                        <div className="w-full h-48 lg:h-72 bg-slate-200 rounded-2xl" />
                        <div className="w-full flex flex-col justify-start items-start gap-4">
                            <div className="h-10 px-4 pt-3.5 pb-4 bg-yellow-50 rounded-[500px] inline-flex justify-center items-center gap-2 overflow-hidden">
                                <div className="justify-start text-yellow-600 text-base font-semibold leading-tight">
                                    {post.category}
                                </div>
                            </div>
                            <h3 className="w-full text-stone-950 text-xl lg:text-2xl font-semibold leading-loose">
                                {post.title}
                            </h3>
                            <p className="w-full text-slate-500 text-lg font-normal leading-normal">
                                {post.date}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
