import React from "react";
import chooseusimg from "../public/assets/sekhero-removebg-preview.png";
import Image from "next/image";
const Chooseus = () => {
  const whyNeeds = [
    {
      icon: "icon",
      heading: "Convenient and Reliable",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis et expedita nemo soluta, quis eos?",
    },
    {
      icon: "icon",
      heading: "Variety of Options",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis et expedita nemo soluta, quis eos?",
    },
    {
      icon: "icon",
      heading: "Eat Burger",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis et expedita nemo soluta, quis eos?",
    },
  ];
  return (
    <div className="  bg-orange-400/70 -mt-14 pt-16 pb-10">
      <div className=" w-[80%] pb-10 mb-10 mx-auto">
        <div className="  flex items-center gap-10 justify-between h-96 ">
          <div className="   h-full grid place-content-center flex-1">
            <Image
              src={chooseusimg}
              alt="chooseus"
              className=" h-full w-full"
            />
          </div>
          <div className=" h-full flex-1">
            <div>
              <h2 className=" text-4xl font-bold">
                Why People <span className="text-[#e8505b]">Choose</span> Us?
              </h2>
              <div className=" flex flex-col">
                {whyNeeds.map((need) => (
                  <div
                    key={need.heading}
                    className="  shadow-sm flex gap-10 items-center justify-between"
                  >
                    <div className=" bg-white p-5 h-14 w-14 grid place-content-center rounded-full">
                      {need.icon}
                    </div>
                    <div className="flex flex-col mb-5 mt-5">
                      <p className=" font-semibold text-xl">{need.heading}</p>
                      <p className=" text-black/50">{need.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chooseus;
