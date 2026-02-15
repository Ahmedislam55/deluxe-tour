"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

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
        speed={1500}
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
            {({ isActive }) => (
              <div className="relative h-full w-full overflow-hidden">
                {/* Background Image Container */}
                <motion.div
                  initial={{ scale: 1.1 }}
                  animate={isActive ? { scale: 1 } : { scale: 1.1 }}
                  transition={{ duration: 6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Overlay Layer */}
                  <div className="absolute inset-0 bg-black/40" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 h-full flex lg:items-end items-center pb-24 lg:pb-32">
                  <div className="container mx-auto px-8">
                    <div className="max-w-7xl lg:flex items-end justify-between gap-12">
                      <div className="flex-1 overflow-hidden">
                        <AnimatePresence mode="wait">
                          {isActive && (
                            <motion.h1
                              key={`title-${slide.id}`}
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: 50 }}
                              transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                delay: 0.2,
                              }}
                              className="mb-6 lg:mb-0 text-3xl md:text-5xl lg:text-5xl font-bold text-white font-serif leading-tight drop-shadow-2xl text-center lg:text-left"
                            >
                              {slide.title}
                            </motion.h1>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="flex-[0.8] overflow-hidden">
                        <AnimatePresence mode="wait">
                          {isActive && (
                            <motion.p
                              key={`subtitle-${slide.id}`}
                              initial={{ opacity: 0, x: 50 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -50 }}
                              transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                delay: 0.4,
                              }}
                              className="text-stone-100/90 text-lg md:text-xl lg:text-base leading-relaxed drop-shadow-lg text-center lg:text-left"
                            >
                              {slide.subtitle}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination wrapper for custom styling if needed */}
      <div className="swiper-pagination-custom absolute !bottom-10 !left-1/2 -translate-x-1/2 z-20" />

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: white !important;
          opacity: 0.5;
          width: 12px;
          height: 12px;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          background: #f59e0b !important;
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
    </div>
  );
}
