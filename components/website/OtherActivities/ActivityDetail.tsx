import Image from "next/image";
import React from "react";
import OtherActivitiesData from "@/data/OtherActivitiesData";
import Link from "next/link";
type Props = {};

function AcitvityDetail({ activity }: any) {
  if (!activity) {
    // Handle case where activity data is not found
    return <div>Activity not found</div>;
  }
  const data: any = OtherActivitiesData.find((obj) => obj.route == activity);
  const { gallery, desc, name, route } = data;
  return (
    <div className="w-11/12 md:w-10/12 mx-auto py-[5rem] text-zinc-50 overflow-hidden">
      {/* tab  */}
      <div className="w-full py-1 overflow-x-scroll md:overflow-x-visible mb-9 flex justify-start  items-center gap-10">
        {/* exp tab  */}
        {OtherActivitiesData.map((item, index) => (
          <Link
            href={`/other_activities/${item.route}`}
            key={index}
            className={`${
              item.route === route ? "bg-yellow-400" : ""
            } px-10 py-2 rounded-3xl  whitespace-nowrap shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] hover:scale-105 duration-300 cursor-pointer`}
          >
            <h1
              className={`relative tracking-wide  font-medium    ${
                item.route === route ? "text-white" : "text-secondary-500"
              }`}
            >
              {item.name}
            </h1>
          </Link>
        ))}
      </div>
      {/* title  */}
      <div className="w-full flex flex-col gap-2">
        {/* TITLE  */}
        <h1 className="text-2xl relative tracking-wide title font-semibold italic text-secondary-500">
          {name}
        </h1>
        {/* DESC  */}
        <p className="text-lg  text-secondary-400">{desc}</p>
      </div>

      {/* gallery  */}
      <div className=" w-full py-10">
        <div className="w-full grid sm:grid-cols-2 md:grid-cols-4 auto-rows-[20rem] gap-5">
          {gallery.map((image: any, i: number) => (
            <div
              key={i}
              className={`works rounded-3xl  w-full  overflow-hidden group flex flex-col gap-[1rem] justify-start items-center relative cursor-pointer ${
                i === 0 || i === 4 || i === 5 || i === 6 ? "md:col-span-2" : ""
              } ${i === 2 ? "md:row-span-2" : ""}`}
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.3] group-hover:opacity-[0] duration-300"></div>
              {/* img  */}
              <div className="w-full h-full  overflow-hidden flex justify-center items-center">
                <Image
                  width={1000}
                  height={1000}
                  className="object-cover object-center hover:scale-[10rem] w-full h-full"
                  src={image}
                  alt="project"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link href="/booking" className="flex justify-end items-center w-full">
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
          <p className="translate-x-2 text-sm">Book now ?</p>
        </button>
      </Link>
    </div>
  );
}

export default AcitvityDetail;
