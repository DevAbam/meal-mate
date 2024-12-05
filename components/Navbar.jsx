"use client";
import Link from "next/link";
import React, { useState } from "react";
import logoimg from "../public/assets/sekhero-removebg-preview.png";
import Image from "next/image";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const links = [
    { linkname: "Home", linkpath: "/", isActive: true },
    { linkname: "About", linkpath: "/", isActive: true },
    { linkname: "Services", linkpath: "/", isActive: true },
    { linkname: "Contact", linkpath: "/", isActive: true },
  ];
  //  bg-[#e8505b]
  return (
    <div className="  w-full text-black pt-5 ">
      <div className="w-[80%] mx-auto flex justify-between items-center h-16">
        <div className=" flex items-center gap-8">
          <div className=" h-16 w-16 grid place-content-center rounded-full bg-[#e8505b]">
            <Image src={logoimg} alt="logo" height={50} width={50} />
          </div>
          <p className=" text-2xl font-semibold text-[#e8505b]">
            Meal <span className="text-black">Mate</span>
          </p>
        </div>
        <div className=" gap-5 flex items-center justify-between">
          {links.map((link) => (
            <Link
              onClick={() => {
                setActiveLink(link.linkname);
              }}
              className={
                link.linkname === activeLink
                  ? "text-orange-400 font-medium"
                  : "text-black font-medium"
              }
              href={link.linkpath}
              key={link.linkname}
            >
              {link.linkname}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
