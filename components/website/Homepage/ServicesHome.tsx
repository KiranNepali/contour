import React from "react";
import Service1 from "@/public/services/Vehicles.png";
import Service2 from "@/public/services/pure-natural.png";
import Service3 from "@/public/services/people-safe.png";
import Service4 from "@/public/services/effects.png";
import Service5 from "@/public/services/right-user.png";
import Service6 from "@/public/services/effects (1).png";

import Image from "next/image";
import ContourMountain from "@/public/contour-mountain.jpg";
type Props = {};

export default function ServicesHome({}: Props) {
  return (
    <div className="w-full mb-[5rem] relative">
      {/* title  */}
      <div className="w-auto flex-col flex gap-2 justify-center items-center">
        <h1 className="text-3xl uppercase text-secondary-500 text-center  font-bold">
          Why choose us ?
        </h1>
        <hr className="bg-yellow-500 h-[2px] overflow-hidden w-[10%] rounded-full" />
      </div>

      <div className="absolute top-0 z-20 opacity-[0.03] left-0 w-full h-full">
        <Image
          src={ContourMountain}
          alt="countout-mountain"
          className="w-full h-full"
        ></Image>
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-3 mt-[3rem] px-1 gap-10 relative">
        {ServicesData.map((item, index) => (
          <div
            key={index}
            className="w-full cursor-pointer overflow-hidden p-10 relative  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-3xl "
          >
            <div className="absolute rounded-3xl top-0 left-0 w-full h-full bg-black opacity-[0.025]"></div>
            <div className="w-full justify-between flex items-center">
              <div className="flex flex-col gap-2">
                <div className="w-[3rem] p-2 h-[3rem] bg-yellow-400 rounded-full">
                  <Image
                    src={item.icon}
                    alt={`${item.name}-logo`}
                    className="w-full h-full object-cover object-center"
                  ></Image>
                </div>
                <h2 className="font-semibold text-zinc-700">{item.name}</h2>
              </div>
              <p className="w-[60%] text-end text-zinc-700 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const ServicesData = [
  {
    id: 1,
    icon: Service1,
    name: "Hassel-Free Travel",
    desc: "Experience the thrill of mountain trekking with our expert guides and customized routes.",
  },
  {
    id: 2,
    icon: Service2,
    name: "Eco-Friendly Service",
    desc: "Enjoy an unforgettable camping experience under the stars with all amenities provided.",
  },
  {
    id: 3,
    icon: Service3,
    name: "Local Himalayan Experts",
    desc: "Join our guided tours to explore the most breathtaking locations with local experts.",
  },
  {
    id: 4,
    icon: Service4,
    name: "100% Personalized Trips",
    desc: "Witness the beauty of wildlife in their natural habitat with our thrilling safari adventures.",
  },
  {
    id: 5,
    icon: Service5,
    name: "100% Personalized Trips",
    desc: "Witness the beauty of wildlife in their natural habitat with our thrilling safari adventures.",
  },
  {
    id: 6,
    icon: Service4,
    name: "100% Personalized Trips",
    desc: "Witness the beauty of wildlife in their natural habitat with our thrilling safari adventures.",
  },
];
