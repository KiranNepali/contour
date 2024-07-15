"use client";
import CertificatesMain from "@/components/website/Certificate/Certificates";
import React, { useEffect } from "react";

type Props = {};

function Page({}: Props) {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <main className=" z-[20] relative mb-[60vh] bg-yellow-50">
      <CertificatesMain />
    </main>
  );
}

export default Page;
