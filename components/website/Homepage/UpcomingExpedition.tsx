import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";
import ContourMap from "@/public/Contour-Map.svg";
import Link from "next/link";
type Props = {};

export default function UpcomingExpedition({}: Props) {
  return (
    <div className="w-full mb-[5rem] relative">
      {/* <Image alt="" src={ContourMap} className="w-full h-full absolute top-0 left-0"></Image> */}
      <div className="w-full flex justify-center items-center flex-col gap-10">
        {/* title top  */}
        <div className="flex flex-col w-full justify-center items-center gap-2">
          <h1 className="text-3xl tracking-wider uppercase text-secondary-500  font-bold">
            Upcoming Expedition
          </h1>
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
              <div className="w-full cursor-pointer group bg-gradient-to-r from-yellow-100 to-yellow-50  hover:scale-95 duration-300 overflow-hidden  relative rounded-3xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] h-[60vh]">
                <div className="rounded-b-3xl w-full h-[85%] overflow-hidden">
                  <Image
                    width={1000}
                    height={1000}
                    src="https://images.unsplash.com/photo-1517934274943-d1749ff2d7a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                    className="w-full h-full group-hover:scale-110 duration-300 brightness-90 object-cover object-center "
                  ></Image>
                </div>
                <div className="absolute top-4  right-4">
                  <span className="text-[13px] font-medium text-white">
                    Onboard
                  </span>
                </div>
                <div className="w-full h-[15%] text-sm px-5    flex items-center justify-between">
                  <span className="text-[13px] font-medium text-secondary-400">
                    {item.date}
                  </span>
                  <div className="cursor-pointer">
                    <Icon
                      icon="clarity:circle-arrow-solid"
                      className="w-[2rem] h-[2rem] text-primary-500 rotate-90 "
                    />
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
  { id: 1, name: "Arctic Adventure", date: "2024-08-01" },
  { id: 2, name: "Desert Trek", date: "2024-09-15" },
  { id: 3, name: "Mountain Climb", date: "2024-10-20" },
  { id: 3, name: "Mountain Climb", date: "2024-10-20" },
];
