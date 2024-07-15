import Image from "next/image";
import React from "react";
import Guider from "@/public/team/Guide.jpg";
import MD from "@/public/team/MD.jpg";

type Props = {};

export default function OurExpert({}: Props) {
  return (
    <div className="w-full mb-[5rem]">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl uppercase w-full tracking-wider flex justify-center items-start text-secondary-500 text-center  font-bold">
          Our Experts
        </h1>
        <p className="text-center w-[50%] mx-auto text-zinc-700 leading-relaxed">
          Meet the folks behind the scenes, experts in making your adventure
          dreams come true with their skills and passion.
        </p>
      </div>
      <div className="flex justify-center item mt-[3rem] px-1 gap-10">
        <div className="w-[30rem] rounded-3xl shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]   flex">
          <Image
            src={MD}
            alt=""
            className="w-[50%] h-full object-cover object-center rounded-3xl"
          ></Image>

          <div className="flex flex-col gap-1 p-5">
            {/* role  */}
            <span className="italic font-medium">Managing Director (MD)</span>
            {/* name  */}
            <span className="font-semibold">Dinesh Bogati</span>

            {/* desc  */}
            <p className="text-sm  text-zinc-700 pt-2">
              Experience the world class tour package at the best rate. and
              safety offers you
            </p>
          </div>
        </div>

        <div className="w-[30rem] rounded-3xl  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px]   flex">
          <Image
            src={Guider}
            alt=""
            className="w-[50%] h-full object-cover object-center rounded-3xl"
          ></Image>

          <div className="flex flex-col gap-1 p-5">
            {/* role  */}
            <span className="italic font-medium">IFMGA / UIAGM Guide</span>
            {/* name  */}
            <span className="font-semibold">Prem Gurung</span>

            {/* desc  */}
            <p className="text-sm  text-zinc-700 pt-2">
              28 years experience in high mountain guiding including 8000m Peaks
              in Nepal Himalaya
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
