"use client";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import Lhotse from "@/public/Lhotse-peak.jpg";
import Similar from "./Similar";
type Props = {};

function TripDetailMain({}: Props) {
  const [openToggleDesc, setOpenToggleDesc] = useState(false);

  const toggleOpen = (index: number) => {
    if (!openToggleDesc) {
      gsap.to(`.toggle2-${index}`, {
        rotate: "180deg",
        top: "50%",
        duration: 0.5,
        transformOrigin: "center",
      });
      gsap.to(`.open-desc-${index}`, {
        opacity: 1,
        height: "5rem",
        duration: 0.5,
        ease: "power3.inOut",
      });
      setOpenToggleDesc(true);
    } else {
      gsap.to(`.toggle2-${index}`, {
        rotate: "90deg",
        top: "50%",
        duration: 0.5,
        transformOrigin: "center",
      });
      gsap.to(`.open-desc-${index}`, {
        opacity: 0,
        height: "0",
        duration: 0.5,
        ease: "power3.inOut",
      });
      setOpenToggleDesc(false);
    }
  };

  return (
    <>
      <div className="w-full h-full  text-secondary-500 relative">
        <div className="w-full h-[83vh] mt-[4rem] relative items-end  flex justify-center">
          <Image
            width={1000}
            height={1000}
            src={Lhotse}
            alt="expedition-image"
            className="absolute top-0 brightness-50 left-0 w-full h-full object-cover object-top"
          />
          <div className="flex flex-col gap-3 ml-[5%] mb-[5%] relative text-white">
            <h1 className="text-3xl md:text-6xl relative  mt-10 title font-bold">
              Lhotse Expedition 8516m.
            </h1>
            <p className="w-[70%] text-zinc-100">{`Mount Lhotse is one of the world's tallest mountains, with its summit reaching 8,516 meters (27,940 feet) above sea level. Its high altitude presents significant challenges to climbers due to decreased oxygen levels and extreme weather conditions.`}</p>
          </div>
        </div>
        {/* desc overview main  */}
        <div className="bg-yellow-100/20  rounded-2xl w-full mx-auto relative ">
          <div className="py-10 w-11/12 mx-auto grid grid-cols-3 gap-y-3 place-content-center place-items-center gap-x-20">
            {PackageDetail.map((item, index) => (
              <div
                key={index}
                className="flex w-full gap-3 mx-auto items-center justify-start"
              >
                <div className="flex gap-2 items-center">
                  <div className="w-[3.5rem] p-4 h-[3.5rem] bg-yellow-400 rounded-xl">
                    <Icon
                      className="w-full h-full object-cover object-center"
                      icon={item.icon}
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="font-medium text-zinc-800">
                    {item.title}
                  </span>
                  <span className="text-zinc-700 text-left text-sm leading-relaxed">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="py-[5rem] w-11/12 flex flex-col md:flex-row justify-center relative items-start gap-3 mx-auto">
          {/* tab  link  */}
          <div className="mx-auto  w-full md:w-[15%] flex-col gap-8  backdrop-blur-sm   sticky top-[4rem] overflow-x-scroll md:overflow-x-visible md:top-[6rem] left-0  flex  font-medium items-center">
            <div className="w-full  overflow-hidden flex md:flex-col justify-center  font-medium items-start ">
              {buttonLabels.map((item) => (
                <div className="flex items-center border-b group hover:text-yellow-500  duration-200  w-full  justify-between  ">
                  <div className="flex items-center">
                    <Icon icon={item.icon} className="w-[1.5rem]  h-[1.5rem]" />
                    <a
                      href={`#${item.label.replace(/\s+/g, "-").toLowerCase()}`}
                      key={item.id}
                      className={`cursor-pointer text-sm text-nowrap  w-full  py-3 group-hover:scale-105   duration-200  flex justify-start px-3 items-center  `}
                    >
                      {item.label}
                    </a>
                  </div>

                  <span>{`>`}</span>
                </div>
              ))}
            </div>
          </div>
          {/* detail  */}

          <div className="w-full md:w-[70%] flex flex-col gap-2">
            {/* overvieew  */}
            <div
              id="overview"
              className="w-full mx-auto py-[4.5rem] px-[2rem] bg-yellow-100/10  rounded-2xl   shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] "
            >
              <div className="text-2xl overview relative tracking-wide title font-semibold italic text-secondary-500">
                Overview
              </div>
              <div className="w-full leading-relaxed  text-zinc-700">
                {`Mount Lhotse is one of the world's tallest mountains, with its
                summit reaching 8,516 meters (27,940 feet) above sea level.`}
              </div>
              <button className="font-medium mt-3 italic underline">
                Read more
              </button>
            </div>
            {/* iternary  */}
            <div
              id="itinerary"
              className="w-full mx-auto py-[4.5rem] px-[2rem] bg-yellow-100/10   rounded-3xl   shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] "
            >
              {/* tile  */}
              <div className="text-2xl itinerary it relative tracking-wide title font-semibold italic text-secondary-500">
                Itinerary
              </div>
              <div className="w-full h-full mt-6 flex flex-col gap-2">
                {ItineraryData.map((item, index) => (
                  <div
                    onClick={() => toggleOpen(index)}
                    key={index}
                    className="w-full cursor-pointer  rounded-3xl  shadow-[rgba(17,_17,_26,_0.1)_0px_0px_5px]  py-4 md:py-2  overflow-hidden    items-center flex flex-col justify-between px-5"
                  >
                    <div className="w-full h-[4rem] flex  justify-between items-center">
                      <div className="flex gap-10 items-center">
                        {/* day */}
                        <div className="font-semibold justify-center items-center w-[3rem] leading-none h-[3rem] rounded-xl overflow-hidden  text-white bg-yellow-400     text-[12px] flex flex-col gap-1">
                          <span>Day</span>
                          <span>{item.day}</span>
                        </div>
                        {/* title */}
                        <span className=" font-medium text-zinc-800">
                          {item.title}
                        </span>
                      </div>
                      {/* open */}
                      <div className="relative w-[3rem] h-[3rem]  overflow-hidden cursor-pointer">
                        <span className="absolute toggle1 bg-yellow-500 h-[2px] top-[50%] w-[15px] left-[50%] -translate-x-[50%] inline-block"></span>
                        <span
                          className={`absolute toggle2-${index} bg-yellow-500 h-[2px] top-[50%] rotate-90 w-[15px] left-[50%] -translate-x-[50%] inline-block`}
                        ></span>
                      </div>
                    </div>

                    {/* desc  */}
                    <div
                      className={`open-desc-${index} w-full   h-0  flex justify-start text-zinc-700 items-center  opacity-0`}
                    >
                      <p className="leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* MAJOR TRIP INFODRMATION  */}
            <div
              id="trip-attraction"
              className="w-full h-[70vh] mx-auto py-[4.5rem] px-[2rem] bg-yellow-100/10  rounded-2xl   shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] "
            >
              <div className="text-2xl route-map relative tracking-wide title font-semibold italic text-secondary-500">
                Major Trip Attraction
              </div>
              <div className="flex flex-col gap-2 mt-1">
                {TripAttraction.map((item, index) => (
                  <p key={index} className=" text-zinc-700 leading-relaxed">
                    {item.title}
                  </p>
                ))}
              </div>
            </div>
            {/* essectial indormatrion  */}
            <div
              id="essential-information"
              className="w-full mx-auto py-[4.5rem] px-[2rem] bg-yellow-100/10  rounded-2xl   shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] "
            >
              {/* tile  */}
              <div className="text-2xl itinerary it relative tracking-wide title font-semibold italic text-secondary-500">
                Essential Information
              </div>
              <div className="w-full h-full flex flex-col gap-2">
                {EssentialInformation.map((item) => (
                  <div key={item.id} className="flex mt-2 flex-col">
                    <h2 className="text-lg font-medium text-zinc-800">
                      {item.title} :
                    </h2>
                    <p className="leading-relaxed  text-[16px] text-zinc-700">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* gear listS  */}
            <div
              id="gear-list"
              className="w-full mx-auto py-[4.5rem] px-[2rem] bg-yellow-100/10  rounded-2xl   shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] "
            >
              {/* tile  */}
              <div className="text-2xl itinerary it relative tracking-wide title font-semibold italic text-secondary-500">
                Gear list
              </div>
              <div className="w-[60%]   mt-5     flex flex-col gap-2">
                <div className="flex  items-center  justify-between">
                  <p className="font-semibold text-zinc-700">
                    Gear Guide Book for Lhotse Expedition
                  </p>
                </div>

                <div className="flex gap-2 items-center">
                  <div className="w-[10rem] relative cursor-pointer hover:scale-95 duration-200 p-4 h-[3.5rem] bg-yellow-400 rounded-full">
                    <Icon
                      className="w-full h-full object-cover object-center"
                      icon="mdi:eye"
                    />
                  </div>

                  <div className="w-[10rem] cursor-pointer hover:scale-95 duration-200 p-4 h-[3.5rem] bg-yellow-400 rounded-full">
                    <Icon
                      className="w-full h-full object-cover object-center"
                      icon="material-symbols:download"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* gallery  */}
            <div
              id="gallery"
              className="w-full mx-auto py-[4.5rem] px-[2rem] bg-yellow-100/10  rounded-2xl   shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] "
            >
              {/* tile  */}
              <div className="text-2xl itinerary it relative tracking-wide title font-semibold italic text-secondary-500">
                Gallery
              </div>
              <div className="w-full   mt-5  grid grid-cols-3 rounded-3xl  gap-2">
                <Image
                  src={Lhotse}
                  alt="gallery"
                  className="w-full h-[40vh] rounded-2xl object-cover object-center brightness-90 cursor-pointer hover:brightness-100 duration-200 "
                ></Image>
                <Image
                  src={Lhotse}
                  alt="gallery"
                  className="w-full h-[40vh] col-span-2  object-cover object-center brightness-90 cursor-pointer hover:brightness-100 duration-200 rounded-2xl"
                ></Image>
                <Image
                  src={Lhotse}
                  alt="gallery"
                  className="w-full h-[40vh] rounded-2xl object-cover object-center brightness-90 cursor-pointer hover:brightness-100 duration-200 "
                ></Image>
                <Image
                  src={Lhotse}
                  alt="gallery"
                  className="w-full h-[40vh] rounded-2xl object-cover object-center brightness-90 cursor-pointer hover:brightness-100 duration-200 "
                ></Image>
                <Image
                  src={Lhotse}
                  alt="gallery"
                  className="w-full h-[40vh] rounded-2xl object-cover object-center brightness-90 cursor-pointer hover:brightness-100 duration-200 "
                ></Image>
              </div>
            </div>
          </div>

          {/* tab  link  */}
          <div className="mx-auto  w-full md:w-[20%] flex-col gap-8 pb-2 overflow-hidden  sticky top-[4rem] overflow-x-scroll md:overflow-x-visible bg-yellow-500 rounded-2xl md:top-[6rem] left-0  flex   items-center">
            <div className="flex w-full  flex-col gap-4 py-5 0 px-3  rounded-b-3xl  bg-yellow-400 border-b">
              {/* <div className="w-full rounded-3xl p-2  border"> */}
              <span className="font-semibold text-lg">USD</span>
              {/* </div> */}
              <span className="flex gap-4 items-start justify-start font-medium">
                <div className="flex flex-col">
                  <span className="text-zinc-800 text-sm">
                    From{" "}
                    <span className="font-semibold text-normal">$17500</span>
                  </span>
                  <s className="text-zinc-700">US $350</s>
                </div>{" "}
                <span className="text-zinc-700 text-sm">per person</span>
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center">
                <Icon icon="mdi:offer" className="w-[1.5rem] h-[1.5rem]" />
                <span className="text-sm text-zinc-700 font-medium">
                  Guarenteed Departures
                </span>
              </div>
              <div className="flex gap-1 items-center">
                <Icon icon="mdi:offer" className="w-[1.5rem] h-[1.5rem]" />
                <span className="text-sm text-zinc-700 font-medium">
                  All Inclusive Pricing
                </span>
              </div>
              <div className="flex gap-1 items-center">
                <Icon icon="mdi:offer" className="w-[1.5rem] h-[1.5rem]" />
                <span className="text-sm text-zinc-700 font-medium">
                  Customizable Iteneraries
                </span>
              </div>
              <div className="flex gap-1 items-center">
                <Icon icon="mdi:offer" className="w-[1.5rem] h-[1.5rem]" />
                <span className="text-sm text-zinc-700 font-medium">
                  24/7 customer support
                </span>
              </div>
              <div className="flex gap-1 items-center">
                <Icon icon="mdi:offer" className="w-[1.5rem] h-[1.5rem]" />
                <span className="text-sm text-zinc-700 font-medium">
                  Easy cancellation
                </span>
              </div>
            </div>

            {/* BUTTON  */}
            <div className="flex flex-col gap-2">
              <Link href="/booking">
                <button className="bg-yellow-200  text-center w-48 rounded-3xl h-14 relative font-sans text-black text-xl font-semibold group">
                  <div className="bg-yellow-400 rounded-3xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                    <svg
                      width="25px"
                      height="25px"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate-180"
                    >
                      <path
                        fill="#000000"
                        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                      ></path>
                      <path
                        fill="#000000"
                        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                      ></path>
                    </svg>
                  </div>
                  <p className="translate-x-2 text-sm">Book now</p>
                </button>
              </Link>

              <Link href="/contact_us">
                <button className="bg-yellow-200  text-center w-48 rounded-3xl h-14 relative font-sans text-black text-xl font-semibold group">
                  <div className="bg-yellow-400 rounded-3xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                    <svg
                      width="25px"
                      height="25px"
                      viewBox="0 0 1024 1024"
                      xmlns="http://www.w3.org/2000/svg"
                      className="rotate-180"
                    >
                      <path
                        fill="#000000"
                        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                      ></path>
                      <path
                        fill="#000000"
                        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                      ></path>
                    </svg>
                  </div>
                  <p className="translate-x-2 text-sm">Enquiry</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* similar package  */}
      <Similar />
    </>
  );
}

export default TripDetailMain;

const PackageDetail = [
  {
    id: 1,
    title: "Group Size",
    icon: "grommet-icons:group",
    desc: `4 to 10 Climbers`,
  },
  { id: 2, title: "Trip Duration", icon: "clarity:date-line", desc: `58 Days` },
  {
    id: 3,
    title: "Coordinates",
    icon: "fontisto:map",
    desc: `27° 57' 41.9976'' N, 86° 56' 0.0024'' E`,
  },
  {
    id: 4,
    title: "Mountain Range",
    icon: "mdi:mountain",
    desc: "Mahalangur Mountain Range",
  },
  {
    id: 5,
    title: "Maximum Altitude",
    icon: "material-symbols:altitude-outline",
    desc: `8,516 m`,
  },
  {
    id: 5,
    title: "Best Season",
    icon: "fluent:weather-partly-cloudy-day-16-regular",
    desc: `April to May`,
  },
  {
    id: 5,
    title: "Activities",
    icon: "iconoir:trekking",
    desc: `Mountaineering`,
  },
  {
    id: 5,
    title: "Difficulty",
    icon: "carbon:skill-level",
    desc: `Extreme / Physical`,
  },
  {
    id: 5,
    title: "Accomodation",
    icon: "ph:buildings",
    desc: `Tea House and Tented/ Full Board Package`,
  },
];

const buttonLabels = [
  { id: 1, label: "Overview", icon: "grommet-icons:overview" },
  { id: 2, label: "Itinerary", icon: "bi:bar-chart-steps" },
  { id: 3, label: "Trip Attraction", icon: "grommet-icons:attraction" },
  { id: 4, label: "Essential Information", icon: "ri:information-2-line" },
  { id: 5, label: "Gear List", icon: "carbon:gears" },
  { id: 6, label: "Gallery", icon: "solar:gallery-bold" },
  { id: 6, label: "Fixed dates", icon: "gg:calendar-dates" },
];

const ItineraryData = [
  {
    day: "01",
    title: "Travel To Pokhara From Kathmandu Valley In The West.",
    desc: " Embark on a scenic journey to Pokhara, enjoying the enchanting views of Trishuli and Marsyangdi rivers winding through lush mountains. Pokhara awaits with its serene lakes and majestic Himalayan backdrop, promising anunforgettable adventure in a tourist haven.",
  },
  {
    day: "02",
    title: "Explore the lakes and caves in Pokhara.",
    desc: " Embark on a scenic journey to Pokhara, enjoying the enchanting views of Trishuli and Marsyangdi rivers winding through lush mountains. Pokhara awaits with its serene lakes and majestic Himalayan backdrop, promising anunforgettable adventure in a tourist haven.",
  },
  {
    day: "03",
    title: "Visit the Peace Pagoda and enjoy the mountain views.",
    desc: " Embark on a scenic journey to Pokhara, enjoying the enchanting views of Trishuli and Marsyangdi rivers winding through lush mountains. Pokhara awaits with its serene lakes and majestic Himalayan backdrop, promising anunforgettable adventure in a tourist haven.",
  },
  {
    day: "04",
    title: "Hike to Sarangkot for sunrise.",
    desc: " Embark on a scenic journey to Pokhara, enjoying the enchanting views of Trishuli and Marsyangdi rivers winding through lush mountains. Pokhara awaits with its serene lakes and majestic Himalayan backdrop, promising anunforgettable adventure in a tourist haven.",
  },
  {
    day: "05",
    title: "Return to Kathmandu.",
    desc: " Embark on a scenic journey to Pokhara, enjoying the enchanting views of Trishuli and Marsyangdi rivers winding through lush mountains. Pokhara awaits with its serene lakes and majestic Himalayan backdrop, promising anunforgettable adventure in a tourist haven.",
  },
];

//

const TripAttraction = [
  {
    id: 1,
    title: `1:1 Ratio (1 Certified Mountain Guide and 1 Climber)`,
  },
  {
    id: 2,
    title: `Professional and experienced Guides and Support Guides`,
  },
  {
    id: 3,
    title: `Challenging High alpine climbing experience above 8000m ASL`,
  },
  {
    id: 4,
    title: `It serves as a perfect training preparation before attempting a serious technical other 8,000m mountains including Mount Everest 8848.86m`,
  },
  {
    id: 5,
    title: `Group Climbing Gears`,
  },
  {
    id: 6,
    title: `Full Base camp Set up at Above Camps`,
  },
  {
    id: 7,
    title: `Specialized Alpine Cuisine in Trekking and Base camp`,
  },
  {
    id: 8,
    title: `3 Oxygen cylinders for each climber and 1 set Mask and regulator)`,
  },
  {
    id: 9,
    title: `Mask, Regulator, and O2 Cylinder (only for medical purposes at base camp)`,
  },
  {
    id: 10,
    title: `Updated Weather Forecasting Report`,
  },
];

const EssentialInformation = [
  {
    id: 1,
    title: `Risk and Liability:`,
    desc: `Contour Expeditions(P) Ltd will make every effort to ensure that your Expedition is smooth and as pleasant as possible. However, please be reminded that all programs in Nepal are strictly conducted under the rules and regulations of the Nepal Government and Tourism Bureau. Therefore, we Contour Expeditions(P) Ltd. shall not be responsible for any changes in the itinerary due to unavoidable circumstances to Government
restrictions, landslides, road blockages, flooding, snowfall, political disturbances, illnesses or accidents. Any additional costs that are a result of such circumstances will be borne by you at the very spot.`,
  },

  {
    id: 2,
    title: `Medical Examination`,
    desc: `Expedition members should have all the immunizations that are required for visiting Nepal and be free of any medical condition that might pose a risk to themselves or fellow climbers during the trip. Our Peak climbing guides team Our group of IFMGA guide and assistants Climbing sherpa are enthusiastic, motivated and regarded as the

strongest and most cohesive group of Sherpas and other ethnic groups in Nepal. It is indicative of the reputation that our expedition team has earned - that Sherpa from other expeditions enthusiastically pursue a future position with the Contour Expeditions team.`,
  },

  {
    id: 3,
    title: `Documentation and Photographs`,
    desc: `Expedition trek members will need to provide 4 Photos passport size, occupation, Home address for trekking and climbing permits and a copy of their passport bio-data page. Passport photocopy (should be very clear with color scan) and validity minimum 6 months. We recommend having your passport ready well in advance to avoid last moment visa procedures Kindly consult your doctor and get yourself examined.

As trekking is situated at high altitudes please start exercises like walking, jogging, yoga, cardio, climbing and other breathing exercises in order to have a successful Trek and alpine climbing. Kindly get yourself medical insurance for this Trek. Please make sure you cover yourself for emergency evacuation (helicopter) insurance.`,
  },

  {
    id: 4,
    title: `Deposit`,
    desc: `An initial deposit of USD $1000 /-per person is required to secure a place on the trip`,
  },

  {
    id: 5,
    title: `Balance and Payments :`,
    desc: `The payment balance for this trip is 30 days before departure. All payments should be made by bank wire transfer to the following bank and account:`,
  },

  {
    id: 6,
    title: `SAFETY for this trek:`,
    desc: `Your safety is our major concern. So, the first aid kit boxes are supplied along the trek. The guides will take care of you if minor problems occur. But in case of harsh situations, emergency evacuation, and rescue, choppers with an experienced team will be there for you.`,
  },

  {
    id: 7,
    title: `BEST TIME TO DO`,
    desc: `The best time for this trek is during the spring (March to May) and autumn (October to December) season.`,
  },

  {
    id: 8,
    title: `TRAVEL INSURANCE`,
    desc: `It is your responsibility to ensure that you are fully and adequately insured for the duration of your trip. Please ensure that all activities, excursions, and destinations in your itinerary are included in your insurance policy, We advise our climbers to have full insurance against Medical, Evacuation, Trip cancellation, lost or damaged baggage, Air delays, etc. for this peak, you must be covered up to 6200m altitude.  Please take a copy of your insurance policy to the pre-trip briefing, as the guide will need to collect

your insurance details. We also ask that you keep a copy of your policy summary (containing policy number and emergency contact number for you insure) in your daypack at all times, so that we can access the information should we need to contact the insured on your behalf. We recommend international insurance company is https://www.globalrescue.com`,
  },
  {
    id: 9,
    title: `MEAL DURING TREK and Manaslu Expedition`,
    desc: `During our trek, you can appreciate bona fide Nepalese nourishment also the more typical international food (Tibetan, Continental, Italian, Indian, and so forth.). The essential menu for nourishment includes local food. You might not have more choices for nourishment, yet whatever you eat is healthy. The sustenance menu has

dal, Bhat, tarkari, momo (dumplings) and noodles on top. Breakfast and meals will be given from the teahouse or from a hotel menu where we go through the night; however lunch will be given while in transit to the next destination. All suppers, including breakfast, lunch, and supper, will be given during trekking while just breakfast will be accessible in Kathmandu and Pokhara. There will likewise be welcome and goodbye meals. For beverages, you can pick anything from tea, espresso, as well as some flavored beverages.`,
  },

  {
    id: 10,
    title: `ACCOMMODATION DURING TREK`,
    desc: `At City: Kathmandu and Ramechhap

Hotel (one room for two people)

Note: if you need a single room, email us at info@contourexpeditions.com

For the Single Room, we charge a single supplement.`,
  },
  {
    id: 11,
    title: `While Trekking and base camp:`,
    desc: `Eco Lodges ( a small house with few rooms at remote areas) best camping tent at base camp full setup, and one sleeping Mera v25 model at Manaslu Expedition, sharing base 2 people at base camp.`,
  },
  {
    id: 12,
    title: `ELECTRICAL SOCKETS`,
    desc: `There are 2 types of electrical sockets in Nepal –type D which are old UK style (3 round pins) and type C which are standard European style (2 round pins) –and are 220v, same as the UK. The type D socket is commonly found in India, so any adapter that is suitable for India will be the right size, and a European adaptor will be fine for the type C socket.`,
  },
  {
    id: 13,
    title: `Is there a mobile network on this trek? Are there any electricity charging points on this trek?`,
    desc: `Network on Ncell and Namaste Nepal telecom is available along the trek. Major tea houses have the facility to make calls for an additional charge. You can buy Wi-Fi at all tea houses for 200-300 NPR. Tea houses charge you 100-300 NPR for the use of electricity charging points. The rates increase as you go higher up on the trail. The dining area in tea houses at lower altitudes usually have common charging points that you can use for free.`,
  },
  {
    id: 14,
    title: `Toilets`,
    desc: `Starting the Manaslu Expedition, you won’t find western style toilets in most hotels. It is always easier and cleaner to maintain squat toilets. Water is stored in drums. Since toilets are common for a floor, it can get dirty in peak seasons, when there’s a high flow of trekkers.`,
  },
];

// const Exclusion = [
//   {
//     id: 1,
//     title: "International Flight Airfare",
//     description: "Air Travel Expenses to and from Kathmandu",
//   },
//   {
//     id: 2,
//     title: "Nepal Entry Visa Fee",
//     description:
//       "Charge for Nepalese Visa, priced at $125 USD for a duration of 90 days.",
//   },
//   {
//     id: 3,
//     title: "Meal Provision",
//     description:
//       "Lunch and Dinner arrangements while in Kathmandu, including instances of early return from Trekking or Expedition as per the scheduled itinerary.",
//   },
//   {
//     id: 4,
//     title: "Extended Stay in Kathmandu",
//     description:
//       "Additional accommodation nights in Kathmandu. Applicable in instances of early arrival, late departure, early return from Trekking or Expedition, or domestic flight cancellation beyond the scheduled itinerary.",
//   },
//   {
//     id: 5,
//     title: "Insurance Coverage",
//     description:
//       "Policy encompassing medical expenses and high-altitude evacuation costs, including trip cancellation, interruption, high-altitude rescue, air evacuation, medical treatment, repatriation, etc. *Compulsory",
//   },
//   {
//     id: 6,
//     title: "Individual Expenditures",
//     description:
//       "Costs for telephone calls, internet usage, toiletries, battery recharge, hot showers, laundry services, soft drinks, beers, and any alcoholic beverages. (*Note: Soft drinks will be available for members at the base camp).",
//   },
//   {
//     id: 7,
//     title: "Personal Climbing Gear",
//     description:
//       "Includes clothing, packing items, bags, personal medical kit, and all types of personal trekking and climbing equipment.",
//   },
//   {
//     id: 8,
//     title: "Toiletries",
//     description:
//       "Essential items such as soaps, shampoos, toilet paper, tissue paper, toothpaste, and other products used for personal hygiene and cleanliness.",
//   },
//   {
//     id: 9,
//     title: "Filming Permit",
//     description: "Fee for special filming, camera, and drone usage permit.",
//   },
//   {
//     id: 10,
//     title: "Internet Service",
//     description: "Excluded during the trek.",
//   },
// ];

// const Inclusion = [
//   {
//     id: 1,
//     title: "Arrival and Departure",
//     description:
//       "Private vehicle transportation from the airport to the hotel and back.",
//   },
//   {
//     id: 2,
//     title: "Kathmandu Hotel Accommodation",
//     description:
//       "Four nights in a 4-star hotel in Kathmandu, with a single room and a bed and breakfast package.",
//   },
//   {
//     id: 3,
//     title: "Greetings for Dinner",
//     description:
//       "A welcome dinner at a typical tourist restaurant in Kathmandu with the office staff.",
//   },
//   {
//     id: 4,
//     title: "Customs Clearance",
//     description:
//       "Support for cargo clearance at Nepalese Customs, with charges applicable for the clearance service.",
//   },
//   {
//     id: 5,
//     title: "Permits",
//     description:
//       "Royalty for mountaineering expeditions and a permit fee imposed by the Nepalese government for climbing Mount Manaslu, and accessing conservation area.",
//   },
//   {
//     id: 6,
//     title: "Representative Officer",
//     description:
//       "One government liaison officer provided with complete equipment, salary, and accommodation.",
//   },
//   {
//     id: 7,
//     title: "Waste Management",
//     description:
//       "Fees for the transfer of human waste shipments and depositing garbage.",
//   },
//   {
//     id: 8,
//     title: "Insurance",
//     description:
//       "Insurance coverage for medical expenses and emergency rescue services for all Nepalese staff involved in the trek and expedition.",
//   },
//   {
//     id: 9,
//     title: "Map",
//     description: "Map for Trekking and Climbing",
//   },
//   {
//     id: 10,
//     title: "Large Travel Bag",
//     description: "A large bag provided by Epeak Expedition",
//   },
//   {
//     id: 11,
//     title: "Member Transportation Services",
//     description:
//       "Travel by road from Kathmandu to Dharapani via Besishashar, and on the return journey, go from Machha Khola back to Kathmandu, following the outlined itinerary.",
//   },
//   {
//     id: 12,
//     title: "Transportation of Expedition Equipment",
//     description:
//       "Transportation of essential equipment for all members and staff will be provided from Kathmandu to Arukhet via jeep, from Arukhet to Sama Gaun via helicopter, and then to the base camp by porters. On the return journey, transportation will be arranged from the base camp to Sama Gaun by porters, from Sama Gaun to Arukhet by helicopter, and from Arughat back to Kathmandu via jeep.",
//   },
//   {
//     id: 13,
//     title: "Personal Belongings Allowance",
//     description:
//       "Each member is allowed up to 70 kg of personal baggage during the trek, which will be carried by porters or yaks.",
//   },
//   {
//     id: 14,
//     title: "Meal and Accommodation Provision",
//     description:
//       "Three meals a day (breakfast, lunch, and dinner) along with tea, coffee, and accessible accommodation at hotels/lodges during the trek and at the Base Camp. Hygienic and fresh food items such as vegetables, meat, fruits, soft drinks, and juice will be regularly served throughout the expedition, with the help of helicopter flights. Well-managed base camp setup for members and staff.",
//   },
//   {
//     id: 15,
//     title: "Baggage Carrier Service",
//     description:
//       "Porters will be provided per member for transportation to and from the base camp.",
//   },
//   {
//     id: 16,
//     title: "Camp Support Team",
//     description:
//       "Experienced and well-trained base camp cook and kitchen helpers as required.",
//   },
//   {
//     id: 17,
//     title: "Employee Compensation Package",
//     description:
//       "Daily wages, salary, equipment, food, and clothing for all Nepalese staff and porters.",
//   },
//   {
//     id: 18,
//     title: "Base Camp Tent",
//     description:
//       "Each member will have an individual box tent at the Base Camp.",
//   },
//   {
//     id: 19,
//     title: "Base Camp Infrastructure Supplies",
//     description:
//       "Necessary tents, mattresses, pillows, dining tent, kitchen tent, communication tent, toilet and shower tent, staff tents, cooking gear, tables, and chairs.",
//   },
//   {
//     id: 20,
//     title: "Heater",
//     description:
//       "Heaters will be provided at the base camp in dining and other necessary camps.",
//   },
//   {
//     id: 21,
//     title: "Light/Solar/Generator",
//     description:
//       "Solar panel and generator for lighting, battery charging, and electronic devices at the base camp.",
//   },
//   {
//     id: 22,
//     title: "Health Assessment Services",
//     description:
//       "Twice medical checkups for each climber at the base camp before the summit attempt.",
//   },
//   {
//     id: 23,
//     title: "Training",
//     description:
//       "Training sessions on oxygen use, mask regulator, ice wall, and ladder at the base camp by UIAGM Guides.",
//   },
//   {
//     id: 24,
//     title: "Expert Climbing Guide Assistance: Supportive Aid",
//     description:
//       "One veteran and government-licensed climbing Sherpa per member throughout the climb, including rotations and summit attempts.",
//   },
//   {
//     id: 25,
//     title: "Guide Compensation Package",
//     description:
//       "Salary, equipment, food, and clothing for climbing Sherpas. Bonus: Carry bonus for Sherpas and route fixing charges.",
//   },
//   {
//     id: 26,
//     title: "Oxygen Supply",
//     description:
//       "Epeak oxygen cylinders provided (5 bottles for each member, 3 bottles for each high-altitude Sherpa).",
//   },
//   {
//     id: 27,
//     title: "Breathing Equipment",
//     description:
//       "Epeak oxygen masks and regulators for each member and high-altitude Sherpa.",
//   },
//   {
//     id: 28,
//     title: "Emergency Oxygen Reserves",
//     description:
//       "Reserve oxygen cylinder, mask, and regulator with appropriate charge.",
//   },
//   {
//     id: 29,
//     title: "Advanced Camp Facilities",
//     description:
//       "Tents, cooking equipment, food, and climbing gear at high camps.",
//   },
//   {
//     id: 30,
//     title: "High Camp Dining Services",
//     description: "Kitchen and dining tents at Camp I and Camp II.",
//   },
//   {
//     id: 31,
//     title: "High Altitude Tent",
//     description: "Members will share tents in high camps.",
//   },
//   {
//     id: 32,
//     title: "Route Setting Crew",
//     description: "Experienced Sherpas will fix the route to the summit.",
//   },
//   {
//     id: 33,
//     title: "Satellite Phone",
//     description:
//       "Emergency satellite phone carried by Sherpas, available for members with charge.",
//   },
//   {
//     id: 34,
//     title: "Walkie-Talkie",
//     description:
//       "Communication devices from Base Camp to Mountain and vice versa.",
//   },
//   {
//     id: 35,
//     title: "Authorization Documents",
//     description:
//       "Satellite phone and walkie-talkie permits for all members and staff.",
//   },
//   {
//     id: 36,
//     title: "Internet Facility",
//     description: "Internet facility available at Base Camp with charge.",
//   },
//   {
//     id: 37,
//     title: "Weather Forecast",
//     description:
//       "Regular weather forecast reports from Meteotest, Bern (Switzerland).",
//   },
//   {
//     id: 38,
//     title: "Health Supplies",
//     description: "Comprehensive medical kit for members and staff.",
//   },
//   {
//     id: 39,
//     title: "Certificate",
//     description:
//       "Mount Manaslu climbing certificate issued by MoCTCA after a successful climb.",
//   },
// ];
