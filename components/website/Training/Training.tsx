import React from "react";
import OtherActivitiesData from "@/data/OtherActivitiesData";
import TrainingData from "@/data/TrainingData";
import Link from "next/link";
import CourseImage from "@/public/OtherActivities/Rafting/rafting1.avif";
import Image from "next/image";
import { Icon } from "@iconify/react";
type Props = {};

export default function Training({}: Props) {
  return (
    <div className="w-11/12 mx-auto h-screen py-[3rem]">
      {/* tab  */}
      <div className="w-full py-1 overflow-x-scroll md:overflow-x-visible mb-9 flex justify-start  items-center gap-5">
        {/* exp tab  */}
        {TrainingData.map((item, index) => (
          <Link
            href={`/other_activities/${item.route}`}
            key={index}
            className={` px-10 py-2 rounded-3xl  whitespace-nowrap shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:scale-105 duration-300 cursor-pointer`}
          >
            <h1
              className={`relative tracking-wide text-[14px] text-zinc-800  font-medium`}
            >
              {item.name}
            </h1>
          </Link>
        ))}
      </div>

      {/* traingin cards  */}
      <div className="grid w-full grid-cols-4 gap-4">
        {TrainingData.map((item, index) => (
          <Link key={index} href="trip/trip_detail">
            <div
              key={index}
              className="w-full cursor-pointer group p-3 rounded-tr-[25%] hover:scale-95 duration-300  overflow-hidden  relative rounded-3xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] h-[60vh]"
            >
              <div className="absolute rounded-3xl top-0 left-0 w-full h-full bg-black opacity-[0.025]"></div>
              <div className="rounded-3xl relative rounded-tr-[30%] rounded-bl-[30%] w-full h-[70%] overflow-hidden">
                <Image
                  width={1000}
                  height={1000}
                  src={item.HeroImg}
                  alt=""
                  className="w-full h-full group-hover:scale-110 duration-300 group-hover:brightness-[0.8] brightness-[0.9] object-cover object-center "
                ></Image>
                <div className="absolute top-4  left-4">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-[12px] text-white font-medium">
                      240 days
                    </span>
                    <Icon
                      icon="lucide:calendar-days"
                      className="w-[1rem] h-[1rem] text-yellow-400"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full h-[30%] text-sm    py-3 justify-start flex-col gap-2   flex items-start">
                <div className="w-full justify-between  flex">
                  <h2 className="text-[16px] font-semibold text-secondary-400">
                    Package name
                  </h2>
                  <span className="text-[14px] tracking-wider font-semibold text-yellow-400">
                    $150
                  </span>
                </div>

                <p className="text-sm text-secondary-300">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Molestiae, excepturi?
                </p>
                {/* BUTTON  */}
                <Link
                  href="/trip/trip_detail"
                  className="w-full flex justify-end"
                >
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
                    <p className="translate-x-[18px] text-[10px]">View more</p>
                  </button>
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

const expeditions = [
  { id: 1, name: "Arctic Adventure", date: "Start from April 05/2025" },
  { id: 2, name: "Desert Trek", date: "Start from 2024" },
  { id: 3, name: "Mountain Climb", date: "Start from 2024" },
  { id: 3, name: "Mountain Climb", date: "Start from now" },
];
