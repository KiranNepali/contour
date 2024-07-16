"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
type Props = {};

export default function Blogs({}: Props) {
  const [isLoading, setIsLoading] = useState(false);

  return (
    // <div className="w-10/12 py-[3rem] mx-auto">
    //   <div className="grid  lg:grid-cols-3  gap-2 ">
    //     <Link
    //       href="blog/blog_detail"
    //       className="relative flex flex-col row-span-3 col-span-1 border border-gray-300/20 rounded-lg"
    //     >
    //       <Image
    //         width={1000}
    //         height={1000}
    //         style={{ objectFit: "cover" }}
    //         className="rounded-xl h-[60%] brightness-50 hover:brightness-100 duration-500"
    //         src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //         alt="blog-img"
    //       />
    //       <div className="capitalize bottom-4 w-[90%] mx-auto left-4 text-zinc-900">
    //         <h1 className="text-lg font-semibold mb-4 leading-6">
    //           This is bento grid in vercel blog
    //         </h1>
    //         <div className="abolute text-zinc-800 left-4 bottom-4 text-xs flex items-center space-x-2">
    //           <p>#travel</p>
    //           <p className="right-4 text-zinc-800 absolute">12.10.2024</p>
    //         </div>{" "}
    //       </div>
    //     </Link>
    //     <Link
    //       href="blog/blog_detail"
    //       className="relative flex  border border-gray-300/20 rounded-lg"
    //     >
    //       <Image
    //         width={1000}
    //         height={1000}
    //         style={{ objectFit: "cover" }}
    //         className="rounded-xl brightness-50 hover:brightness-100 duration-500"
    //         src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //         alt="blog-img"
    //       />
    //       <div className="absolute capitalize bottom-4 w-[90%] mx-auto left-4 text-zinc-900">
    //         <h1 className="text-lg font-semibold mb-4 leading-6">
    //           This is bento grid in vercel blog
    //         </h1>
    //         <div className="abolute text-zinc-800 left-4 bottom-4 text-xs flex items-center space-x-2">
    //           <p>#travel</p>
    //           <p className="right-4 text-zinc-800 absolute">12.10.2024</p>
    //         </div>{" "}
    //       </div>
    //     </Link>
    //     <Link
    //       href="blog/blog_detail"
    //       className="relative flex  border border-gray-300/20 rounded-lg"
    //     >
    //       <Image
    //         width={1000}
    //         height={1000}
    //         style={{ objectFit: "cover" }}
    //         className="rounded-xl brightness-50 hover:brightness-100 duration-500"
    //         src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //         alt="blog-img"
    //       />
    //       <div className="absolute capitalize bottom-4 w-[90%] mx-auto left-4 text-zinc-900">
    //         <h1 className="text-lg font-semibold mb-4 leading-6">
    //           Lorem ipsum dolor sit amet.
    //         </h1>
    //         <div className="abolute text-zinc-800 left-4 bottom-4 text-xs flex items-center space-x-2">
    //           <p>#travel</p>
    //           <p className="right-4 text-zinc-800 absolute">12.10.2024</p>
    //         </div>{" "}
    //       </div>
    //     </Link>
    //     <Link
    //       href="/blog_detail"
    //       className="relative flex row-span-2 col-span-1 border border-gray-300/20 rounded-lg"
    //     >
    //       <Image
    //         width={1000}
    //         height={1000}
    //         style={{ objectFit: "cover" }}
    //         className="rounded-xl brightness-50 hover:brightness-100 duration-500"
    //         src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //         alt="blog-img"
    //       />
    //       <div className="absolute capitalize bottom-4 w-[90%] mx-auto left-4 text-zinc-900">
    //         <h1 className="text-lg font-semibold mb-4 leading-6">
    //           Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    //         </h1>
    //         <div className="abolute text-zinc-800 left-4 bottom-4 text-xs flex items-center space-x-2">
    //           <p>#travel</p>
    //           <p className="right-4 text-zinc-800 absolute">12.10.2024</p>
    //         </div>{" "}
    //       </div>
    //     </Link>
    //     <Link
    //       href="blog/blog_detail"
    //       className="relative flex row-span-2 col-span-1 border border-gray-300/20 rounded-lg"
    //     >
    //       <Image
    //         width={1000}
    //         height={1000}
    //         style={{ objectFit: "cover" }}
    //         className="rounded-xl brightness-50 hover:brightness-100 duration-500"
    //         src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //         alt="blog-img"
    //       />
    //       <div className="absolute capitalize bottom-4 w-[90%] mx-auto left-4 text-zinc-900">
    //         <h1 className="text-lg font-semibold mb-4 leading-6">
    //           Lorem ipsum dolor, sit amet consectetur adipisicing.
    //         </h1>
    //         <div className="abolute text-zinc-800 left-4 bottom-4 text-xs flex items-center space-x-2">
    //           <p>#travel</p>
    //           <p className="right-4 text-zinc-800 absolute">12.10.2024</p>
    //         </div>{" "}
    //       </div>
    //     </Link>
    //   </div>
    // </div>
    <div className="w-full mt-[2rem] text-zinc-950">
      <div className="w-full md:w-10/12 mx-auto flex justify-center items-center">
        {isLoading ? (
          <div className="w-full text-black text-5xl  h-[80vh] flex justify-center items-center">
            <span className="loader"></span>
          </div>
        ) : (
          <div className="w-full grid grid-cols-3 gap-2 h-auto md:min-h-[80vh] max-h-auto   mt-4">
            {BlogData.map((item: any, index: any) => (
              <Link
                key={index}
                href={`/blog_detail`}
                className="w-full  hover:bg-gradient-to-r z-40 duration-300 hover:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]  from-yellow-400 via-yellow-200  to-yellow-800  text-sm md:text-lg   flex-col relative text-zinc-950  cursor-pointer overflow-hidden hover:border-secondary-300 border-primary-100 rounded-xl p-[1px]   flex gap-3 mb-4"
              >
                <div className="bg-yellow-50 flex flex-col gap-3 p-3 rounded-xl w-full h-auto">
                  {/* image */}

                  <div className="w-full h-[15rem] bg-primary-200 overflow-hidden rounded-xl">
                    <Image
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover group-hover:scale-105 duration-300 object-center"
                      src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="blog-img"
                    />
                  </div>
                  <div className="w-full relative z-20  flex flex-col gap-3 items-start">
                    <div className="text-zinc-950 title font-medium">
                      LOREM TITLE
                    </div>
                    {/* desc  */}
                    <div className="text-zinc-700 text-sm  para text-[15px]">
                      {/* {parse(item?.Contents[0]?.Intro.slice(0, 120))} */}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Reiciendis, quis?
                    </div>
                    <div className="w-full flex font-medium title  text-[13px] justify-between items-center">
                      {/* DATE  */}
                      <div className="text-zinc-600  ">date</div>

                      {/* CATEGORY  */}
                      <span className="text-zinc-700">#category</span>
                    </div>
                  </div>
                </div>

                {/* right part  */}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const BlogData = ["1", "2", "3", "4"];
