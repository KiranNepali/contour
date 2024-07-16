import Image from "next/image";
import Link from "next/link";
import React from "react";
import BestSeller1 from "@/public/BestSellers/Best1.jpg";
import BestSeller2 from "@/public/BestSellers/best2.webp";
import BestSeller3 from "@/public/BestSellers/best3.jpg";
import BestSeller4 from "@/public/BestSellers/best4.jpg";
import BestSeller5 from "@/public/BestSellers/best2.jpg";
import BestSeller6 from "@/public/BestSellers/best6.jpg";
import BestSeller7 from "@/public/BestSellers/best7.jpg";

type Props = {};

export default function AboutHome({}: Props) {
  return (
    <div className="w-full mx-auto py-[5rem]">
      <div className="flex gap-10">
        {/* CARDS  */}
        <div className="grid w-full mx-auto grid-cols-4 gap-2">
          <div className="flex items-start justify-center flex-col gap-2">
            <h1 className="uppercase font-semibold text-3xl tracking-wider">
              Best sellers
            </h1>
            <p className="text-zinc-700 leading-relaxed">
              At{" "}
              <span className="font-medium italic">
                Contour Expeditions Pvt. Ltd.
              </span>
              , we specialize in crafting unforgettable Mountaineering and
              Trekking experiences in the capital of mountains. Join us for an
              adventure of a lifetime and create memories that will last a
              lifetime.
            </p>

            {/* BUTTON  */}
            <Link href="/about_us">
              <button className="bg-yellow-200 mt-4 text-center w-48 rounded-3xl h-14 relative font-sans text-black text-xl font-semibold group">
                <div className="bg-yellow-400 rounded-3xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                    className="rotate-180"
                  >
                    <path
                      fill="#000000"
                      d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                    ></path>
                    <path
                      fill="#000000"
                      d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                    ></path>
                  </svg>
                </div>
                <p className="translate-x-2 text-sm">Know more ?</p>
              </button>
            </Link>
          </div>
          <div className="w-full h-[50vh] rounded-3xl overflow-hidden relative group">
            <div className="w-full group-hover:opacity-[1] opacity-0 duration-200 ease-linear mt-10  group-hover:mt-0 absolute text-white justify-center pointer-events-none text-center items-center flex flex-col gap-2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
              {/* name  */}
              <span className="font-semibold text-lg">Everest Base Camp</span>
              {/* distance  */}
              <span className="text-sm font-medium">5500m</span>
              {/* place  */}
              Alpine Trekking
              <button className="mt-3 bg-[#FFFBEB]0 text-sm px-10 py-2 rounded-3xl">
                View
              </button>
            </div>
            <Image
              src={BestSeller1}
              alt=""
              className="w-full h-full object-cover object-center hover:brightness-75  cursor-pointer"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full h-[50vh] rounded-3xl overflow-hidden relative group">
            <div className="w-full group-hover:opacity-[1] opacity-0 duration-200 ease-linear mt-10  group-hover:mt-0 absolute text-white justify-center pointer-events-none text-center items-center flex flex-col gap-2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
              {/* name  */}
              <span className="font-semibold text-lg">Everest Base Camp</span>
              {/* distance  */}
              <span className="text-sm font-medium">5500m</span>
              {/* place  */}
              Alpine Trekking
              <button className="mt-3 bg-[#FFFBEB]0 text-sm px-10 py-2 rounded-3xl">
                View
              </button>
            </div>
            <Image
              src={BestSeller2}
              alt=""
              className="w-full h-full object-cover object-center hover:brightness-75  cursor-pointer"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full h-[50vh] rounded-3xl overflow-hidden relative group">
            <div className="w-full group-hover:opacity-[1] opacity-0 duration-200 ease-linear mt-10  group-hover:mt-0 absolute text-white justify-center pointer-events-none text-center items-center flex flex-col gap-2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
              {/* name  */}
              <span className="font-semibold text-lg">Everest Base Camp</span>
              {/* distance  */}
              <span className="text-sm font-medium">5500m</span>
              {/* place  */}
              Alpine Trekking
              <button className="mt-3 bg-[#FFFBEB]0 text-sm px-10 py-2 rounded-3xl">
                View
              </button>
            </div>
            <Image
              src={BestSeller3}
              alt=""
              className="w-full h-full object-cover object-center hover:brightness-75  cursor-pointer"
              width={1000}
              height={1000}
            />
          </div>

          <div className="w-full h-[50vh] rounded-3xl overflow-hidden relative group">
            <div className="w-full group-hover:opacity-[1] opacity-0 duration-200 ease-linear mt-10  group-hover:mt-0 absolute text-white justify-center pointer-events-none text-center items-center flex flex-col gap-2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
              {/* name  */}
              <span className="font-semibold text-lg">Everest Base Camp</span>
              {/* distance  */}
              <span className="text-sm font-medium">5500m</span>
              {/* place  */}
              Alpine Trekking
              <button className="mt-3 bg-[#FFFBEB]0 text-sm px-10 py-2 rounded-3xl">
                View
              </button>
            </div>
            <Image
              src={BestSeller4}
              alt=""
              className="w-full h-full object-cover object-center hover:brightness-75  cursor-pointer"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full h-[50vh] rounded-3xl overflow-hidden relative group">
            <div className="w-full group-hover:opacity-[1] opacity-0 duration-200 ease-linear mt-10  group-hover:mt-0 absolute text-white justify-center pointer-events-none text-center items-center flex flex-col gap-2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
              {/* name  */}
              <span className="font-semibold text-lg">Everest Base Camp</span>
              {/* distance  */}
              <span className="text-sm font-medium">5500m</span>
              {/* place  */}
              Alpine Trekking
              <button className="mt-3 bg-[#FFFBEB]0 text-sm px-10 py-2 rounded-3xl">
                View
              </button>
            </div>
            <Image
              src={BestSeller5}
              alt=""
              className="w-full h-full object-cover object-center hover:brightness-75  cursor-pointer"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full h-[50vh] rounded-3xl overflow-hidden relative group">
            <div className="w-full group-hover:opacity-[1] opacity-0 duration-200 ease-linear mt-10  group-hover:mt-0 absolute text-white justify-center pointer-events-none text-center items-center flex flex-col gap-2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
              {/* name  */}
              <span className="font-semibold text-lg">Everest Base Camp</span>
              {/* distance  */}
              <span className="text-sm font-medium">5500m</span>
              {/* place  */}
              Alpine Trekking
              <button className="mt-3 bg-[#FFFBEB]0 text-sm px-10 py-2 rounded-3xl">
                View
              </button>
            </div>
            <Image
              src={BestSeller6}
              alt=""
              className="w-full h-full object-cover object-center hover:brightness-75  cursor-pointer"
              width={1000}
              height={1000}
            />
          </div>
          <div className="w-full h-[50vh] rounded-3xl overflow-hidden relative group">
            <div className="w-full group-hover:opacity-[1] opacity-0 duration-200 ease-linear mt-10  group-hover:mt-0 absolute text-white justify-center pointer-events-none text-center items-center flex flex-col gap-2 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10">
              {/* name  */}
              <span className="font-semibold text-lg">Everest Base Camp</span>
              {/* distance  */}
              <span className="text-sm font-medium">5500m</span>
              {/* place  */}
              Alpine Trekking
              <button className="mt-3 bg-[#FFFBEB]0 text-sm px-10 py-2 rounded-3xl">
                View
              </button>
            </div>
            <Image
              src={BestSeller7}
              alt=""
              className="w-full h-full object-cover object-center hover:brightness-75  cursor-pointer"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
