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
    desc: "Freshly cooked meals from top-rated restaurants and local chefs. Every dish is made with the highest standards for taste and hygiene.",
  },
  {
    icon: FastDelivery,
    heading: "Fast Delivery",
    desc: "Get your food delivered hot and on time. Our riders use smart routes so your meals reach you in 30 minutes or less.",
  },
  {
    icon: cash,
    heading: "Cash on Delivery",
    desc: "Pay however you like—secure mobile money, card payments, or simply cash by hand when your food arrives.",
  },
  {
    icon: checkout,
    heading: "Seamless Checkout",
    desc: "Order in seconds with saved addresses, instant reorders, and easy-to-use checkout built for your convenience.",
  },
  ];
  return (
    <div className=" py-16 mb-14 w-full">
      <div className=" w-[80%] flex flex-col sm:flex sm:flex-row justify-between items-center mx-auto ">
        {cardData.map((card) => (
          <div
            key={card.heading}
            className="  mb-2 sm:mb-0  cursor-pointer hover:scale-105 ease-linear h-80 w-[90%] sm:w-64 rounded-lg  p-4 shadow-lg flex flex-col items-center justify-around"
          >
            <div className=" h-24 w-24 pt-3  rounded-full grid place-content-center">
              <Image height={80} width={80} src={card.icon} alt="img" />
            </div>
            <p className=" text-center text-2xl font-semibold">
              {card.heading}
            </p>
            <p className=" text-center text-md text-black/60">{card.desc}</p>
            <Link href={"/"} className=" text-[#e8505b]">
              learn more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCardRow;