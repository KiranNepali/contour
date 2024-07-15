import BlogDetailMain from "@/components/website/BlogDetail/BlogDetailMain";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <main className=" z-[20] relative mb-[60vh] bg-yellow-50">
      <BlogDetailMain />
    </main>
  );
}
