import React from "react";
import chooseusimg from "../public/assets/SplashScreen.png";
import Image from "next/image";

const OurAgency = () => {
  return (
    <div className="bg-white pb-12">
      <div className="w-[80%] gap-10 flex flex-col sm:flex sm:flex-row items-center justify-between mx-auto">
        {/* Text Content */}
        <div className="flex-1">
          <div className="flex flex-col gap-5">
            <h2 className="mt-10 sm:mt-0 text-center sm:text-left font-semibold text-5xl">
              Our <span className="text-[#e8505b]">Agency</span>
            </h2>
            <p className="text-justify break-words hyphens-auto sm:text-left sm:w-[90%] text-gray-700 leading-relaxed">
              At <span className="font-semibold text-[#e8505b]">MealMate</span>, 
              we are passionate about transforming the way people enjoy food in Ghana. 
              Since our launch, our mission has been simple: connect hungry customers 
              with their favorite restaurants—quickly, reliably, and affordably.  
              <br /><br />
              With a growing network of trusted partner restaurants, we ensure that 
              customers can explore diverse cuisines, from traditional Ghanaian dishes 
              to international favorites. Our technology-driven platform makes ordering 
              seamless, with features like real-time tracking, flexible payment options, 
              and personalized recommendations.  
              <br /><br />
              We are not just a delivery service; we are a community built on quality food, 
              convenience, and customer trust. Every order is a step towards redefining 
              food delivery across Accra and beyond.
            </p>
            <div className="h-12 w-[45%] sm:w-[30%] p-3 text-white bg-[#e8505b] grid place-content-center rounded-lg font-semibold cursor-pointer hover:bg-[#d23f4a] transition">
              Read more
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1">
          <Image alt="our agency" src={chooseusimg} className="h-full w-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default OurAgency;
