import Link from "next/link";
import React from "react";
import FastDelivery from "../public/assets/fastdelivery.jpg";
import cash from "../public/assets/cashinhands.jpg";
import checkout from "../public/assets/checkout.jpg";
import convinient from "../public/assets/convinient.jpg";
import Image from "next/image";
const HeroCardRow = () => {
  const cardData = [
    {
      icon: convinient,
      heading: "Quality Food",
      desc: "Lorem, ipsum dolor sit amet consectetur isit dolor magasssan adipisicing elit. ",
    },
    {
      icon: FastDelivery,
      heading: "Fast Delivery",
      desc: "Lorem, ipsum dolor sit amet consectetur isit dolor magasssan adipisicing elit. ",
    },
    {
      icon: cash,
      heading: "Cash by Hand",
      desc: "Lorem, ipsum dolor sit amet consectetur isit dolor magasssan adipisicing elit. ",
    },
    {
      icon: checkout,
      heading: "Check out",
      desc: "Lorem, ipsum dolor sit amet consectetur isit dolor magasssan adipisicing elit. ",
    },
  ];
  return (
    <div className=" py-16 mb-14 w-full">
      <div className=" w-[80%] flex  justify-between mx-auto ">
        {cardData.map((card) => (
          <div
            key={card.heading}
            className=" cursor-pointer hover:scale-105 ease-linear h-80 rounded-lg w-64 p-4 shadow-lg flex flex-col items-center justify-center gap-5"
          >
            <div className=" h-24 w-24  rounded-full grid place-content-center">
              <Image height={80} width={80} src={card.icon} alt="img" />
            </div>
            <p className=" text-center text-2xl font-semibold">
              {card.heading}
            </p>
            <p className=" text-center text-md text-black/60">{card.desc}</p>
            <Link href={"/"}>learn more</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCardRow;
