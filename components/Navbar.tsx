"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import Ham from "@/public/hamburger.png";
import Logo from "@/public/contour_expeditions_logo.webp";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, Expo } from "gsap";
import { usePathname } from "next/navigation";
import Package from "@/public/Lhotse-peak.jpg";

import BestSeller1 from "@/public/BestSellers/Best1.jpg";
import BestSeller2 from "@/public/BestSellers/best2.webp";
import BestSeller3 from "@/public/BestSellers/best3.jpg";
import BestSeller5 from "@/public/BestSellers/best2.jpg";

import Paragliding1 from "@/public/OtherActivities/Paragliding/paragliding1.avif";
import Paragliding2 from "@/public/OtherActivities/Paragliding/paragliding2.avif";
import Paragliding3 from "@/public/OtherActivities/Paragliding/paragliding3.avif";
import Paragliding4 from "@/public/OtherActivities/Paragliding/paragliding4.avif";
import Paragliding5 from "@/public/OtherActivities/Paragliding/paragliding5.avif";
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
  const [isScrolled, setIsScrolled] = useState(false);
  // const navContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [SelectedExp, setSelectedExp] = useState("Above 8k");

  const filteredExpeditionsPackage = expeditionsPackage.filter(
    (route: any) => route.name === SelectedExp
  );

  const [selectedRegion, setSelectedRegion] = useState("Annapurna Region");

  const currentPackages = trekkingPackage.find(
    (pkg) => pkg.name === selectedRegion
  )?.package;

  const [selectedActivity, setSelectedActivity] = useState("Canyoning");

  const selectActivityPackages = activitiesPackage.find(
    (pkg) => pkg.name === selectedActivity
  )?.package;

  const [selectedTraining, setSelectedTraining] = useState(
    "Basic Mountaineering course"
  );

  const selectTrainingPackages = trainingPackage.find(
    (pkg) => pkg.name === selectedTraining
  )?.package;

  return (
    <>
      <div
        ref={navContainerRef}
        className={`fixed z-[100] ${
          isScrolled
            ? "shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
            : ""
        } nav-container bg-yellow-50 text-secondary-500 top-0 left-0 w-full h-[4rem]`}
      >
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
              <div className="absolute hidden  nav-down bg-yellow-50 rounded-3xl  gap-2  group-hover:flex  duration-[0.5] top-[100%] left-0 w-[60vw] whitespace-nowrap   shadow p-5">
                <div className="flex flex-col">
                  {expeditionsLink.map((trek: any) => (
                    <div
                      onClick={() => setSelectedExp(trek.name)}
                      key={trek.href}
                      className="py-1 flex flex-col"
                    >
                      <div className="border-b border-primary-100 text-secondary-500 text-[13px] font-medium uppercase hover:text-yellow-500 cursor-pointer">
                        {trek.name}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex w-[80%] flex-col border-l gap-5 justify-center pl-3 items-start">
                  <div className="grid grid-cols-4 w-full border-zinc-700 gap-5 overflow-hidden">
                    {filteredExpeditionsPackage.map((route, routeIndex) =>
                      route.package.map((pkg, pkgIndex) => (
                        <Link
                          key={`${routeIndex}-${pkgIndex}`}
                          href="/trip/trip_detail"
                          onClick={() => setOpenNav(false)}
                        >
                          <div className="w-full h-[25vh] cursor-pointer rounded-3xl">
                            <Image
                              src={pkg}
                              alt={`Package ${pkg}`}
                              className="object-cover object-center w-full h-full rounded-3xl brightness-75"
                            />
                          </div>
                        </Link>
                      ))
                    )}
                  </div>
                  {/* BUTTON  */}
                  <Link href="/">
                    <div className="relative mt-4">
                      <button className="bg-yellow-200 text-center w-[150px] rounded-3xl h-12 font-sans text-black text-xl font-semibold">
                        <div className="bg-yellow-400 rounded-3xl h-10 w-10 z-30 flex items-center justify-center absolute left-1 top-[4px] duration-500 transition-all">
                          <svg
                            width="20px"
                            height="20px"
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
                        <p className="translate-x-3 text-sm">View all</p>
                      </button>
                      <style jsx>{`
                        .relative:hover .absolute {
                          width: 140px;
                        }
                      `}</style>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            {/* trekking  */}
            <div className="group relative">
              <div
                className={`flex gap-1 justify-center items-center cursor-pointer hover:text-yellow-500 ${
                  currentRoute.includes("/trek")
                    ? "text-yellow-500 font-medium duration-[0.5]"
                    : ""
                }`}
              >
                <span>Trekking</span>
                <Icon
                  icon="gridicons:dropdown"
                  className="w-[1.5rem] pb-1 pr-1 h-[1.5rem] object-cover object-center"
                />
              </div>
              <div className="absolute hidden nav-down bg-yellow-50 rounded-3xl gap-2 group-hover:flex duration-[0.5] top-[100%] left-0 w-[60vw] whitespace-nowrap shadow p-5">
                <div className="flex flex-col">
                  {treksLink.map((trek) => (
                    <div
                      key={trek.href}
                      className="py-1 flex flex-col"
                      onClick={() => setSelectedRegion(trek.name)}
                    >
                      <div className="border-b border-primary-100 text-secondary-500 text-[13px] font-medium uppercase hover:text-yellow-500 cursor-pointer">
                        {trek.name}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex w-[80%] flex-col border-l gap-5 justify-center pl-3 items-start">
                  <div className="grid grid-cols-4 w-full border-zinc-700 gap-5 overflow-hidden">
                    {currentPackages.map((pkg, index) => (
                      <Link
                        key={index}
                        href="/trip/trip_detail"
                        onClick={() => setOpenNav(false)}
                      >
                        <div className="w-full h-[25vh] cursor-pointer rounded-3xl">
                          <Image
                            src={pkg}
                            alt={`Package ${index + 1}`}
                            className="object-cover object-center w-full h-full rounded-3xl brightness-75"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                  {/* BUTTON */}
                  <Link href="/">
                    <div className="relative mt-4">
                      <button className="bg-yellow-200 text-center w-[150px] rounded-3xl h-12 font-sans text-black text-xl font-semibold">
                        <div className="bg-yellow-400 rounded-3xl h-10 w-10 z-30 flex items-center justify-center absolute left-1 top-[4px] duration-500 transition-all">
                          <svg
                            width="20px"
                            height="20px"
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
                        <p className="translate-x-3 text-sm">View all</p>
                      </button>
                      <style jsx>{`
                        .relative:hover .absolute {
                          width: 140px;
                        }
                      `}</style>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* other activities  */}
            <div className="group relative">
              <div
                className={`flex gap-1 justify-center items-center cursor-pointer hover:text-yellow-500 ${
                  currentRoute.includes("/other_activities")
                    ? "text-yellow-500 duration-[0.5]"
                    : ""
                }`}
              >
                <span>Other Activities</span>
                <Icon
                  icon="gridicons:dropdown"
                  className="w-[1.5rem] pb-1 pr-1 h-[1.5rem] object-cover object-center"
                />
              </div>
              <div className="absolute hidden nav-down bg-yellow-50 rounded-3xl gap-2 group-hover:flex duration-[0.5] top-[100%] left-0 w-[60vw] whitespace-nowrap shadow p-5">
                <div className="flex flex-col">
                  {activitiesLink.map((activity) => (
                    <div
                      key={activity.href}
                      className="py-1 flex flex-col"
                      onClick={() => setSelectedActivity(activity.name)}
                    >
                      <div className="border-b border-primary-100 text-secondary-500 text-[13px] font-medium uppercase hover:text-yellow-500 cursor-pointer">
                        {activity.name}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex w-[80%] flex-col border-l gap-5 justify-center pl-3 items-start">
                  <div className="grid grid-cols-4 w-full border-zinc-700 gap-5 overflow-hidden">
                    {selectActivityPackages.map((pkg, index) => (
                      <Link
                        key={index}
                        href="/trip/trip_detail"
                        onClick={() => setOpenNav(false)}
                      >
                        <div className="w-full h-[25vh] cursor-pointer rounded-3xl">
                          <Image
                            src={pkg}
                            alt={`Package ${index + 1}`}
                            className="object-cover object-center w-full h-full rounded-3xl brightness-75"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                  {/* BUTTON */}
                  <Link href="/">
                    <div className="relative mt-4">
                      <button className="bg-yellow-200 text-center w-[150px] rounded-3xl h-12 font-sans text-black text-xl font-semibold">
                        <div className="bg-yellow-400 rounded-3xl h-10 w-10 z-30 flex items-center justify-center absolute left-1 top-[4px] duration-500 transition-all">
                          <svg
                            width="20px"
                            height="20px"
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
                        <p className="translate-x-3 text-sm">View all</p>
                      </button>
                      <style jsx>{`
                        .relative:hover .absolute {
                          width: 140px;
                        }
                      `}</style>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            {/* TRAINING  */}
            <div className="group relative">
              <div
                className={`flex gap-1 justify-center items-center cursor-pointer hover:text-yellow-500 ${
                  currentRoute.includes("/training")
                    ? "text-yellow-500 duration-[0.5]"
                    : ""
                }`}
              >
                <span>Training</span>
                <Icon
                  icon="gridicons:dropdown"
                  className="w-[1.5rem] pb-1 pr-1 h-[1.5rem] object-cover object-center"
                />
              </div>
              <div className="absolute hidden nav-down bg-yellow-50 rounded-3xl gap-2 group-hover:flex duration-[0.5] top-[100%] left-0 w-[60vw]  shadow p-5">
                <div className="flex flex-col w-[20%]">
                  {trainingLink.map((training) => (
                    <div
                      key={training.href}
                      className="py-1 flex flex-col"
                      onClick={() => setSelectedTraining(training.name)}
                    >
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
                    {selectTrainingPackages.map((pkg, index) => (
                      <Link
                        key={index}
                        href="/trip/trip_detail"
                        onClick={() => setOpenNav(false)}
                      >
                        <div className="w-full h-[25vh] cursor-pointer rounded-3xl">
                          <Image
                            src={pkg}
                            alt={`Package ${index + 1}`}
                            className="object-cover object-center w-full h-full rounded-3xl brightness-75"
                          />
                        </div>
                      </Link>
                    ))}
                  </div>
                  {/* BUTTON */}
                  <Link href="/">
                    <div className="relative mt-4">
                      <button className="bg-yellow-200 text-center w-[150px] rounded-3xl h-12 font-sans text-black text-xl font-semibold">
                        <div className="bg-yellow-400 rounded-3xl h-10 w-10 z-30 flex items-center justify-center absolute left-1 top-[4px] duration-500 transition-all">
                          <svg
                            width="20px"
                            height="20px"
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
                        <p className="translate-x-3 text-sm">View all</p>
                      </button>
                      <style jsx>{`
                        .relative:hover .absolute {
                          width: 140px;
                        }
                      `}</style>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* LOGO  */}
          <Link
            href="/"
            className="font-bold text-2xl  tracking-wide absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2"
          >
            <Image
              src={Logo}
              alt="contour-expedition-logo"
              className="w-[8rem]  object-fit object-center"
            ></Image>
          </Link>

          <div className="flex gap-5 text-[14px] font-medium items-center">
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
                className={` flex gap-1 justify-center items-center cursor-pointer hover:text-yellow-500`}
              >
                <span>Company</span>
                <Icon
                  icon="gridicons:dropdown"
                  className="w-[1.5rem] pb-1 pr-1 h-[1.5rem] object-cover object-center"
                />
              </div>
              <ul className="absolute hidden nav-down bg-yellow-50 rounded-3xl group-hover:block duration-[0.5] top-[100%] left-0  whitespace-nowrap   shadow p-5">
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

const activitiesPackage = [
  {
    name: "Canyoning",
    package: [Paragliding2, Paragliding4, Paragliding5],
  },
  {
    name: "Rafting",
    package: [Paragliding1, Paragliding3, Paragliding2],
  },
  {
    name: "Heritage Tour ",
    package: [Paragliding1, Paragliding3, Paragliding4, Paragliding5],
  },
  {
    name: "Paragliding",
    package: [Paragliding1],
  },
  {
    name: "Mountain Biking",
    package: [Paragliding3, Paragliding2, Paragliding4, Paragliding5],
  },
  {
    name: "Rock Climbing trip",
    package: [Paragliding3, Paragliding2, Paragliding4, Paragliding5],
  },
  {
    name: "Pilgrimage tour  ",
    package: [
      Paragliding1,
      Paragliding3,
      Paragliding2,
      Paragliding4,
      Paragliding5,
    ],
  },
  { name: "Jungle Safari  ", package: [Paragliding3, Paragliding5] },
  { name: "Ice climbing ", package: [Paragliding3] },
];

const trainingLink = [
  { name: "Basic Mountaineering course", href: "/training" },
  {
    name: "Preparation for 8000m peak climbing course",
    href: "/training",
  },
];

const trainingPackage = [
  {
    name: "Basic Mountaineering course",
    package: [BestSeller1],
  },
  {
    name: "Preparation for 8000m peak climbing course",
    package: [BestSeller1, BestSeller2, BestSeller3],
  },
];
const expeditionsLink = [
  { name: "Above 8k", href: "/expedition/8000m" },
  { name: "Above 7k", href: "/expedition/7000m" },
  { name: "Above 6k", href: "/expedition/6000m" },
  { name: "Above 5k", href: "/expedition/5000m" },
  ,
];

const expeditionsPackage = [
  { name: "Above 8k", package: [BestSeller1, BestSeller2, BestSeller3] },
  {
    name: "Above 7k",
    package: [BestSeller1, BestSeller2, BestSeller3, BestSeller5],
  },
  {
    name: "Above 6k",
    package: [BestSeller1, BestSeller2, BestSeller3, BestSeller5],
  },
  { name: "Above 5k", package: [BestSeller1, BestSeller2] },
  ,
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

const trekkingPackage = [
  {
    name: "Annapurna Region",
    package: [BestSeller1, BestSeller2, BestSeller3, BestSeller5],
  },
  { name: "Everest Region", package: [BestSeller1, BestSeller2, BestSeller3] },
  { name: "Langtang Region", package: [BestSeller1, BestSeller2, BestSeller3] },
  { name: "Manaslu Region", package: [BestSeller1, BestSeller2, BestSeller3] },
  {
    name: "Other treks  Region",
    package: [BestSeller1],
  },
  {
    name: "Off beaten treks (Camping)",
    package: [BestSeller2, BestSeller3],
  },
  {
    name: "Short trek",
    package: [BestSeller1, BestSeller2, BestSeller3],
  },
  {
    name: "High passes treks ",
    package: [BestSeller1, BestSeller3],
  },
];
