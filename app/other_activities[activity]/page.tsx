"use client";
import OtherActivitiesMain from "@/components/website/OtherActivities/OtherActivitiesMain";
import React from "react";

type Props = {};

function page({ params }: any) {
  const { activity } = params;
  return (
    <main className=" z-[20]  bg-[#FFFBEB]">
      <OtherActivitiesMain activity={activity} />
    </main>
  );
}

export default page;
