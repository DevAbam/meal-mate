"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import logoimg from "../public/assets/appLogo.png";
import Image from "next/image";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [showNav, setShowNav] = useState(false);

  const links = [
    { linkname: "Home", linkpath: "#home", sectionId: "home" },
    { linkname: "About", linkpath: "#about", sectionId: "about" },
    { linkname: "Services", linkpath: "#services", sectionId: "services" },
    { linkname: "Contact", linkpath: "#contact", sectionId: "contact" },
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Handle navigation click
  const handleNavClick = (link) => {
    setActiveLink(link.linkname);
    scrollToSection(link.sectionId);
    setShowNav(false); // Close mobile menu
  };

  // Update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => ({
        id: link.sectionId,
        element: document.getElementById(link.sectionId),
        name: link.linkname
      }));

      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveLink(section.name);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full text-black pt-5 sticky top-0 bg-white z-40 shadow-sm">
      <div className="w-[80%] mx-auto flex justify-between items-center h-16">
        <div className="flex items-center gap-4 sm:gap-8">
          <div className="p-3 w-20 sm:h-16 sm:w-16 grid place-content-center rounded-full bg-[#e8505b]">
            <Image src={logoimg} alt="logo" height={50} width={50} />
          </div>
          <p className="text-2xl sm:text-2xl font-semibold text-[#e8505b]">
            Meal <span className="text-black">Mate</span>
          </p>
        </div>

        {/* Mobile menu toggle */}
        <div className="sm:hidden">
          {showNav ? (
            <AiOutlineClose
              size={24}
              color="#e8505b"
              onClick={() => setShowNav(!showNav)}
              className="cursor-pointer"
            />
          ) : (
            <AiOutlineMenu
              size={24}
              color="#e8505b"
              onClick={() => setShowNav(!showNav)}
              className="cursor-pointer"
            />
          )}
        </div>

        {/* Mobile navigation menu */}
        <div
          className={
            showNav
              ? "absolute top-20 right-4 bg-white shadow-lg rounded-xl p-4 z-50 min-w-[200px] border border-gray-100"
              : "hidden"
          }
        >
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <button
                key={link.linkname}
                onClick={() => handleNavClick(link)}
                className={
                  link.linkname === activeLink
                    ? "text-[#e8505b] font-semibold text-left py-2 px-3 rounded-lg bg-orange-50"
                    : "text-gray-700 font-medium text-left py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                }
              >
                {link.linkname}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop navigation */}
        <div className="hidden gap-8 sm:flex items-center justify-between">
          {links.map((link) => (
            <button
              key={link.linkname}
              onClick={() => handleNavClick(link)}
              className={
                link.linkname === activeLink
                  ? "text-[#e8505b] font-semibold relative transition-colors duration-300"
                  : "text-gray-700 font-medium hover:text-[#e8505b] transition-colors duration-300"
              }
            >
              {link.linkname}
              {link.linkname === activeLink && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-[#e8505b] rounded-full"></span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;