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
    <main className=" z-[20] relative mb-[60vh] bg-yellow-50">
      <AllExpMain distance={distance} />
    </main>
  );
}

export default Page;
