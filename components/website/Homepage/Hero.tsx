"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import AssociatedLogo1 from "@/public/logo/associated1.png";
import AssociatedLogo2 from "@/public/logo/associated2.png";
import AssociatedLogo3 from "@/public/logo/associated3.png";
import CertifiedLogo1 from "@/public/logo/certified1.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from "@/public/banner.webp";
type Props = {};

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
export default function Hero({}: Props) {
  // animation
  const heroBgImgRef = useRef(null);
  useGSAP(() => {
    gsap.to(heroBgImgRef.current, {
      scale: "1.2",
      duration: 2,
      scrollTrigger: {
        // markers: true,
        start: "30% top",
        end: "bottom top",
        trigger: heroBgImgRef.current,
        scrub: 1,
      },
    });
  });
  return (
    <div className="w-11/12 mx-auto h-[95vh] mt-[4.2rem] rounded-3xl overflow-hidden relative text-white flex justify-center items-center">
      <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-black to-transparent z-10"></div>
      {/* image  */}
      <div>
        <Image
          src={Banner}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover object-center brightness-50"
        ></Image>
      </div>
      {/* middle  */}
      <div className="flex flex-col w-full gap-10">
        <div className="text-center z-10  relative  text-white   mx-auto flex justify-center items-center flex-col gap-2">
          <h1 className="text-6xl  uppercase 3xl:text-7xl   font-extrabold">
            Guided Adventure <br /> with <span className="bg-white text-transparent bg-clip-text">Professionals</span>
          </h1>
          <p className="text-sm text-white">
            A deeply personal experience at the heart of LeCrans
          </p>
        </div>
        {/* search  */}
        <div className="w-[30%] rounded-3xl flex justify-center   items-center  overflow-hidden shadow-[rgba(17,_17,_26,_0.6)_0px_0px_16px]   relative z-10 h-[5vh] mx-auto ">
          <input
            type="text"
            className="w-full h-full text-sm text-zinc-300 p-3  placeholder:text-secondary-100 placeholder:text-sm  outline-none bg-transparent"
            placeholder="Search"
          />
          <div className="w-[4rem] flex cursor-pointer rounded-r-3xl bg-yellow-400 justify-center items-center h-full 0">
            <Icon
              icon="quill:search"
              className="w-[1.5rem] h-[1.5rem]  object-cover text-zinc-800 pointer-events-none object-center "
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 flex justify-center gap-10 left-[50%] translate-x-[-50%] z-10">
        <div className="flex  gap-3 justify-center items-center">
          <span className="flex gap-2 text-secondary-50 text-sm items-center">
            Associated with{" "}
            <span className="text-lg text-yellow-400">|</span>{" "}
          </span>
          <div className="flex gap-1 justify-center items-center">
            <Image
              src={AssociatedLogo1}
              alt="logo"
              className="rounded-full overflow-hidden h-[3rem] w-[3rem] object-cover object-center"
            ></Image>
            <Image
              src={AssociatedLogo2}
              alt="logo"
              className="rounded-full overflow-hidden h-[3rem] w-[3rem] object-cover object-center"
            ></Image>
            <Image
              src={AssociatedLogo3}
              alt="logo"
              className="rounded-full overflow-hidden h-[3rem] w-[3rem] object-cover object-center"
            ></Image>
          </div>
        </div>

        <div className="flex  gap-3 justify-center items-center">
          <span className="flex gap-2 text-secondary-50 text-sm items-center">
            Certified by <span className="text-lg text-yellow-400">|</span>
          </span>
          <div className="flex gap-1 justify-center items-center">
            <Image
              src={CertifiedLogo1}
              alt="logo"
              className="rounded-full overflow-hidden h-[3rem] w-[3rem] object-cover object-center"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
