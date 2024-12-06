"use client";
import Link from "next/link";
import React, { useState } from "react";
import logoimg from "../public/assets/sekhero-removebg-preview.png";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [showNav, setShowNav] = useState(false);
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
        <div className="  flex items-center gap-4 sm:gap-8">
          <div className="p-3 w-20 sm:h-16 sm:w-16 grid place-content-center rounded-full bg-[#e8505b]">
            <Image src={logoimg} alt="logo" height={50} width={50} />
          </div>
          <p className="text-2xl sm:text-2xl font-semibold text-[#e8505b]">
            Meal <span className="text-black">Mate</span>
          </p>
        </div>
        {/* on mobile */}
        <div className=" sm:hidden">
          {showNav ? (
            <AiOutlineClose
              size={24}
              color="#e8505b"
              onClick={() => {
                setShowNav(!showNav);
              }}
            />
          ) : (
            <AiOutlineMenu
              size={24}
              color="#e8505b"
              onClick={() => {
                setShowNav(!showNav);
              }}
            />
          )}
        </div>
        {/* main mobile nav */}
        <div
          className={
            showNav
              ? "h-20 text-white rounded-xl px-4 grid place-content-center absolute top-20 right-12 z-50 bg-red-300"
              : "hidden"
          }
        >
          Meal Mate is under development
        </div>
        {/* after mobile */}
        <div className=" hidden  gap-5 sm:flex items-center justify-between">
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
