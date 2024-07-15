import Image from "next/image";
import React from "react";
import OtherActivitiesData from "@/data/OtherActivitiesData";

type Props = {};

export default function OtherActivitiesHero({ activity }: any) {
  // console.log(OtherActivitiesData[0].HeroImg);
  if (!activity) {
    // Handle case where activity data is not found
    return <div>Activity not found</div>;
  }
  const data: any = OtherActivitiesData.find((obj) => obj.route == activity);
  console.log(data);
  const { HeroImg, name } = data;

  return (
    <>
      <div className="w-full h-[83vh] mt-[4rem] bg-zinc-200 relative  flex justify-center items-center">
        <Image
          width={HeroImg.width}
          height={HeroImg.height}
          src={HeroImg.src}
          alt={`${name} image`}
          className="absolute top-0 left-0 w-full h-full object-cover object-center"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.5]"></div>
        <h1 className="text-3xl md:text-6xl uppercase relative tracking-wide mt-10 title font-bold text-secondary-50">
          {name}
        </h1>
      </div>
    </>
  );
}
