import OurTeamMain from "@/components/website/OurTeam/OurTeamMain";
import React from "react";

type Props = {};

function page({}: Props) {
  return (
    <main className=" z-[20] relative mb-[60vh] bg-yellow-50">
      <OurTeamMain />
    </main>
  );
}

export default page;
