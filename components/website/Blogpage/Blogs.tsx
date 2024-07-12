import Image from "next/image";
import Link from "next/link";
import React from "react";
type Props = {};

export default function Blogs({}: Props) {
  return (
    <div className="w-10/12 mx-auto">
      <div className="grid p-4 lg:grid-cols-3 h-[80vh] gap-2 lg:grid-rows-3 bg-dark">
        <Link
          href="blog/blog_detail"
          className="relative flex row-span-3 col-span-1 border border-gray-300/20 rounded-lg bg-dark"
        >
          <Image
            width={1000}
            height={1000}
            style={{ objectFit: "cover" }}
            className="rounded-xl brightness-50 hover:brightness-100 duration-500"
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="blog-img"
          />
          <div className="absolute capitalize bottom-4 w-[90%] mx-auto left-4 text-white">
            <h1 className="text-lg font-semibold mb-4 leading-6">
              This is bento grid in vercel blog
            </h1>
            <div className="abolute text-secondary-50 left-4 bottom-4 text-xs flex items-center space-x-2">
              <p>#travel</p>
              <p className="right-4 text-secondary-50 absolute">12.10.2024</p>
            </div>{" "}
          </div>
        </Link>
        <Link
          href="blog/blog_detail"
          className="relative flex row-span-1 col-span-1 border border-gray-300/20 rounded-lg bg-dark"
        >
          <Image
            width={1000}
            height={1000}
            style={{ objectFit: "cover" }}
            className="rounded-xl brightness-50 hover:brightness-100 duration-500"
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="blog-img"
          />
          <div className="absolute capitalize bottom-4 w-[90%] mx-auto left-4 text-white">
            <h1 className="text-lg font-semibold mb-4 leading-6">
              This is bento grid in vercel blog
            </h1>
            <div className="abolute text-secondary-50 left-4 bottom-4 text-xs flex items-center space-x-2">
              <p>#travel</p>
              <p className="right-4 text-secondary-50 absolute">12.10.2024</p>
            </div>{" "}
          </div>
        </Link>
        <Link
          href="blog/blog_detail"
          className="relative flex row-span-2 col-span-1 border border-gray-300/20 rounded-lg bg-dark"
        >
          <Image
            width={1000}
            height={1000}
            style={{ objectFit: "cover" }}
            className="rounded-xl brightness-50 hover:brightness-100 duration-500"
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="blog-img"
          />
          <div className="absolute capitalize bottom-4 w-[90%] mx-auto left-4 text-white">
            <h1 className="text-lg font-semibold mb-4 leading-6">
              Lorem ipsum dolor sit amet.
            </h1>
            <div className="abolute text-secondary-50 left-4 bottom-4 text-xs flex items-center space-x-2">
              <p>#travel</p>
              <p className="right-4 text-secondary-50 absolute">12.10.2024</p>
            </div>{" "}
          </div>
        </Link>
        <Link
          href="blog/blog_detail"
          className="relative flex row-span-2 col-span-1 border border-gray-300/20 rounded-lg bg-dark"
        >
          <Image
            width={1000}
            height={1000}
            style={{ objectFit: "cover" }}
            className="rounded-xl brightness-50 hover:brightness-100 duration-500"
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="blog-img"
          />
          <div className="absolute capitalize bottom-4 w-[90%] mx-auto left-4 text-white">
            <h1 className="text-lg font-semibold mb-4 leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h1>
            <div className="abolute text-secondary-50 left-4 bottom-4 text-xs flex items-center space-x-2">
              <p>#travel</p>
              <p className="right-4 text-secondary-50 absolute">12.10.2024</p>
            </div>{" "}
          </div>
        </Link>
        <Link
          href="blog/blog_detail"
          className="relative flex row-span-2 col-span-1 border border-gray-300/20 rounded-lg bg-dark"
        >
          <Image
            width={1000}
            height={1000}
            style={{ objectFit: "cover" }}
            className="rounded-xl brightness-50 hover:brightness-100 duration-500"
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="blog-img"
          />
          <div className="absolute capitalize bottom-4 w-[90%] mx-auto left-4 text-white">
            <h1 className="text-lg font-semibold mb-4 leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing.
            </h1>
            <div className="abolute text-secondary-50 left-4 bottom-4 text-xs flex items-center space-x-2">
              <p>#travel</p>
              <p className="right-4 text-secondary-50 absolute">12.10.2024</p>
            </div>{" "}
          </div>
        </Link>
      </div>
    </div>
  );
}
