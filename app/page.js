"use client";
import dynamic from "next/dynamic";
import HeroCardRow from "@/components/HeroCardRow";
import Chooseus from "@/components/Chooseus";
import OurAgency from "@/components/OurAgency";
import Testimonial from "@/components/Testimonial";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import animationdata from "../public/assets/Animation - 1731325795453.json";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col sm:flex sm:flex-row items-center gap-4 mb-10 mt-12 justify-between w-[80%] mx-auto">
        {/* left */}
        <div className="order-2 sm:order-1 h-full w-full pt-8 grid place-content-center">
          <div className="flex flex-col items-start justify-center gap-8 sm:gap-10">
            <p className="text-5xl text-center sm:text-left  sm:text-7xl font-medium font-serif text-black/60 tracking-tighter  sm:w-[90%] -leading-[0.5]">
              We Create{" "}
              <span className="bg-gradient-to-r from-[#e8505b] to-orange-300 text-transparent bg-clip-text">
                Solution
              </span>{" "}
              For Your Business
            </p>
            <p className="sm:w-[85%]  text-xl sm:text-base text-center  sm:text-left font-sans text-black">
              Our team keeps a keen eye on emerging trends and technologies to
              ensure your marketing campaigns remain cutting edge !
            </p>
            <div className="h-12 p-3 text-white bg-[#e8505b] grid place-content-center rounded-lg">
              Terms & Conditions
            </div>
          </div>
        </div>
        {/* right */}
        <div className="order-1 sm:order-2 h-full w-full rounded-full grid place-content-center">
          <div>
            <Lottie
              animationData={animationdata}
              loop={true}
              className="h-full w-full rounded-full"
            />
          </div>
        </div>
      </div>
      {/* cards */}
      <HeroCardRow />
      <Chooseus />
      <OurAgency />
      <Testimonial />
    </div>
  );
}
