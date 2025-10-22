import React from 'react';
import { useLoaderData } from 'react-router';

const BlogsPage = () => {
    const blogs = useLoaderData()
    return (
        <section className="">
            <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
                {/* Featured Blog */}
                <div className="cursor-pointer block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
                    <img
                        src={blogs[0].image}
                        alt={blogs[0].title}
                        className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
                    />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                            {blogs[0].title}
                        </h3>
                        <span className="text-xs text-gray-400">{blogs[0].date}</span>
                        <p className='text-primary-content/70'>{blogs[0].description}</p>
                    </div>
                </div>

                {/* Other Blogs */}
                <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {blogs.slice(1).map(blog => (
                        <div key={blog.id} className="cursor-pointer max-w-sm mx-auto group hover:no-underline focus:no-underline ">
                            <img
                                role="presentation"
                                className="object-cover w-full rounded h-44 bg-gray-500"
                                src={blog.image}
                                alt={blog.title}
                            />
                            <div className="p-6 space-y-2">
                                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                                    {blog.title}
                                </h3>
                                <span className="text-xs text-gray-400">{blog.date}</span>
                                <p className='text-primary-content/70'>{blog.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <button type="button" className="btn btn-primary text-white rounded-full">
                        Load more posts...
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogsPage;