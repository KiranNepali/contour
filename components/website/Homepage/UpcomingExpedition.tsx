import Image from "next/image";
import React from "react";
import Link from "next/link";
import BestSeller1 from "@/public/BestSellers/Best1.jpg";
import BestSeller2 from "@/public/BestSellers/best2.webp";
import BestSeller3 from "@/public/BestSellers/best3.jpg";
import BestSeller4 from "@/public/BestSellers/best4.jpg";
import BestSeller5 from "@/public/BestSellers/best2.jpg";
import BestSeller6 from "@/public/BestSellers/best6.jpg";
import BestSeller7 from "@/public/BestSellers/best7.jpg";
type Props = {};

export default function UpcomingExpedition({}: Props) {
  return (
    <div className="w-full mb-[5rem] relative">
      <div className="w-full flex justify-center items-center flex-col gap-10">
        {/* title top  */}
        <div className="flex flex-col w-full justify-center items-center gap-2">
          {/* title  */}
          <div className="w-auto flex-col flex gap-2 justify-center items-center">
            <h1 className="text-3xl uppercase text-secondary-500 text-center  font-bold">
              Upcoming Expedition
            </h1>
            <hr className="bg-yellow-500 h-[3px] overflow-hidden w-[50%] rounded-full" />
          </div>
          <p className="text-secondary-300 text-center leading-relaxed  w-[50%]">
            Don’t miss out on the opportunity to experience the world like never
            before. Contact us today to book your next unforgettable journey
            with Contour Expedition.
          </p>
        </div>
        {/* cards  */}
        <div className="grid w-full grid-cols-4 gap-4">
          {expeditions.map((item, index) => (
            <Link href="trip/trip_detail" key={index}>
              <div className="w-full cursor-pointer group   hover:scale-95 duration-300 overflow-hidden  relative rounded-3xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]">
                <div className="absolute rounded-3xl top-0 left-0 w-full h-full bg-black opacity-[0.025]"></div>
                <div className="rounded-b-3xl w-full h-[45vh] overflow-hidden">
                  <Image
                    width={1000}
                    height={1000}
                    src={item.src}
                    alt="expedition-img"
                    className="w-full h-full group-hover:scale-110 duration-300 group-hover:brightness-[0.8] brightness-[0.9] object-cover object-center "
                  ></Image>
                </div>
                <div className="absolute top-4  right-4">
                  <span className="text-[13px] font-medium text-white">
                    Onboard
                  </span>
                </div>
                {/* title  */}
                <div className="flex flex-col  px-5  py-3">
                  <div className="">
                    <h2 className="text-[16px] font-semibold text-secondary-400">
                      {item.name}
                    </h2>
                  </div>
                  <div className="w-full h-[15%] text-sm  flex items-center justify-between">
                    <span className="text-[11px] font-medium text-secondary-300">
                      {item.date}
                    </span>
                    {/* BUTTON  */}
                    <Link href="/trip_detail">
                      <button className="bg-yellow-200  text-center w-[100px] text-nowrap rounded-3xl h-10 relative font-sans text-zinc-800 text-xl font-semibold group">
                        <div className="bg-yellow-400 rounded-3xl h-8 w-1/3 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[92px] z-10 duration-500">
                          <svg
                            width="15px"
                            height="15px"
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
                        <p className="translate-x-[18px] text-[10px]">
                          View more
                        </p>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const expeditions = [
  { id: 1, name: "Arctic Adventure", date: "2024-08-01", src: BestSeller1 },
  { id: 2, name: "Desert Trek", date: "2024-09-15", src: BestSeller2 },
  { id: 3, name: "Mountain Climb", date: "2024-10-20", src: BestSeller3 },
  { id: 3, name: "Mountain Climb", date: "2024-10-20", src: BestSeller4 },
];
