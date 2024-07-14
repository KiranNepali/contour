import React from "react";
import AboutusHero from "./AboutusHero";
import Aboutus from "./Aboutus";

type Props = {};

export default function AboutUsMain({}: Props) {
  return (
    <div>
      <AboutusHero />
      <Aboutus />
    </div>
  );
}
