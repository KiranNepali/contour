import Link from "next/link";
import React from "react";
import ContourLogo from "@/public/logo/contour/contour_expeditions_logo.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

type Props = {};

export default function Navbar({}: Props) {
  useGSAP(() => {
    
  });
  return (
    <div className="fixed top-0 left-0 z-50  w-full bg-yellow-50 flex justify-center items-center h-[4rem]">
      <div className="w-11/12 relative  h-full mx-auto flex justify-between items-center">
        <div className="flex gap-8 text-[14px] font-medium text-secondary-400">
          <Link href="/">Home</Link>
          <Link href="">Mounteering</Link>
          <Link href="">Trekking</Link>
        </div>
        {/* LOGO  */}
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] mx-auto -translate-y-[50%]">
          <Image
            src={ContourLogo}
            alt="altcountour-logo"
            className="w-[8rem]"
          ></Image>
        </div>

        <div className="flex gap-8 text-[14px] font-medium text-secondary-400">
          <Link href="blog">Blog</Link>
          <Link href="">Company</Link>
          <Link href="">Contact us</Link>
        </div>
      </div>
    </div>
  );
}
