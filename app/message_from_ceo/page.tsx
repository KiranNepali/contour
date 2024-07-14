import MesssageFromCeo from "@/components/website/Homepage/MesssageFromCeo";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="w-11/12 mx-auto flex flex-col">
      <MesssageFromCeo />
    </div>
  );
}
