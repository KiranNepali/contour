import Image from "next/image";
import React from "react";
import ContourMap from "@/public/Contour-Map.svg";
import { Icon } from "@iconify/react";
type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="w-full bg-yellow-50 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="h-full w-11/12 mx-auto rounded-t-3xl py-10  relative">
        <Image
          width={1000}
          height={1000}
          src={ContourMap}
          alt="expedition-image"
          className="w-full absolute top-0 left-0 opacity-[0.035]  rounded-3xl h-full mx-auto object-cover object-center"
        />
        {/* <div className="absolute top-0 left-0 w-full h-full bg-yellow-200 opacity-[0.2] rounded-3xl"></div> */}
        <div className="w-full grid grid-cols-4 relative place-items-start gap-4">
          {FooterLinksData.map((column, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-5 justify-center items-start"
            >
              {/* Navigation Title */}
              <h1 className="font-semibold text-xl">{column.title}</h1>
              {/* Links */}
              <div className="flex flex-col gap-4 text-sm">
                {column.links.map((link, linkIndex) => (
                  <span
                    key={linkIndex}
                    className="text-zinc-600 text-sm cursor-pointer hover:font-semibold hover:ml-2 duration-300 hover:text-yellow-500"
                  >
                    • {link}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="w-full flex flex-col gap-5 justify-center items-start">
            {/* newsletter  */}
            <div className="flex w-full flex-col gap-4">
              <h2 className="font-semibold">Get PDF before flying Nepal</h2>
              <p className="text-sm text-zinc-700">
                Experience the world class tour package at the best rate. ABC
                offers you the best tour package at the effective rate. Here you
                can find the variety of tour packages!!
              </p>

              {/* subricribe input  */}
              <div className="flex w-full shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]  rounded-3xl bg-yellow-50 overflow-hidden h-[3rem] items-center">
                <input type="text" placeholder="Your email" className="placeholder:text-sm outline-none px-3 py-2 w-[70%] bg-transparent text-sm h-full" />
                {/* BUTTON  */}
                <span className="text-nowrap text-center w-[30%] bg-yellow-400  duration-200 h-full flex justify-center items-center text-[12px] font-medium text-zinc-700 cursor-pointer">Subscribe</span>
              </div>
            </div>
            {/* Navigation Title */}
            <h1 className="font-semibold">Adress</h1>
            {/* Links */}
            <div className="flex flex-col gap-4 text-sm">
              <span className="text-zinc-600 cursor-pointer hover:ml-2 hover:font-semibold duration-300 hover:text-secondary-400">
                Uttardhoka, Lazimpath, Kathmandu,Nepal +977-9803267220
              </span>

              <div className="flex flex-col gap-2">
                <span className="font-semibold">Email:</span>
                <span className="text-zinc-600">
                  for inquiries: inquiry@contourexpedition.com for booking:
                  book@contourexpeditions.com
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="font-semibold">{`We're Social:`}</span>
                <div className="flex gap-2">
                  <Icon icon="logos:facebook" className="w-[2rem] h-[2rem]" />
                  <Icon icon="logos:facebook" className="w-[2rem] h-[2rem]" />
                  <Icon icon="logos:facebook" className="w-[2rem] h-[2rem]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom  */}
      <div className="w-full   py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <div className="justify-between w-11/12 mx-auto  items-center flex">
          <span className="text-[13px] text-zinc-600">
            © Copyright 2024, Contour Expeditions Pvt. Ltd. I All Rights
            Reserved
          </span>
          <span className="text-[13px] text-zinc-600">
            Designed and developed by{" "}
            <a
              href="https://webxnep.com/"
              target="_blank"
              className="font-medium text-black italic cursor-pointer"
            >
              Webx
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

const FooterLinksData = [
  {
    title: `Expedition in Nepal`,
    links: [
      `Ama Dablam Expedition 6812m | Preparation for 8000m Peak`,
      `Conquer the Majestic Himlung Himal Expedition : Embark on Your Ultimate Himalayan Adventure Today`,
      `Manaslu Expedition 8163m | Eight Highest Peak in The World`,
      `Mt. Manaslu Expedition 8,163m`,
    ],
  },
  {
    title: `Peak Climbing in Nepal`,
    links: [
      `Chulu West Peak Climbing 6,419m ASL`,
      `Island Peak Climbing 6165m Lobuche Peak Climbing 6119m and Everest Base camp (EBC)`,
      `Mera Peak Climbing 6476m ASL | The Easiest Mountain for the Beginners`,
      `Tent Peak Climbing 5663m (Tharpa Chuli) and Annapurna Base camp Trek`,
      `Two Peak Climbing | Everest Base Camp Trek | Lobuche Peak | Island Peak`,
      `Unnamed Peak Climbing 5800 m in Langtang Region Near Pungindhappu`,
    ],
  },
  {
    title: `Trekking in Nepal`,
    links: [
      `Astonishing Everest Base Camp (EBC) Trek in the midst of majestic Himalaya`,
      `Everest Base Camp ( EBC ) Trekking with Heli`,
      `Upper Mustang Trek | Famous for Local Tibetan Buddhism`,
      `Everest Panoramic View Trek`,
      `Ghorepani Trekking | Poon Hill & Ghandruk Trekking | Short Trekking Destination Annapurna Region`,
      `Amazing View Point Trek Gokyo Lake and Ri Trekking in Everest Region`,
      `Langtang Valley Trek | Langtang Region Less Crowded Alpine Trek`,
      `Manaslu Circuit | Manaslu Base Camp | Larke La Pass Trek 5160m`,
      `Three Passes Trek in Everest Region | Trekking that crosses Kongma La, Cho La, and Renjo La passes`,
    ],
  },
];
