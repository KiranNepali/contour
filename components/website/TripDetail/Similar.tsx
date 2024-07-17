import Image from "next/image";
import React from "react";
import BestSeller1 from "@/public/BestSellers/Best1.jpg";
import BestSeller2 from "@/public/BestSellers/best2.webp";
import BestSeller3 from "@/public/BestSellers/best3.jpg";
import BestSeller4 from "@/public/BestSellers/best4.jpg";
import BestSeller5 from "@/public/BestSellers/best2.jpg";
import BestSeller6 from "@/public/BestSellers/best6.jpg";
import BestSeller7 from "@/public/BestSellers/best7.jpg";
type Props = {};

function Similar({ activity }: any) {
  return (
    <>
      <div className="w-11/12  pb-[5rem] mx-auto">
        {/* title  */}
        <div className="w-auto flex-col flex gap-2 justify-center items-center">
          <h1 className="text-3xl uppercase text-secondary-500 text-center  font-bold">
            Similar package
          </h1>
          <hr className="bg-yellow-500 h-[3px] overflow-hidden w-[10%] rounded-full" />
        </div>
        {/* NAVIGATION  activities */}
        <div className="w-full mt-[3rem]">
          <div className="w-full overflow-x-scroll md:overflow-x-visible flex md:grid gap-3 grid-cols-4 md:place-content-center place-items-center">
            {SimilarData.map((item) => (
              <div
                key={item.id}
                className="min-w-[80%] rounded-3xl md:w-full cursor-pointer group relative overflow-hidden flex justify-center items-center h-[30vh]"
              >
                <div className="absolute bottom-0 left-0 w-full h-[40%]   bg-gradient-to-t from-black to-transparent   z-10 "></div>
                <div className="absolute top-0 left-0 w-full h-full group-hover:opacity-[0.7] bg-zinc-950 opacity-[0.2] z-10 duration-300"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                  <Image
                    width={1000}
                    height={1000}
                    src={item.src}
                    alt={item.name}
                    className="w-full h-full object-cover object-center"
                  ></Image>
                </div>
                {/* name  */}
                <div className="w-full relative p-4 z-20 font-medium text-[15px ]  text-zinc-50 h-full flex justify-start items-end">
                  {item.name}
                </div>
                {/* view  */}
                <div className="absolute font-semibold text-sm top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30 opacity-0 group-hover:opacity-[1] text-white group-hover:top-[50%] duration-300 uppercase">
                  VIEW
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Similar;

const SimilarData = [
  {
    id: 1,
    name: "Annapurna",
    src: BestSeller1,
  },
  {
    id: 2,
    name: "Everest",
    src: BestSeller2,
  },
  {
    id: 3,
    name: "Langtang",
    src: BestSeller3,
  },
  {
    id: 4,
    name: "Manaslu",
    src: BestSeller4,
  },
];
