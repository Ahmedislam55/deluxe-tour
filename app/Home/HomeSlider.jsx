"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const sliderData = [
  {
    id: 1,
    image: "/image/gijs-jakobs-LmqBEnyBOTM-unsplash.jpg",
    title: "Deluxe Travel: Your Journey, Your Way",
    subtitle:
      "Embark on a luxurious adventure through Egypt with Deluxe Travel. From breathtaking landmarks to personalized experiences, we make your dream vacation a reality with unmatched service and attention to detail.",
  },
  {
    id: 2,
    image: "/image/osama-elsayed-vqRMXgVtGXM-unsplash.jpg",
    title: "Explore Egypt in Style with Deluxe Travel",
    subtitle:
      "Discover the wonders of Egypt with Deluxe Travel, your gateway to luxury tours, seamless adventures, and unforgettable memories. Experience tailored itineraries, exceptional service, and the magic of Egypt's iconic destinations—all crafted for your perfect journey.",
  },
  {
    id: 3,
    image: "/image/sam-plummer-TEC9kkg_6BQ-unsplash.jpg",
    title: "Deluxe Travel: Your Gateway to Egypt",
    subtitle:
      "Experience the magic of Egypt's iconic destinations—all crafted for your perfect journey.",
  },
];

export default function HomeSlider() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination-custom",
        }}
        loop={true}
        className="h-full w-full"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />
                {/* Overlay Layer */}
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex lg:items-end items-center pb-8">
                <div className="w-full mt-14">
                  <div className="lg:flex justify-between px-8">
                    <h1 className="mb-4 max-w-4xl text-center lg:text-left animate-fade-in-left text-4xl font-bold text-white md:text-6xl lg:text-4xl font-serif">
                      {slide.title}
                    </h1>
                    <p className="mb-8 max-w-2xl text-center lg:text-left animate-fade-in-right text-stone-200 ">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-left {
          animation: fade-in-left 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
