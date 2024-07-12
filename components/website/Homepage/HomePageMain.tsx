import React from "react";
import Hero from "./Hero";
import AboutHome from "./AboutHome";
import ServiceHome from "./ServiceHome";
import UpcomingExpedition from "./UpcomingExpedition";
import UpcomingPeakClimbing from "./UpcomingPeakClimbing";
import FaqHome from "./FaqHome";

type Props = {};

export default function HomePageMain({}: Props) {
  return (
    <div className="">
      <div className="w-full h-full">
        <Hero />
      </div>
      <div className="w-10/12 mx-auto h-full">
        <AboutHome />
      </div>
      <div className="w-full mx-auto h-full">
        <ServiceHome />
      </div>
      <div className="w-10/12 mx-auto h-full">
        <UpcomingExpedition />
      </div>
      <div className="w-10/12 mx-auto h-full">
        <UpcomingPeakClimbing />
      </div>
      <div className="w-10/12 mx-auto h-full">
        <FaqHome />
      </div>
    </div>
  );
}
