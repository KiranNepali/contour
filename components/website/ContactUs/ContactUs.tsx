import React from "react";
import Banner from "@/public/banner.webp";
import Logo from "@/public/logo/contour/ContourLogo.jpg";
import Image from "next/image";
import { Icon } from "@iconify/react";

type Props = {};

export default function ContactUs({}: Props) {
  return (
    <div className="w-full  flex-col  gap-3 flex justify-center pt-[4rem] items-center">
      <form
        action=""
        className="w-7/12 mx-auto p-3 h-[85vh] gap-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] rounded-3xl flex overflow-hidden"
      >
        <div className="w-[35%] rounded-3xl h-full relative overflow-hidden">
          <Image
            src={Banner}
            alt=""
            className="w-full h-full object-cover object-right brightness-75"
          ></Image>

          <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black to-transparent z-10"></div>

          <div className="absolute z-30 text-white w-[3.5rem] h-[3.5rem]   top-5 left-3 gap-1 flex flex-col">
            {/* socio icon  */}
            <Image
              src={Logo}
              alt="contour-logo"
              className="w-full h-full  rounded-3xl"
            ></Image>
          </div>

          <div className="absolute z-30 text-white bottom-5 left-3 gap-1 flex flex-col">
            {/* socio icon  */}
            <div className="flex  flex-col  text-sm  gap-3">
              <div className="flex gap-2 items-center">
                <div className="w-[1.5rem] h-[1.5rem]">
                  <Icon
                    icon="mdi:location"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <span className="text-[13px]">
                  Uttar dhoka,Lazimpat <br />
                  Kathmandu,Nepal
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[1.5rem] h-[1.5rem]">
                  <Icon
                    icon="mdi:phone"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <span className="text-[13px]">
                  (+977) 9856-008848 <br /> (+977) 9856-046041
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-[1.5rem] h-[1.5rem]">
                  <Icon
                    icon="mdi:mail"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <span className="text-[13px]">
                  inquiry@contourexpeditions.com <br />{" "}
                  book@contourexpeditions.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[65%]  mx-auto p-16 flex justify-center rounded-3xl bg-yellow-300  flex-col gap-5">
          <div className="flex flex-col gap-1">
            <h2 className="uppercase font-semibold">Get in touch</h2>
            <p className="text-sm text-zinc-700 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              officia.
            </p>
          </div>

          <div className="grid gap-2 gap-y-3 grid-cols-2">
            {/* name  */}
            <div className="flex  gap-1  flex-col  overflow-hidden   w-full">
              <span className="text-[13px] font-medium text-zinc-700">
                First name
              </span>
              <input
                type="text"
                placeholder="First name"
                className="outline-none rounded-3xl w-full py-3 px-5 text-sm placeholder:text-sm bg-gray-100 text-zinc-700"
              />
            </div>
            {/* last name  */}
            <div className="flex  gap-1  flex-col  overflow-hidden   w-full">
              <span className="text-[13px] font-medium text-zinc-700">
                Last name
              </span>
              <input
                type="text"
                placeholder="Last name"
                className="outline-none rounded-3xl w-full py-3 px-5 text-sm placeholder:text-sm bg-gray-100 text-zinc-700"
              />
            </div>

            {/* email  */}
            <div className="flex  gap-1 col-span-2  flex-col  overflow-hidden   w-full">
              <span className="text-[13px] font-medium text-zinc-700">
                Email
              </span>
              <input
                type="email"
                placeholder="Email"
                className="outline-none rounded-3xl w-full py-3 px-5 text-sm placeholder:text-sm bg-gray-100 text-zinc-700"
              />
            </div>

            {/* phone number  */}
            <div className="flex  gap-1 col-span-2  flex-col  overflow-hidden   w-full">
              <span className="text-[13px] font-medium text-zinc-700">
                Phone number
              </span>
              <input
                type="number"
                placeholder="Phone no."
                className="outline-none rounded-3xl w-full py-3 px-5 text-sm placeholder:text-sm bg-gray-100 text-zinc-700"
              />
            </div>

            {/* message  */}
            <div className="flex  gap-1 col-span-2  flex-col  overflow-hidden   w-full">
              <span className="text-[13px] font-medium text-zinc-700">
                Message
              </span>
              <textarea
                name=""
                id=""
                placeholder="Write something here"
                className="w-full h-full outline-none rounded-3xl p-3 text-sm placeholder:text-sm bg-gray-100"
              ></textarea>
            </div>
            <div className="flex rounded-3xl col-span-2 overflow-hidden flex-col w-full"></div>

            {/* BUTTON  */}
            <button
              type="button"
              className="bg-white text-center w-48 rounded-3xl h-14 relative font-sans text-black text-xl font-semibold group"
            >
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
              <p className="translate-x-2 text-sm">Send</p>
            </button>
          </div>
        </div>
      </form>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.9467638926862!2d85.31799757607914!3d27.718929924979417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a5032a9243%3A0xb8683e0e1a86fbc6!2sContour%20Expeditions%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1721215943008!5m2!1sen!2snp"
        className="w-full h-[60vh] object-cover object-center pb-[3rem]"
        // style="border:0;"
        // allowfullscreen=""
        loading="lazy"
        // referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
