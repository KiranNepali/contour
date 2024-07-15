import React from "react";
import AboutusHero from "./AboutUsHero";
import Aboutus from "./AboutUs";

type Props = {};

export default function AboutUsMain({}: Props) {
  return (
    <div className="">
      <AboutusHero />
      <Aboutus />
    </div>
  );
}
