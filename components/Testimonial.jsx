import React, { useState, useEffect } from "react";

// SVG Icons Components
const Star = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Quote = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

const ChevronLeft = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Restaurant Owner",
      company: "Bella Vista Bistro",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "This platform revolutionized our delivery system! Orders increased by 300% in just 3 months. The interface is intuitive and our customers love the seamless experience.",
      highlight: "300% increase in orders"
    },
    {
      id: 2,
      name: "Marcus Adzo",
      role: "Food Entrepreneur",
      company: "Chen's Kitchen",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "From a small local eatery to citywide delivery - this app made it possible. The analytics help me understand my customers better and optimize my menu offerings.",
      highlight: "Citywide expansion"
    },
    {
      id: 3,
      name: "Emma Mafi",
      role: "Cafe Manager",
      company: "Morning Brew Cafe",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The customer support is exceptional and the platform is so easy to use. We've seen a significant boost in customer retention and satisfaction scores.",
      highlight: "95% customer satisfaction"
    },
    {
      id: 4,
      name: "David Abbam",
      role: "Regional Manager",
      company: "QuickBite Chain",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "Managing multiple locations became effortless. Real-time tracking, inventory management, and customer insights all in one place. Highly recommend!",
      highlight: "Multi-location management"
    },
    {
      id: 5,
      name: "Prince Sekey",
      role: "Head Chef",
      company: "Fusion Delights",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "The app helped us reach food lovers across the city. The delivery tracking feature gives customers confidence, and we've never been busier!",
      highlight: "Record-breaking sales"
    },
    {
      id: 6,
      name: "Ahmed Hassan",
      role: "Business Owner",
      company: "Spice Route",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "This platform transformed our traditional restaurant into a modern food delivery business. The onboarding was smooth and results were immediate.",
      highlight: "Digital transformation"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextTestimonial, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, currentIndex]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="w-[90%] sm:w-[80%] mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            What <span className="text-[#e8505b]">Clients</span> Say
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            See How Our Digital Platform Helped Clients
          </p>
          <p className="text-lg text-gray-600">
            Achieve Their Goals
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div 
          className="relative max-w-4xl mx-auto mb-12"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Quote Icon */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className="bg-[#e8505b] rounded-full p-3">
              <Quote className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
              <div className="w-full h-full bg-[#e8505b] rounded-full transform translate-x-16 -translate-y-16"></div>
            </div>
            
            <div className="relative z-10">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                <div className="flex space-x-1">
                  {renderStars(testimonials[currentIndex].rating)}
                </div>
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl sm:text-2xl text-gray-800 text-center leading-relaxed mb-8 font-medium">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Highlight Badge */}
              <div className="flex justify-center mb-8">
                <span className="bg-[#e8505b] text-white px-6 py-2 rounded-full text-sm font-semibold">
                  {testimonials[currentIndex].highlight}
                </span>
              </div>

              {/* Author Info */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover ring-4 ring-[#e8505b] ring-opacity-20"
                />
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-bold text-gray-900">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-[#e8505b] font-semibold">
                    {testimonials[currentIndex].role}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110 z-20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#e8505b] scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          <div className="text-center p-6 bg-gradient-to-b from-gray-50 to-white rounded-2xl">
            <div className="text-3xl sm:text-4xl font-bold text-[#e8505b] mb-2">500+</div>
            <div className="text-gray-600 font-medium">Happy Restaurants</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-b from-gray-50 to-white rounded-2xl">
            <div className="text-3xl sm:text-4xl font-bold text-[#e8505b] mb-2">2M+</div>
            <div className="text-gray-600 font-medium">Orders Delivered</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-b from-gray-50 to-white rounded-2xl">
            <div className="text-3xl sm:text-4xl font-bold text-[#e8505b] mb-2">4.9★</div>
            <div className="text-gray-600 font-medium">Average Rating</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-b from-gray-50 to-white rounded-2xl">
            <div className="text-3xl sm:text-4xl font-bold text-[#e8505b] mb-2">24/7</div>
            <div className="text-gray-600 font-medium">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;