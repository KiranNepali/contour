import Image from "next/image";
import React from "react";
import ContourMap from "@/public/Contour-Map.svg";
import { Icon } from "@iconify/react";
// SOCIAL imAge
import Logo from "@/public/contour_expeditions_logo.webp";
import Instagram from "@/public/Social/instagram.png";
import Facebook from "@/public/Social/facebook.png";
import Twitter from "@/public/Social/twitter.png";
import Linkedin from "@/public/Social/linkedin.png";
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
          className="w-full absolute top-0 left-0 opacity-[0.025]  rounded-3xl h-full mx-auto object-cover object-center"
        />
        {/* <div className="absolute top-0 left-0 w-full h-full bg-yellow-200 opacity-[0.2] rounded-3xl"></div> */}
        <div className="w-full grid grid-cols-7 relative place-items-start gap-5">
          <div className="flex flex-col gap-5 col-span-2">
            <Image alt="contour-logo" src={Logo} className="w-[8rem]"></Image>
            {/* desc  */}
            <p className="text-sm text-zinc-700">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit,
              ducimus?
            </p>

            {/* social icon  */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <span className="font-medium">Address</span>
                <p className="text-zinc-700 text-sm">
                  Uttardhoka, Lazimpath; Kathmandu, Nepal <br /> +977-9803267220
                </p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="font-medium">Email</span>
                <p className="text-zinc-700 text-sm">
                  <span className="font-medium">For inquiries:</span>{" "}
                  inquiry@contourexpedition.com <br />{" "}
                  <span className="font-medium">For booking: </span>
                  book@contourexpeditions.com
                </p>
              </div>

              <div className="flex gap-2">
                <div className="w-[1.5rem] h-[1.5rem]  hover:scale-105 cursor-pointer duration-200">
                  <Image
                    src={Twitter}
                    alt="social-icon"
                    className="w-full h-full object-cover object-center"
                  ></Image>
                </div>
                <div className="w-[1.5rem] h-[1.5rem]  hover:scale-105 cursor-pointer duration-200">
                  <Image
                    src={Linkedin}
                    alt="social-icon"
                    className="w-full h-full object-cover object-center"
                  ></Image>
                </div>
                <div className="w-[1.5rem] h-[1.5rem]  hover:scale-105 cursor-pointer duration-200">
                  <Image
                    src={Facebook}
                    alt="social-icon"
                    className="w-full h-full object-cover object-center"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
          {FooterLinksData.map((column, index) => (
            <div
              key={index}
              className="w-full flex flex-col gap-5 justify-center items-start"
            >
              {/* Navigation Title */}
              <h1 className="font-semibold text-lg">{column.title}</h1>
              {/* Links */}
              <div className="flex flex-col  gap-2 text-sm">
                {column.links.map((link, linkIndex) => (
                  <span
                    key={linkIndex}
                    className="text-zinc-700 flex gap-1 text-sm cursor-pointer hover:font-semibold hover:ml-2 duration-300 hover:text-yellow-500"
                  >
                    {column.title === "Mounteering" ? (
                      <Icon
                        icon="la:mountain"
                        className="min-h-[1rem] min-w-[1rem]"
                      />
                    ) : column.title === "Trekking" ? (
                      <Icon
                        icon="tabler:trekking"
                        className="min-w-[1rem] min-h-[1rem]"
                      />
                    ) : column.title === "Other Activities" ? (
                      <Icon
                        icon="guidance:climbing-wall"
                        className="min-w-[1rem] min-h-[1rem]"
                      />
                    ) : column.title === "Training" ? (
                      <Icon
                        icon="oui:training"
                        className="min-w-[1rem] min-h-[1rem]"
                      />
                    ) : (
                      ""
                    )}
                    <span className="font-medium">{link}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* bottom  */}
      <div className="w-full   py-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <div className="justify-between w-11/12 mx-auto  items-center flex">
          <span className="text-[13px] text-zinc-700">
            © Copyright 2024, Contour Expeditions Pvt. Ltd. I All Rights
            Reserved
          </span>
          <span className="text-[13px] text-zinc-700">
            Designed and developed by{" "}
            <a
              href="https://webxnep.com/"
              target="_blank"
              className="font-medium underline hover:scale-105 duration-200 text-black italic cursor-pointer"
            >
              WebX
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

const FooterLinksData = [
  {
    title: `Mounteering`,
    links: [`8000m +`, `7000m +`, `6501m +`, `6000m + `, `6000m +`, `5500m +`],
  },
  {
    title: `Trekking`,
    links: [
      `Annapurna`,
      `Everest`,
      `Langtang`,
      `Manaslu`,
      `Other treks`,
      `Off beaten treks (Camping)`,
      `Short trek`,
      `High passes treks `,
    ],
  },
  {
    title: `Training`,
    links: [
      `Basic Mountaineering course`,
      `Preparation for 8000m peak climbing course`,
    ],
  },
  {
    title: `Other Activities`,
    links: [
      `Canyoning`,
      `Rafting`,
      `Heritage Tour`,
      `Jungle Safari`,
      `Paragliding`,
      `Mountain biking`,
      `Pilgrimage tour`,
      `Rock climbing trip`,
      `Ice climbing`,
    ],
  },

  {
    title: `Useful links`,
    links: [`About us`, `Contact us`, `Home`],
  },
];
