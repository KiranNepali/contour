"use client";
import CertificatesMain from "@/components/website/Certificate/Certificates";
import React, { useEffect } from "react";

type Props = {};

function Page({}: Props) {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <main className=" z-[20]  bg-[#FFFBEB]">
      <CertificatesMain />
    </main>
  );
}

export default Page;
