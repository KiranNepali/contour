import Image from "next/image";
import React from "react";
import TeamImg from "@/public/team/team.webp";

type Props = {};

export default function OurTeam({}: Props) {
  return (
    <div className="w-full h-[80vh] mt-[4rem] overflow-hidden flex justify-start items-end relative">
      <Image
        src={TeamImg}
        alt="contour-team-image"
        className="absolute top-0 left-0 w-full h-full brightness-50 object-cover object-top"
      ></Image>
      <div className="relative z-20 mb-[8%] ml-[10%] w-[50%] text-white">
        <span className="font-semibold text-xl">Meet our team —</span> <br />{" "}
        <span className="italic">
          “Dedicated to crafting memorable and safe journeys, ensuring every
          moment of your trip is unforgettable.”
        </span>
      </div>
    </div>
  );
}
