import Image from "next/image";
import React from "react";
import TeamImg from "@/public/team/team.webp";

type Props = {};

export default function AboutusHero({}: Props) {
  return (
    <div className="w-full mt-[4rem] h-[83vh] overflow-hidden relative">
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-black to-transparent z-10"></div>
      <Image
        src={TeamImg}
        alt="contour-team-image"
        className="w-full h-full brightness-75 object-cover object-top"
      ></Image>

      <div className=" absolute bottom-10 left-[5%] z-10 flex items-start  justify-start flex-col gap-2">
        <h1 className="text-6xl uppercase relative tracking-wide text-zinc-50  title font-bold ">
          About us
        </h1>
        <p className="w-[80%] text-sm text-secondary-50  text-start">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro rerum
          magni eius deleniti debitis earum!
        </p>
      </div>
    </div>
  );
}
