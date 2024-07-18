import React from "react";
import LogoIcon from "@/public/contour_expeditions_logo.webp";
import Image from "next/image";

type Props = {};

export default function Loading({}: Props) {
  return (
    <div className="w-full h-screen bg-yellow-50 relative z-[20] flex  justify-center items-center">
      <div className="">
        <Image
          src={LogoIcon}
          alt="trek-nepal-logo-icon"
          className="logo-icon w-[8rem] object-cover object-center"
        ></Image>
      </div>
    </div>
  );
}
