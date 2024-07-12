import Link from "next/link";
import React, { useRef, useState } from "react";
import ContourLogo from "@/public/logo/contour/contour_expeditions_logo.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = {};

export default function Navbar({}: Props) {
  // useGSAP(() => {
  // });

  const navContainerRef = useRef(null);
  const [openNav, setOpenNav] = useState(false);
  const handleHoverLink = () => {
    if (!openNav) {
      const tl = gsap.timeline();
      tl.to(
        navContainerRef.current,
        {
          y: "0",
          ease: "sine.out",
          duration: 0.4,
        },
        "open"
      );
      tl.to(
        ".content-nav",
        {
          delay: "0.2",
          opacity: "1",
          duration: "0.2",
          onComplete: () => setOpenNav(true),
        },
        "open"
      );
    }
  };
  const handleLeaveLink = () => {
    const tl = gsap.timeline();
    if (openNav) {
      tl.to(
        ".content-nav",
        {
          opacity: "0",
          duration: "0.2",
        },
        "close"
      );
      tl.to(
        navContainerRef.current,
        {
          delay: "0.2",
          y: "-100%",
          ease: "sine.out",
          duration: 0.4,
          onComplete: () => setOpenNav(false),
        },
        "close"
      );
    }
  };
  return (
    <>
      <div onMouseLeave={handleLeaveLink}>
        <div
          onMouseEnter={handleHoverLink}
          className="fixed top-0  left-0 z-50  w-full bg-yellow-50 flex flex-col justify-center items-center h-[4rem]"
        >
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
        <div
          ref={navContainerRef}
          className="w-full fixed py-3 top-[4rem] left-0 z-40   bg-yellow-50 "
        >
          <div className="w-11/12 relative h-full mx-auto flex justify-center items-center">
            <div className="w-full content-nav opacity-0 flex gap-4 h-full">
              <div className="w-[20%] h-full  flex justify-start items-end  flex-col gap-4 text-sm text-medium">
                {Mountaineering.map((item, index) => (
                  <span key={index} className="cursor-pointer">{item.name}</span>
                ))}
              </div>
              {/* package  */}
              <div className="flex w-[80%] flex-col border-l gap-5 justify-center pl-3 items-start">
                <div className=" grid grid-cols-4 w-full  border-zinc-700  gap-5">
                  <div className="w-full h-[25vh] bg-black rounded-3xl"></div>
                  <div className="w-full h-[25vh] bg-black rounded-3xl"></div>
                  <div className="w-full h-[25vh] bg-black rounded-3xl"></div>
                </div>
                <div className="">View all button</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Mountaineering = [
  {
    id: 1,
    name: "Above 8k",
    packages: ["1", "2", "3", "4"],
  },
  {
    id: 2,
    name: "Above 6k",
    packages: ["1", "2", "3", "4"],
  },
  {
    id: 3,
    name: "Below 6k",
    packages: ["1", "2", "3", "4"],
  },
];
