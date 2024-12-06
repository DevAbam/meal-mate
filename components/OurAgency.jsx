import React from "react";
import chooseusimg from "../public/assets/sekhero-removebg-preview.png";
import Image from "next/image";
import Link from "next/link";

const OurAgency = () => {
  return (
    <div className=" bg-white pb-12">
      <div className="w-[80%]  gap-10 flex flex-col sm:flex sm:flex-row items-center justify-between mx-auto">
        <div className="flex-1">
          <div className=" flex flex-col  gap-5  ">
            <h2 className="mt-10 sm:mt-0 text-center sm:text-left font-semibold text-5xl">
              Our <span className="text-[#e8505b]">Agency</span>
            </h2>
            <p className=" text-justify break-words hyphens-auto sm:text-left sm:w-[90%]  ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
              cumque adipisci architecto ipsam, sequi vel nulla deleniti
              repellendus exercitationem dolorem maxime ipsa, obcaecati id
              dolores doloribus impedit ratione fugiat! Dolores? Lorem ipsum
              dolor sit amet, consectetur adipisicing elit. Placeat cumque
              adipisci architecto ipsam, sequi vel nulla deleniti repellendus
              exercitationem dolorem maxime ipsa, obcaecati id dolores doloribus
              impedit ratione fugiat! Dolores? adipisci architecto ipsam, sequi
              vel nulla deleniti repellendus exercitationem dolorem maxime ipsa,
              obcaecati id dolores doloribus impedit ratione fugiat! Dolores?
            </p>
            <div className="  h-12 w-[45%] sm:w-[30%] p-3 text-white bg-[#e8505b] grid place-content-center rounded-lg">
              Read more
            </div>
          </div>
        </div>
        <div className=" flex-1">
          <Image alt="ouragency" src={chooseusimg} className=" h-full w-full" />
        </div>
      </div>
    </div>
  );
};

export default OurAgency;
