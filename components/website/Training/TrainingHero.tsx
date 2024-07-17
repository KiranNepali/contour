import Image from "next/image";
import React from "react";
import TeamImg from "@/public/course.webp";

type Props = {};

export default function TrainingHero({}: Props) {
  return (
    <div className="w-full mt-[4rem] h-[83vh] overflow-hidden relative">
      <Image
        width={1000}
        height={1000}
        src="https://images.unsplash.com/photo-1519014961376-9e3f31b1a812?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="contour-team-image"
        className="w-full h-full brightness-75 object-cover object-center"
      ></Image>
    </div>
  );
}
