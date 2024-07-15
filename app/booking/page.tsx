"use client";
import BookForm from "@/components/website/BookForm/BookForm";
import React, { useEffect } from "react";

type Props = {};

export default function Page({}: Props) {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  return (
    <main className=" z-[20] relative mb-[60vh] bg-yellow-50">
      <BookForm />
    </main>
  );
}
