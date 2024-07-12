import Image from "next/image";
import React from "react";
import Service1 from "@/public/services/Vehicles.png";
import Service2 from "@/public/services/pure-natural.png";
import Service3 from "@/public/services/people-safe.png";
import Service4 from "@/public/services/effects.png";
import ContourMountain from "@/public/conout-mountain.jpg";
type Props = {};

export default function ServiceHome({}: Props) {
  return (
    <div className="w-full h-screen flex  justify-center items-center">
      <div className="w-[60vw] h-[80vh] relative">
        <Image
          width={1000}
          height={1000}
          src="https://images.unsplash.com/photo-1517934274943-d1749ff2d7a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="expedition-image"
          className="w-full rounded-3xl h-full mx-auto object-cover object-center"
        />
        <div className="w-[30vw] h-[80vh] px-10 rounded-3xl  shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] absolute flex flex-col justify-start items-start gap-10 top-[5%] right-[-5%] bg-white  p-5">
          {/* <Image
            width={1000}
            height={1000}
            src={ContourMountain}
            alt="expedition-image"
            className="rounded-3xl absolute w-[30vw] h-[80vh] opacity-[0.3]  object-cover object-center"
          /> */}
          {/* services  */}
          <div className="flex flex-col justify-start h-full items-start relative mx-auto  gap-4">
            <div className="z-10  relative  text-white   mx-auto flex text-end  justify-center items-end flex-col gap-2">
              <h1 className="text-3xl uppercase text-secondary-500  font-bold">
                Why Choose Us
              </h1>
              <p className="text-secondary-300">
                From the arrival to departure we are keen to organize your
                expeditions by encompassing the entire protocol set by the
                experts in “Contour Expeditions Pvt. Ltd.”
              </p>
              {/* <button>View more</button> */}
            </div>
            {ServicesData.map((item, index) => (
              <div
                key={index}
                className="w-full flex items-center border-b py-2  justify-start gap-3  text-center"
              >
                <div className="w-[3.5rem] p-4 h-[3.5rem] bg-primary-default rounded-full">
                  <Image
                    src={item.icon}
                    alt={`${item.name}-logo`}
                    className="w-full h-full object-cover object-center"
                  ></Image>
                </div>
                <span className="font-semibold text-sm text-secondary-400">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
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
