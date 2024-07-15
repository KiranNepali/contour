"use client";
import AboutUsMain from "@/components/website/AboutUs/AboutUsMain";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <>
      <main className=" z-[20] relative mb-[60vh] bg-yellow-50">
        <AboutUsMain />
      </main>
    </>
  );
}
