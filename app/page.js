"use client";
import dynamic from "next/dynamic";
import HeroCardRow from "@/components/HeroCardRow";
import Chooseus from "@/components/Chooseus";
import OurAgency from "@/components/OurAgency";
import Testimonial from "@/components/Testimonial";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

import animationdata from "../public/assets/Animation - 1731325795453.json";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-20 pb-16">
        <div className="flex flex-col sm:flex sm:flex-row items-center gap-4 mb-10 mt-12 justify-between w-[80%] mx-auto">
          {/* Left Content */}
          <div className="order-2 sm:order-1 h-full w-full pt-8 grid place-content-center">
            <div className="flex flex-col items-start justify-center gap-8 sm:gap-10">
              <h1 className="text-5xl text-center sm:text-left sm:text-7xl font-medium font-serif text-black/60 tracking-tighter sm:w-[90%] leading-tight">
                We Create{" "}
                <span className="bg-gradient-to-r from-[#e8505b] to-orange-300 text-transparent bg-clip-text">
                  Solution
                </span>{" "}
                For Your Business
              </h1>
              <p className="sm:w-[85%] text-xl sm:text-base text-center sm:text-left font-sans text-black/70 leading-relaxed">
                Our team keeps a keen eye on emerging trends and technologies to
                ensure your marketing campaigns remain cutting edge!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start w-full sm:w-auto">
                <button className="h-12 px-6 text-white bg-[#e8505b] hover:bg-[#d63447] transition-colors duration-300 grid place-content-center rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105">
                  Get Started
                </button>
                <button className="h-12 px-6 text-[#e8505b] bg-white border-2 border-[#e8505b] hover:bg-[#e8505b] hover:text-white transition-all duration-300 grid place-content-center rounded-lg font-semibold">
                  View Demo
                </button>
              </div>
              
              {/* App Download Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-start w-full sm:w-auto mt-4">
                <p className="text-sm font-medium text-black/60 mb-2 sm:mb-0 sm:mr-4">
                  Download Our App:
                </p>
                
                {/* iOS App Store Button */}
                <button className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-4 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[160px]">
                  <div className="flex flex-col items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mb-1">
                      <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-xs text-gray-300">Download on the</span>
                    <span className="text-sm font-semibold">App Store</span>
                  </div>
                </button>

                {/* Google Play Button */}
                <button className="flex items-center gap-3 bg-black hover:bg-gray-800 text-white px-4 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[160px]">
                  <div className="flex flex-col items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="mb-1">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                  </div>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-xs text-gray-300">Get it on</span>
                    <span className="text-sm font-semibold">Google Play</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          
          {/* Right Animation */}
          <div className="order-1 sm:order-2 h-full w-full rounded-full grid place-content-center">
            <div className="w-full max-w-lg">
              <Lottie
                animationData={animationdata}
                loop={true}
                className="h-full w-full rounded-full drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
        
        {/* Hero Cards */}
        <div className="mt-16">
          <HeroCardRow />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="w-[90%] sm:w-[80%] mx-auto mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-[#e8505b]">MealMate</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Revolutionizing the food delivery industry with cutting-edge technology 
              and exceptional service for restaurants and customers alike.
            </p>
          </div>
        </div>
        <Chooseus />
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="w-[90%] sm:w-[80%] mx-auto mb-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#e8505b]">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions to help your restaurant business thrive in the digital world.
            </p>
          </div>
        </div>
        <OurAgency />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <Testimonial />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <ContactUs />
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="w-[90%] sm:w-[80%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-[#e8505b] rounded-full grid place-content-center">
                  <span className="text-white font-bold text-xl">MM</span>
                </div>
                <h3 className="text-2xl font-bold">
                  Meal<span className="text-[#e8505b]">Mate</span>
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                Transforming the way restaurants connect with customers through 
                innovative technology and exceptional service delivery.
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-gray-700 hover:bg-[#e8505b] rounded-full grid place-content-center transition-colors">
                  <span className="text-sm">f</span>
                </button>
                <button className="w-10 h-10 bg-gray-700 hover:bg-[#e8505b] rounded-full grid place-content-center transition-colors">
                  <span className="text-sm">t</span>
                </button>
                <button className="w-10 h-10 bg-gray-700 hover:bg-[#e8505b] rounded-full grid place-content-center transition-colors">
                  <span className="text-sm">in</span>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#e8505b]">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-[#e8505b]">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>mealmateecosystem@gmail.com</p>
                <p>+233 55 376 7177</p>
                <p className="text-sm pt-2">Available 24/7 for support</p>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 MealMate Ecosystem. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}