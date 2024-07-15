"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Ham from "@/public/hamburger.png";
import Logo from "@/public/contour_expeditions_logo.webp";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, Expo } from "gsap";
import { usePathname } from "next/navigation";
import Package from "@/public/Lhotse-peak.jpg";

type Props = {};

const sideNavLinks = [
  { title: "Home", href: "" },
  { title: "Trekking", href: "" },
  { title: "Expedition", href: "" },
  { title: "Other activities", href: "" },
  { title: "Expeditions", href: "" },
  { title: "Blogs", href: "" },
  { title: "Contact us", href: "" },
];

function Navbar({}: Props) {
  const [openNav, setOpenNav] = useState(false);
  const currentRoute = usePathname();
  const sideNavRef = useRef(null);
  const [sideNav, setSideNav] = useState(false);
  const [sideLinks, setSideLinks] = useState(false);

  const { contextSafe } = useGSAP();
  const handleOpenNav = contextSafe(() => {
    if (!sideNav) {
      gsap.to(sideNavRef.current, { right: 0 });
      gsap.to(".links", { opacity: 1, duration: 1 });
      setSideNav(true);
    }
    if (sideNav) {
      gsap.to(sideNavRef.current, { right: "-100%" });
      gsap.to(".links", { opacity: 0, duration: 1 });
      setSideNav(false);
    }
  });

  const handleLink = (index: number) => {
    if (!sideLinks) {
      gsap.to(`openlinks-${index}`, { height: "20vh" });
      setSideLinks(true);
    }
    if (sideLinks) {
      gsap.to(`openlinks-${index}`, { height: "0vh" });
      setSideLinks(false);
    }
  };

  // open animation
  const navContainerRef = useRef(null);
  // useGSAP(() => {
  //   gsap.from(navContainerRef.current, {
  //     height: 0,
  //     transformOrigin: "top",
  //     duration: 0.5,
  //     ease: "power4.out",
  //   });
  // });

  return (
    <>
      <div
        ref={navContainerRef}
        className={`fixed z-[100] nav-container bg-yellow-50  text-secondary-500 top-0  left-0 w-full h-[4rem] `}
      >
        {/* mobile nav  */}
        {/* <div
        ref={sideNavRef}
        className="absolute  md:hidden w-[100vw] flex justify-center items-center top-0 right-[-100%]  h-[100vh] mx-auto bg-secondary-50 text-secondary-500 py-2"
      >
        <div className="w-11/12 mx-auto  grid grid-cols-1  gap-5 place-content-center pt-[5rem] text-start h-full place-items-start  flex-col justify-center items-center">
          {sideNavLinks.map((link, index) => (
            <>
              <Link
                onClick={() => handleLink(index)}
                key={index}
                className="w-full"
                href={link.href}
              >
                <div className="title  links text-lg border-b mb-1 opacity-0 font-medium tracking-wide w-full flex justify-between items-center">
                  {link.title} <span></span> <span></span>
                </div>
                <div
                  className={`w-full  openlinks-${index} bg-green-200 h-0`}
                ></div>
              </Link>
            </>
          ))}
        </div>
      </div> */}
        {/* LOGO  */}
        <div className="w-full md:hidden  text-secondary-500 relative  tracking-wide  mx-auto h-full flex  justify-between items-center gap-5">
          {/* LOGO  */}
          <Link href="/" className="cursor-pointer">
            <Image
              src={Logo}
              alt="contour-expedition-logo"
              className="w-[6rem] h-[3rem] object-fit object-center"
            ></Image>
          </Link>
          <div onClick={handleOpenNav} className="">
            {sideNav === false ? (
              <Image
                width={500}
                height={500}
                src={Ham}
                alt="ham"
                className="w-[2rem]  h-[1rem] object-fit object-center pr-1"
              />
            ) : (
              <Icon
                icon="material-symbols:close"
                className="w-[2rem]  h-[2rem] object-fit object-center pr-1"
              />
            )}
          </div>
        </div>
        <div className="w-11/12  text-secondary-500   tracking-wide  mx-auto h-full hidden md:flex justify-between items-center gap-5">
          <div className="flex gap-5  text-[14px] font-medium">
            {/* expedition  */}
            <div className="group relative">
              <div
                className={` flex gap-1 justify-center items-center cursor-pointer hover:text-yellow-500 ${
                  currentRoute.includes("/expedition")
                    ? "text-yellow-500 font-medium  duration-[0.5]"
                    : ""
                }`}
              >
                <span>Mounteering</span>
                <Icon
                  icon="gridicons:dropdown"
                  className="w-[1.5rem] pb-1 pr-1 h-[1.5rem] object-cover object-center"
                />
              </div>
              <div className="absolute hidden bg-yellow-50 rounded-3xl  gap-2 group-hover:flex   duration-[0.5] top-[100%] left-0 w-[60vw] whitespace-nowrap   shadow p-5">
                <div className="flex flex-col">
                  {expeditionsLink.map((trek) => (
                    <div key={trek.href} className="py-1 flex flex-col">
                      <Link href="">
                        <div className="border-b border-primary-100 text-secondary-500 text-[13px] font-medium uppercase hover:text-yellow-500 cursor-pointer">
                          {trek.name}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="flex w-[80%] flex-col border-l gap-5 justify-center pl-3 items-start">
                  <div className="grid grid-cols-4 w-full border-zinc-700 gap-5 overflow-hidden">
                    <Link
                      href="/trip/trip_detail"
                      onClick={() => setOpenNav(false)}
                    >
                      <div className="w-full h-[25vh] cursor-pointer rounded-3xl">
                        <Image
                          src={Package}
                          alt=""
                          className="object-cover object-center w-full h-full rounded-3xl brightness-75 "
                        ></Image>
                      </div>
                    </Link>
                    <Link
                      href="/trip/trip_detail"
                      onClick={() => setOpenNav(false)}
                    >
                      <div className="w-full h-[25vh] cursor-pointer rounded-3xl">
                        <Image
                          src={Package}
                          alt=""
                          className="object-cover object-center w-full h-full rounded-3xl brightness-75 "
                        ></Image>
                      </div>
                    </Link>
                    <Link
                      href="/trip/trip_detail"
                      onClick={() => setOpenNav(false)}
                    >
                      <div className="w-full h-[25vh] cursor-pointer rounded-3xl">
                        <Image
                          src={Package}
                          alt=""
                          className="object-cover object-center w-full h-full rounded-3xl brightness-75 "
                        ></Image>
                      </div>
                    </Link>
                  </div>
                  <div className="">View all button</div>
                </div>
              </div>
            </div>
            {/* trekking  */}
            <div className="group relative">
              <div
                className={` flex gap-1 justify-center items-center cursor-pointer hover:text-yellow-500 ${
                  currentRoute.includes("/trek")
                    ? "text-yellow-500 font-medium  duration-[0.5]"
                    : ""
                }`}
              >
                <span>Trekking</span>
                <Icon
                  icon="gridicons:dropdown"
                  className="w-[1.5rem] pb-1 pr-1 h-[1.5rem] object-cover object-center"
                />
              </div>
              <div className="absolute hidden bg-yellow-50 rounded-3xl  gap-2 group-hover:flex  duration-[0.5] top-[100%] left-0 w-[60vw] whitespace-nowrap   shadow p-5">
                <div className="flex flex-col">
                  {treksLink.map((trek) => (
                    <div key={trek.href} className="py-1 flex flex-col">
                      <Link href="">
                        <div className="border-b border-primary-100 text-secondary-500 text-[13px] font-medium uppercase hover:text-yellow-500 cursor-pointer">
                          {trek.name}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="flex w-[80%] flex-col border-l gap-5 justify-center pl-3 items-start">
                  <div className="grid grid-cols-4 w-full border-zinc-700 gap-5 overflow-hidden">
                    <Link
                      href="/trip/trip_detail"
                      onClick={() => setOpenNav(false)}
                    >
                      <div className="w-full h-[25vh] cursor-pointer rounded-3xl">
                        <Image
                          src={Package}
                          alt=""
                          className="object-cover object-center w-full h-full rounded-3xl brightness-75 "
                        ></Image>
                      </div>
                    </Link>
                    <Link
                      href="/trip/trip_detail"
                      onClick={() => setOpenNav(false)}
                    >
                      <div className="w-full h-[25vh] cursor-pointer rounded-3xl">
                        <Image
                          src={Package}
                          alt=""
                          className="object-cover object-center w-full h-full rounded-3xl brightness-75 "
                        ></Image>
                      </div>
                    </Link>
                    <Link
                      href="/trip/trip_detail"
                      onClick={() => setOpenNav(false)}
                    >
                      <div className="w-full h-[25vh] cursor-pointer rounded-3xl">
                        <Image
                          src={Package}
                          alt=""
                          className="object-cover object-center w-full h-full rounded-3xl brightness-75 "
                        ></Image>
                      </div>
                    </Link>
                  </div>
                  <div className="">View all button</div>
                </div>
              </div>
            </div>

            {/* other activities  */}
            <div className="group relative">
              <div
                className={` flex gap-1 justify-center items-center cursor-pointer hover:text-yellow-500 ${
                  currentRoute.includes("/other_activities")
                    ? "text-yellow-500   duration-[0.5]"
                    : ""
                }`}
              >
                <span>Other Activities</span>
                <Icon
                  icon="gridicons:dropdown"
                  className="w-[1.5rem] pb-1 pr-1 h-[1.5rem] object-cover object-center"
                />
              </div>
              <div className="absolute hidden bg-yellow-50 rounded-3xl  gap-2 group-hover:flex  duration-[0.5] top-[100%] left-0 w-[60vw] whitespace-nowrap   shadow p-5">
                <div className="flex flex-col">
                  {activitiesLink.map((activity) => (
                    <div key={activity.href} className="py-1 flex flex-col">
                      <Link href={activity.href}>
                        <div className="border-b border-primary-100 text-secondary-500 text-[13px] font-medium uppercase hover:text-yellow-500 cursor-pointer">
                          {activity.name}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="flex w-[80%] flex-col border-l gap-5 justify-center pl-3 items-start">
                  <div className="grid grid-cols-4 w-full border-zinc-700 gap-5 overflow-hidden">
                    <Link
                      href="/trip/trip_detail"
                      onClick={() => setOpenNav(false)}
                    >
                      <div className="w-full h-[25vh] cursor-pointer rounded-3xl">
                        <Image
                          src={Package}
                          alt=""
                          className="object-cover object-center w-full h-full rounded-3xl brightness-75 "
                        ></Image>
                      </div>
                    </Link>
                    <Link
                      href="/trip/trip_detail"
                      onClick={() => setOpenNav(false)}
                    >
                      <div className="w-full h-[25vh] cursor-pointer rounded-3xl">
                        <Image
                          src={Package}
                          alt=""
                          className="object-cover object-center w-full h-full rounded-3xl brightness-75 "
                        ></Image>
                      </div>
                    </Link>
                    <Link
                      href="/trip/trip_detail"
                      onClick={() => setOpenNav(false)}
                    >
                      <div className="w-full h-[25vh] cursor-pointer rounded-3xl">
                        <Image
                          src={Package}
                          alt=""
                          className="object-cover object-center w-full h-full rounded-3xl brightness-75 "
                        ></Image>
                      </div>
                    </Link>
                  </div>
                  <div className="">View all button</div>
                </div>
              </div>
            </div>

            {/* TRAINING  */}
            <div className="group relative">
              <div
                className={` flex gap-1 justify-center items-center cursor-pointer hover:text-yellow-500 ${
                  currentRoute.includes("/training")
                    ? "text-yellow-500   duration-[0.5]"
                    : ""
                }`}
              >
                <span>Training</span>
                <Icon
                  icon="gridicons:dropdown"
                  className="w-[1.5rem] pb-1 pr-1 h-[1.5rem] object-cover object-center"
                />
              </div>
              <div className="absolute hidden bg-yellow-50 rounded-3xl  gap-2 group-hover:flex  duration-[0.5] top-[100%] left-0 w-[60vw]    shadow p-5">
                <div className="flex flex-col w-[20%]">
                  {trainingLink.map((training) => (
                    <div key={training.href} className="py-1 flex flex-col">
                      <Link href={training.href}>
                        <div className="border-b border-primary-100 text-secondary-500 text-[13px] font-medium uppercase hover:text-yellow-500 cursor-pointer">
                          {training.name}
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="flex w-[80%] flex-col border-l gap-5 justify-center pl-3 items-start">
                  <div className="grid grid-cols-4 w-full border-zinc-700 gap-5 overflow-hidden">
                    <Link
                      href="/trip/trip_detail"
                      onClick={() => setOpenNav(false)}
                    >
                      <div className="w-full h-[25vh] cursor-pointer rounded-3xl">
                        <Image
                          src={Package}
                          alt=""
                          className="object-cover object-center w-full h-full rounded-3xl brightness-75 "
                        ></Image>
                      </div>
                    </Link>
                    <Link
                      href="/trip/trip_detail"
                      onClick={() => setOpenNav(false)}
                    >
                      <div className="w-full h-[25vh] cursor-pointer rounded-3xl">
                        <Image
                          src={Package}
                          alt=""
                          className="object-cover object-center w-full h-full rounded-3xl brightness-75 "
                        ></Image>
                      </div>
                    </Link>
                    <Link
                      href="/trip/trip_detail"
                      onClick={() => setOpenNav(false)}
                    >
                      <div className="w-full h-[25vh] cursor-pointer rounded-3xl">
                        <Image
                          src={Package}
                          alt=""
                          className="object-cover object-center w-full h-full rounded-3xl brightness-75 "
                        ></Image>
                      </div>
                    </Link>
                  </div>
                  <div className="">View all button</div>
                </div>
              </div>
            </div>
          </div>
          {/* LOGO  */}
          <Link
            href="/home"
            className="font-bold text-2xl  tracking-wide absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2"
          >
            <Image
              src={Logo}
              alt="contour-expedition-logo"
              className="w-[8rem]  object-fit object-center"
            ></Image>
          </Link>

          <div className="flex gap-3 text-[14px] font-medium items-center">
            {/* home  */}
            <Link href="/" className="group relative">
              <span
                className={` hover:text-yellow-500 ${
                  currentRoute === "/"
                    ? "text-yellow-500 font-medium scale-110 duration-[0.5]"
                    : ""
                }`}
              >
                Home
              </span>
            </Link>
            <div className="group relative">
              <div
                className={` flex gap-1 justify-center items-center cursor-pointer hover:text-yellow-500 ${
                  currentRoute.includes("/other_activities")
                    ? "text-yellow-500   duration-[0.5]"
                    : ""
                }`}
              >
                <span>Company</span>
                <Icon
                  icon="gridicons:dropdown"
                  className="w-[1.5rem] pb-1 pr-1 h-[1.5rem] object-cover object-center"
                />
              </div>
              <ul className="absolute hidden bg-yellow-50 rounded-3xl group-hover:block duration-[0.5] top-[100%] left-0  whitespace-nowrap   shadow p-5">
                {companyLinks.map((link) => (
                  <li key={link.href} className="py-1">
                    <Link href={link.href}>
                      <div className="border-b border-primary-100 text-secondary-500 text-[13px] font-medium uppercase hover:text-yellow-500 cursor-pointer">
                        {link.name}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT US  */}
            <Link href="/blogs" className="group relative">
              <span
                className={` hover:text-yellow-500 ${
                  currentRoute.includes("/blog")
                    ? "text-yellow-500 font-medium scale-110 duration-[0.5]"
                    : ""
                }`}
              >
                Blogs
              </span>
            </Link>
            {/* CONTACT US  */}
            <Link href="/contact_us" className="group relative">
              <span
                className={` hover:text-yellow-500 ${
                  currentRoute.includes("/contact_us")
                    ? "text-yellow-500 font-medium scale-110 duration-[0.5]"
                    : ""
                }`}
              >
                Contact us
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* render down */}
    </>
  );
}

export default Navbar;

const companyLinks = [
  { name: "About us", href: "/about_us" },
  { name: "Our team", href: "/our_team" },
  { name: "Message from CEO", href: "/message_from_ceo" },
  { name: "Certificates", href: "/certificates" },
];

const activitiesLink = [
  { name: "Canyoning", href: "/other_activities/rock_climbing" },
  { name: "Rafting", href: "/other_activities/rafting" },
  { name: "Heritage Tour ", href: "/other_activities/rock_climbing" },
  { name: "Paragliding", href: "/other_activities/paragliding" },
  { name: "Mountain Biking", href: "/other_activities/mountain_biking" },
  { name: "Rock Climbing trip", href: "/other_activities/rock_climbing" },
  { name: "Pilgrimage tour  ", href: "/other_activities/rock_climbing" },
  { name: "Jungle Safari  ", href: "/other_activities/rock_climbing" },
  { name: "Ice climbing ", href: "/other_activities/rock_climbing" },
];

const trainingLink = [
  { name: "Basic Mountaineering course", href: "/other_activities/rafting" },
  {
    name: "Preparation for 8000m peak climbing course",
    href: "/other_activities/heli_tour",
  },
  // { name: "Paragliding", href: "/other_activities/paragliding" },
  // { name: "Mountain Biking", href: "/other_activities/mountain_biking" },
  // { name: "Rock Climbing", href: "/other_activities/rock_climbing" },
];

const expeditionsLink = [
  { name: "Above 8k", href: "/expedition/8000m" },
  { name: "Above 7k", href: "/expedition/7000m" },
  { name: "Above 7k", href: "/expedition/6000m" },
  { name: "Above 5k", href: "/expedition/5000m" },
];

const treksLink = [
  { name: "Annapurna Region", href: "/trek/everest_region_trekking" },
  { name: "Everest Region", href: "/trek/everest_region_trekking" },
  { name: "Langtang Region", href: "/trek/everest_region_trekking" },
  { name: "Manaslu Region", href: "/trek/everest_region_trekking" },
  { name: "Other treks  Region", href: "/trek/everest_region_trekking" },
  { name: "Off beaten treks (Camping)", href: "/trek/everest_region_trekking" },
  {
    name: "Short trek",
    href: "/trek/annapurna_region_trekking",
  },
  {
    name: "High passes treks ",
    href: "/trek/annapurna_region_trekking",
  },
];
