"use client";
import React, { useRef } from "react";
import Hero from "./Hero";
import HomeAbout from "./HomeAbout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Faq from "./Faq";
import ServicesHome from "./ServicesHome";
import OurExpert from "./OurExpert";
import UpcomingExpedition from "./UpcomingExpedition";
import Banner from "./Banner";
import UpcomingPeakClimbing from "./UpcomingPeakClimbing";
type Props = {};

gsap.registerPlugin(ScrollTrigger);
function HomeMain({}: any) {
  return (
    <>
      <div className=" w-full overflow-hidden">
        <div className="hero-container relative   h-screen  top-0 left-0 w-full">
          <Hero />
        </div>
        <div className="w-full relative  content-main    z-20">
          {/* <Try /> */}
          <div className="w-11/12 mx-auto">
            <HomeAbout />
          </div>
          <div className="w-11/12 mx-auto">
            <ServicesHome />
          </div>
          <div className="w-11/12 mx-auto">
            <UpcomingExpedition />
          </div>
          <div className="w-11/12 mx-auto">
            <UpcomingPeakClimbing />
          </div>
          <div className="w-11/12 mx-auto">
            <Faq />
          </div>
          <div className="w-full mx-auto">
            <Banner />
          </div>
          <OurExpert />
        </div>
      </div>
    </>
  );
}

export default HomeMain;
