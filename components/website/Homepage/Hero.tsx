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
    <div className="w-11/12 mx-auto h-[95vh] mt-[9vh] rounded-3xl overflow-hidden relative text-white flex justify-center items-center">
      {/* image  */}

      <Image
        src={Banner}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover object-center brightness-50"
      ></Image>

      {/* middle  */}
      <div className="flex flex-col w-full gap-10">
        <div className="text-center z-10  relative  text-white   mx-auto flex justify-center items-center flex-col gap-2">
          <h1 className="text-6xl  uppercase 3xl:text-8xl  font-bold">
            Guided Adventure <br /> with <span className="">Professionals</span>
          </h1>
          <p className="text-sm text-white">
            A deeply personal experience at the heart of LeCrans
          </p>
        </div>
        {/* search  */}
        <div className="w-[30%] rounded-3xl flex justify-center  items-center  overflow-hidden border relative z-10 h-[5vh] mx-auto ">
          <input
            type="text"
            className="w-full h-full text-sm text-secondary-100 p-3 placeholder:text-secondary-100 placeholder:text-sm  outline-none bg-transparent"
            placeholder="Search"
          />
          <div className="w-[4rem] flex cursor-pointer rounded-r-3xl justify-center items-center h-full bg-primary-default">
            <Icon
              icon="quill:search"
              className="w-[1.5rem] h-[1.5rem]  object-cover text-secondary-500 pointer-events-none object-center "
            />
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-10 flex gap-10 right-[10%] z-10">
        <div className="flex  gap-3 justify-center items-center">
          <span className="flex gap-2 text-secondary-50 text-sm items-center">
            Associated with{" "}
            <span className="text-lg text-primary-default">|</span>{" "}
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
            Certified by <span className="text-lg text-primary-default">|</span>
          </span>
          <div className="flex gap-1 justify-center items-center">
            <Image
              src={CertifiedLogo1}
              alt="logo"
              className="rounded-full overflow-hidden h-[3rem] w-[3rem] object-cover object-center"
            ></Image>
          </div>
        </div>
      </div> */}
    </div>
  );
}
