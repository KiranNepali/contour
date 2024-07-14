import React from "react";
import Hero from "./Hero";
import AboutHome from "./AboutHome";
import ServiceHome from "./ServiceHome";
import UpcomingExpedition from "./UpcomingExpedition";
import UpcomingPeakClimbing from "./UpcomingPeakClimbing";
import FaqHome from "./FaqHome";
import ServicesHome from "./ServicesHome";
import OurExpert from "./OurExpert";

type Props = {};

export default function HomePageMain({}: Props) {
  return (
    <div className="">
      <div className="w-full h-full">
        <Hero />
      </div>
      <div className="w-11/12 mx-auto h-full">
        <AboutHome />
      </div>
      <div className="w-11/12 mx-auto h-full">
        {/* <ServiceHome /> */}
        <ServicesHome />
      </div>
      <div className="w-11/12 mx-auto h-full">
        <UpcomingExpedition />
      </div>
      <div className="w-11/12 mx-auto h-full">
        <UpcomingPeakClimbing />
      </div>
      <div className="w-11/12 mx-auto h-full">
        <OurExpert />
      </div>
      <div className="w-11/12 mx-auto h-full">
        <FaqHome />
      </div>
    </div>
  );
}
