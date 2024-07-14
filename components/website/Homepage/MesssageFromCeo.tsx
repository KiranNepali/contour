import Image from "next/image";
import React from "react";
import Ceo from "@/public/team/CEO.jpg";

type Props = {};

export default function MesssageFromCeo({}: Props) {
  return (
    <div className="w-8/12 mx-auto py-[5rem] flex flex-col gap-3">
      <div className="flex w-full py-10 justify-center items-center gap-5">
        <Image
          src={Ceo}
          alt="ceo-image"
          className="w-[30%] h-[50vh] object-cover object-center"
        ></Image>
        <h1
          className="text-3xl
      font-semibold uppercase"
        >
          Message from Ceo
        </h1>
      </div>

      <p className="text-zinc-700 leading-relaxed">
        {` Born in the dense city of Kathmandu, even I didn’t know well about the
        Himalayas. Before starting up the Expedition company I had a special
        meet with IFMGA guide Mr. Prem Gurung from Lamjung. Well, this key
        “Meetup” is the turning point to set my career as a co-founder in
        “Contour Expeditions”. The idea for the name of the company came after
        obtaining theoretical knowledge about geographical map reading and
        compass navigation from Mr. Prem Bahadur Gurung. I came to know about
        contour lines in topography maps and their importance while travelling,
        trekking, and expeditions. The importance of contour lines is essential
        for every traveller and backpacker. This is the very reason I have given
        the name of the company as “Contour Expedition”. My entire team was
        excited about the company’s name and approved it. Our responsibility
        regarding the adventure is to educate about the Himalayas and maximise
        the success rate. Following the mountain rules, we provide qualified
        trekking, climbing, and expedition guides which are very essential to
        deal with the adventure.`}
      </p>

      {/* banner  */}
      <div className="w-full py-4 bg-black h-[20vh]">hi</div>

      <p className="text-zinc-700 leading-relaxed">
        {`
        The tagline of our company itself has a meaningful statement. We care
        about our clients first and safety is always our high priority. So,
        until and unless the climbers are physically and mentally prepared we do
        not go further for any kind of adventure. At Contour Expedition, we
        believe that adventure is not just about the destinations but about the
        journeys we take and memories we create. Our team of experienced guides
        and experts is dedicated to ensuring that every expedition is safe,
        enjoyable and enlightening. Whether you’re scaling remote peaks,
        navigating the vast terrain on the foothills of Himalayas, or exploring
        hidden cultures, our goal is to help you achieve your adventure dream in
        the most responsive way. We are proud to offer a diverse range of
        expeditions to some of the most incredible and untouched corners of the
        earth. From customised private tours to group expeditions, there’s
        something for every type of adventurer in our portfolio. We are also
        continuously innovating and expanding our offerings to bring you new and
        unique experiences. I invite you to join us on an adventure that will
        challenge, inspire and change you. Explore our website to learn more
        about our expeditions, our commitment to sustainability, and how you can
        become part of our story. Thank you for choosing Contour Expedition as
        your partner in exploration. We look forward to embarking on an
        unforgettable journey with you.`}
      </p>
    </div>
  );
}
