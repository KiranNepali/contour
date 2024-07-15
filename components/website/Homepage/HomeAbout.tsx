import Image from "next/image";
import React from "react";

type Props = {};

export default function AboutHome({}: Props) {
  return (
    <div className="w-full mx-auto py-[5rem]">
      <div className="flex gap-10">
        {/* CARDS  */}
        <div className="grid w-full mx-auto grid-cols-4 gap-2">
          <div className="flex items-start flex-col gap-2">
            <h1 className="uppercase font-semibold text-3xl tracking-wider">Best sellers</h1>
            <p className="text-zinc-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium aliquam exercitationem consectetur vel quibusdam cum
              iste amet earum molestiae sit!
            </p>

            <button className="btn">About us</button>
          </div>
          <div className="w-full h-[50vh] rounded-3xl overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1700558686126-0d071e23e8a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover object-center"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full h-[50vh] rounded-3xl overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1700558686126-0d071e23e8a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover object-center"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full h-[50vh]  rounded-3xl overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1700558686126-0d071e23e8a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover object-center"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full h-[50vh] mt-[-20%] rounded-3xl overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1700558686126-0d071e23e8a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover object-center"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full h-[50vh] rounded-3xl overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1700558686126-0d071e23e8a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover object-center"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full h-[50vh] rounded-3xl overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1700558686126-0d071e23e8a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover object-center"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full h-[50vh] rounded-3xl overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1700558686126-0d071e23e8a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover object-center"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}