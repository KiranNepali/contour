import React from "react";
import { Icon } from "@iconify/react";

type Props = {};

export default function Aboutus({}: Props) {
  return (
    <>
      <div className="w-7/12   pt-[3rem]  mx-auto relative">
        <div className="w-full justify-center items-start  flex flex-col  gap-3">
          <div className="">
            <span className="text-3xl font-bold uppercase">Overview</span>
          </div>
          <div className="w-full">
            <p className="text-zinc-700 leading-relaxed">
              Welcome to Contour Expeditions, where every step is a guided
              adventure with professionals. Our team of experienced guides is
              committed to providing you with unforgettable expeditions,
              ensuring safety, expertise, and a deep connection to nature
              throughout your journey. Join us as we explore the world’s most
              breathtaking landscapes, summit majestic peaks, and create
              memories that will last a lifetime. Get ready to embark on your
              next adventure with Contour Expeditions.
            </p>
          </div>
        </div>

        <div className="w-full justify-center items-start my-[3rem] flex flex-col  gap-3">
          <div className="">
            <span className="text-3xl font-bold uppercase text-nowrap">
              Our story
            </span>
          </div>
          <div className="w-full">
            <p className="text-zinc-700 leading-relaxed">
              Welcome to Contour Expeditions, where every step is a guided
              adventure with professionals. Our team of experienced guides is
              committed to providing you with unforgettable expeditions,
              ensuring safety, expertise, and a deep connection to nature
              throughout your journey. Join us as we explore the world’s most
              breathtaking landscapes, summit majestic peaks, and create
              memories that will last a lifetime. Get ready to embark on your
              next adventure with Contour Expeditions.
            </p>
          </div>
        </div>

        {/* bottom goals  */}
      </div>
      <div className="w-11/12 mx-auto  grid grid-cols-3 gap-5 my-[5rem]">
        {Vision.map((item) => (
          <div
            key={item.id}
            className="w-full cursor-pointer hover:border-yellow-600 duration-200 border border-yellow-50  rounded-3xl  flex flex-col p-10"
          >
            {/* NUM  */}
            <div className="w-full flex justify-between pb-3 items-center">
              <span className="text-2xl font-semibold">{item.id}.</span>
              <Icon
                icon={item.icon}
                className="w-[2rem] text-yellow-500 object-cover  object-center h-[2rem]"
              />
            </div>

            {/* title  */}
            <h2 className="font-semibold text-xl">{item.name}</h2>

            {/* desc  */}
            <p className="text-sm text-zinc-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

const Vision = [
  {
    id: 1,
    icon: "system-uicons:eye",
    name: "Passion for Adventure",
    desc: "We are driven by a love for the outdoors and a commitment to delivering unforgettable experiences.",
  },
  {
    id: 2,
    icon: "mingcute:safety-certificate-fill",
    name: "Safety First",
    desc: "We prioritize the safety and well-being of our clients through rigorous safety standards and expert guides.",
  },
  {
    id: 3,
    icon: "mdi:leaf",

    name: "Environmental Stewardship",
    desc: "We minimize our impact on the environment and support local conservation efforts.",
  },
  {
    id: 4,
    icon: "ion:telescope",
    name: "Quality and Excellence",
    desc: "We strive for excellence in all aspects of our operations to ensure a seamless and memorable adventure.",
  },
  {
    id: 5,
    icon: "fluent:people-team-28-filled",
    name: "Community Engagement",
    desc: "We engage with and support the communities we visit, contributing to local economies and development.",
  },
  {
    id: 6,
    icon: "fluent:arrow-growth-20-filled",
    name: "Personal Growth",
    desc: "We believe in the transformative power of adventure, fostering personal growth and self-discovery in our clients.",
  },
];
