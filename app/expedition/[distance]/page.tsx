"use client";
import AllExpMain from "@/components/website/AllExpedition/AllExpMain";
import React, { useEffect } from "react";

type Props = {};

function Page({ params }: any) {
  const { distance } = params;
  useEffect(() => {
    scrollTo(0, 0);
  },[]);
  return (
    <main className=" z-[20]  bg-[#FFFBEB]">
      <AllExpMain distance={distance} />
    </main>
  );
}

export default Page;
