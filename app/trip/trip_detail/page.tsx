import TripDetailMain from "@/components/website/TripDetail/TripDetail";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <main className=" z-[20]  bg-yellow-50">
      <TripDetailMain />
    </main>
  );
}
