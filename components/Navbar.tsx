"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import ContourLogo from "@/public/logo/contour/contour_expeditions_logo.png";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Package from "@/public/banner.webp";
type Props = {};

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

const Trekking = [
  {
    id: 1,
    name: "Everest Trek",
    packages: ["1", "2", "3", "4"],
  },
  {
    id: 2,
    name: "Manaslu Trek",
    packages: ["1", "2", "3", "4"],
  },
  {
    id: 3,
    name: "Tilicho Trek",
    packages: ["1", "2", "3", "4"],
  },
];

export default function Navbar({}: Props) {
  const navContainerRef = useRef<HTMLDivElement>(null);
  const [openNav, setOpenNav] = useState(false);
  const [openCompNav, setOpenCompNav] = useState(false);
  const [currentData, setCurrentData] = useState<any[]>([]);

  const handleOpenLink = (item: string) => {
    if (item === "Mountaineering") {
      setCurrentData(Mountaineering);
    } else if (item === "Trekking") {
      setCurrentData(Trekking);
    }
    setOpenNav(!openNav);
  };

  const handleOpenCompLink = () => {
    setOpenNav(!openNav);
  };
  const Links = ["Home", "Mountaineering", "Trekking"];

  return (
    <div>
      <div className="fixed top-0 left-0 z-50 w-full bg-yellow-50 flex flex-col justify-center items-center h-[4rem]">
        <div className="w-11/12 relative h-full mx-auto flex justify-between items-center">
          <div className="flex gap-8 text-[14px] font-medium text-secondary-400">
            {Links.map((item) => (
              <Link
                key={item}
                href="/"
                onClick={() => handleOpenLink(item)}
                className=""
              >
                {item}
              </Link>
            ))}
          </div>
          {/* LOGO */}
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] mx-auto -translate-y-[50%]">
            <Image
              src={ContourLogo}
              alt="altcontour-logo"
              className="w-[8rem]"
            />
          </div>
          <div className="flex gap-8 text-[14px] font-medium text-secondary-400">
            <Link href="/blog">Blog</Link>
            <div className="relative group cursor-pointer">
              <div onClick={() => handleOpenCompLink()}>Company</div>
            </div>
            <Link href="/contact_us">Contact us</Link>
          </div>
        </div>
      </div>

      {/* render down */}
      <AnimatePresence>
        {openNav && (
          <motion.div
            initial={{ translateY: "-100%" }}
            animate={{ translateY: "0" }}
            exit={{ translateY: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            ref={navContainerRef}
            className="w-full fixed py-3 top-[4rem] left-0 z-40 bg-yellow-50"
          >
            <div className="w-11/12 relative h-full mx-auto flex justify-center items-center">
              <div className="w-full content-nav flex gap-4 h-full">
                <div className="w-[20%] h-full flex justify-start items-end flex-col gap-4 text-sm text-medium">
                  {currentData.map((item) => (
                    <span key={item.id} className="cursor-pointer">
                      {item.name}
                    </span>
                  ))}
                </div>
                {/* package */}
                <div className="flex w-[80%] flex-col border-l gap-5 justify-center pl-3 items-start">
                  <div className="grid grid-cols-4 w-full border-zinc-700 gap-5 overflow-hidden">
                    <div className="w-full h-[25vh] cursor-pointer rounded-3xl">
                      <Image
                        src={Package}
                        alt=""
                        className="object-cover object-center w-full h-full rounded-3xl brightness-75 "
                      ></Image>
                    </div>
                    <div className="w-full h-[25vh] cursor-pointer rounded-3xl">
                      <Image
                        src={Package}
                        alt=""
                        className="object-cover object-center w-full h-full rounded-3xl brightness-75 "
                      ></Image>
                    </div>
                    <div className="w-full h-[25vh] cursor-pointer rounded-3xl">
                      <Image
                        src={Package}
                        alt=""
                        className="object-cover object-center w-full h-full rounded-3xl brightness-75 "
                      ></Image>
                    </div>
                  </div>
                  <div className="">View all button</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {openCompNav && (
          <motion.div
            initial={{ translateY: "-100%" }}
            animate={{ translateY: "0" }}
            exit={{ translateY: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            ref={navContainerRef}
            className="w-full fixed py-3 top-[4rem] left-0 z-40 bg-yellow-50"
          >
            <div className="w-11/12 relative h-full mx-auto flex justify-center items-center">
            
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
