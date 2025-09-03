import React from "react";
import chooseusimg from "../public/assets/Courier.png";
import Image from "next/image";
import Value from "../public/assets/value.png";
import Reliable from "../public/assets/reliable.png";
import Variety from "../public/assets/variety.png";

const Chooseus = () => {
  const whyNeeds = [
    {
      icon: (
        <Image
          src={Value}
          alt="Convenient and Reliable"
          width={28}
          height={28}
        />
      ),
      heading: "Convenient and Reliable",
      desc: "Order in seconds and track in real time. We deliver fast and on schedule—breakfast, lunch, dinner, or late-night cravings.",
    },
    {
      icon: (
        <Image
          src={Variety}
          alt="Variety of Options"
          width={28}
          height={28}
        />
      ),
      heading: "Variety of Options",
      desc: "From local favorites like waakye, jollof, and kelewele to burgers, pizza, and shawarma—discover hundreds of menus in one place.",
    },
    {
      icon: (
        <Image
          src={Reliable}
          alt="Great Value & Offers"
          width={28}
          height={28}
        />
      ),
      heading: "Great Value & Offers",
      desc: "Transparent pricing with no surprises, daily promos, and rewards on every order. Save more when you bundle meals or hit free-delivery thresholds.",
    },
  ];

  return (
    <div className="bg-white -mt-14 pt-16 pb-10 ">
      <div className="w-[80%] pb-11 mb-10 mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-10 justify-between sm:h-96">
          <div className="h-full grid place-content-center flex-1">
            <Image
              src={chooseusimg}
              alt="chooseus"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="h-full flex-1">
            <div>
              <h2 className="text-center sm:text-start text-4xl font-bold">
                Why People <span className="text-[#e8505b]">Choose</span> Us?
              </h2>
              <div className="flex flex-col">
                {whyNeeds.map((need) => (
                  <div
                    key={need.heading}
                    className="shadow-sm flex gap-6 items-center"
                  >
                    <div className="bg-white p-2 h-10 w-10 flex items-center justify-center rounded-full">
                      {need.icon}
                    </div>
                    <div className="flex flex-col mb-5 mt-5">
                      <p className="font-semibold text-xl">{need.heading}</p>
                      <p className="text-black/50">{need.desc}</p>
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
