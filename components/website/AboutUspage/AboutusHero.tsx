import Image from "next/image";
import React from "react";
import TeamImg from "@/public/team/team.webp";

type Props = {};

export default function AboutusHero({}: Props) {
  return (
    <div className="w-full mt-[4rem] h-[80vh] overflow-hidden relative">
      <Image
        src={TeamImg}
        alt="contour-team-image"
        className="w-full h-full brightness-75 object-cover object-top"
      ></Image>
    </div>
  );
}
