"use client";
import OtherActivitiesMain from "@/components/website/OtherActivities/OtherActivitiesMain";
import React from "react";

type Props = {};

function page({ params }: any) {
  const { activity } = params;
  return (
    <main className=" z-[20] relative mb-[60vh] bg-yellow-50">
      <OtherActivitiesMain activity={activity} />
    </main>
  );
}

export default page;
