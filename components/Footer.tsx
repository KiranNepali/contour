import Image from "next/image";
import React from "react";
import ContourMap from "@/public/Contour-Map.svg";
import { Icon } from "@iconify/react";
type Props = {};

export default function Footer({}: Props) {
  return (
    <div className=" mb-[1rem] w-full">
      <div className="h-full w-11/12 mx-auto rounded-3xl p-10 bg-gray-100 relative">
        <Image
          width={1000}
          height={1000}
          src={ContourMap}
          alt="expedition-image"
          className="w-full absolute top-0 left-0 opacity-[0.03]  rounded-3xl h-full mx-auto object-cover object-center"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-200 opacity-[0.2] rounded-3xl"></div>
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
                    className="text-secondary-300 cursor-pointer hover:font-semibold hover:ml-2 duration-300 hover:text-secondary-400"
                  >
                    • `{link}`
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="w-full flex flex-col gap-5 justify-center items-start">
            {/* Navigation Title */}
            <h1 className="font-semibold text-xl">Adress</h1>

            {/* Links */}
            <div className="flex flex-col gap-4 text-sm">
              <span className="text-secondary-300 cursor-pointer hover:ml-2 hover:font-semibold duration-300 hover:text-secondary-400">
                Uttardhoka, Lazimpath, Kathmandu,Nepal +977-9803267220
              </span>

              <div className="flex flex-col gap-2">
                <span className="font-semibold">Email:</span>
                <span className="text-secondary-100">
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
    </div>
  );
}

const FooterLinksData = [
  {
    title: "Expedition in Nepal",
    links: [
      "Ama Dablam Expedition 6812m | Preparation for 8000m Peak",
      "Conquer the Majestic Himlung Himal Expedition : Embark on Your Ultimate Himalayan Adventure Today",
      "Manaslu Expedition 8163m | Eight Highest Peak in The World",
      "Mt. Manaslu Expedition 8,163m",
    ],
  },
  {
    title: "Peak Climbing in Nepal",
    links: [
      "Chulu West Peak Climbing 6,419m ASL",
      "Island Peak Climbing 6165m Lobuche Peak Climbing 6119m and Everest Base camp (EBC)",
      "Mera Peak Climbing 6476m ASL | The Easiest Mountain for the Beginners",
      "Tent Peak Climbing 5663m (Tharpa Chuli) and Annapurna Base camp Trek",
      "Two Peak Climbing | Everest Base Camp Trek | Lobuche Peak | Island Peak",
      "Unnamed Peak Climbing 5800 m in Langtang Region Near Pungindhappu",
    ],
  },
  {
    title: "Trekking in Nepal",
    links: [
      "Astonishing Everest Base Camp (EBC) Trek in the midst of majestic Himalaya",
      "Everest Base Camp ( EBC ) Trekking with Heli",
      "Upper Mustang Trek | Famous for Local Tibetan Buddhism",
      "Everest Panoramic View Trek",
      "Ghorepani Trekking | Poon Hill & Ghandruk Trekking | Short Trekking Destination Annapurna Region",
      "Amazing View Point Trek Gokyo Lake and Ri Trekking in Everest Region",
      "Langtang Valley Trek | Langtang Region Less Crowded Alpine Trek",
      "Manaslu Circuit | Manaslu Base Camp | Larke La Pass Trek 5160m",
      "Three Passes Trek in Everest Region | Trekking that crosses Kongma La, Cho La, and Renjo La passes",
    ],
  },
];
