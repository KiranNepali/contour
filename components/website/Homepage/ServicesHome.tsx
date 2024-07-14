import React from "react";
import Service1 from "@/public/services/Vehicles.png";
import Service2 from "@/public/services/pure-natural.png";
import Service3 from "@/public/services/people-safe.png";
import Service4 from "@/public/services/effects.png";
import Image from "next/image";
type Props = {};

export default function ServicesHome({}: Props) {
  return (
    <div className="w-full mb-[5rem]">
      <h1 className="text-3xl uppercase text-secondary-500 text-center  font-bold">
        Our Services and works
      </h1>

      <div className="grid grid-cols-2 mt-[3rem] px-1 gap-10">
        {ServicesData.map((item, index) => (
          <div
            key={index}
            className="w-full cursor-pointer p-10 rounded-3xl border"
          >
            <div className="w-full justify-between flex items-center">
              <div className="flex flex-col gap-2">
                <div className="w-[3rem] p-2 h-[3rem] bg-primary-default rounded-full">
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
];
