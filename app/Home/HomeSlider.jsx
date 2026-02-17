"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const sliderData = [
  {
    id: 1,
    image: "/image/gijs-jakobs-LmqBEnyBOTM-unsplash.jpg",
    tag: "Luxury Travel",
    title: "Deluxe Travel: Your Journey, Your Way",
    subtitle:
      "Embark on a luxurious adventure through Egypt with Deluxe Travel. From breathtaking landmarks to personalized experiences, we make your dream vacation a reality with unmatched service and attention to detail.",
  },
  {
    id: 2,
    image: "/image/osama-elsayed-vqRMXgVtGXM-unsplash.jpg",
    tag: "Cultural Experience",
    title: "Explore Egypt in Style with Deluxe Travel",
    subtitle:
      "Discover the wonders of Egypt with Deluxe Travel, your gateway to luxury tours, seamless adventures, and unforgettable memories. Experience tailored itineraries, exceptional service, and the magic of Egypt's iconic destinations—all crafted for your perfect journey.",
  },
  {
    id: 3,
    image: "/image/sam-plummer-TEC9kkg_6BQ-unsplash.jpg",
    tag: "Unforgettable Memories",
    title: "Deluxe Travel: Your Gateway to Egypt",
    subtitle:
      "Experience the magic of Egypt's iconic destinations—all crafted for your perfect journey.",
  },
];

const CircularExploreButton = () => {
  return (
    <Link href="/tours">
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -45 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-28 h-28 md:w-32 md:h-32 flex items-center justify-center group cursor-pointer lg:mt-22 mt-12 pointer-events-auto"
      >
        {/* Rotating Circular Text */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 w-full h-full"
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path
              id="circlePath-fixed"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="fill-white/80 font-bold text-[8px] tracking-[0.3em] font-sans">
              <textPath xlinkHref="#circlePath-fixed">
                Explore More Explore More Explore More
              </textPath>
            </text>
          </svg>
        </motion.div>

        {/* Central Circle & Arrow */}
        <div className="relative w-12 h-12 md:w-14 md:h-14 bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-[#0165B5] shadow-lg group-hover:shadow-amber-500/20">
          <ArrowUpRight className="text-white w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-45" />
        </div>
      </motion.div>
    </Link>
  );
};

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
                    className="object-cover blur md:blur-none"
                    priority
                  />
                  {/* Overlay Layer */}
                  <div className="absolute inset-0 bg-black/60" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10 h-full flex lg:items-end items-center pb-36 lg:pb-48">
                  <div className="container mx-auto px-8">
                    <div className="lg:flex items-end justify-between gap-12 mt-30">
                      <div className="flex-1 overflow-hidden">
                        <AnimatePresence mode="wait">
                          {isActive && (
                            <>
                              <motion.span
                                key={`tag-${slide.id}`}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{
                                  duration: 0.6,
                                  ease: "easeOut",
                                  delay: 0.1,
                                }}
                                className="block mb-4 text-amber-500 font-bold uppercase tracking-[0.3em] text-sm md:text-base text-center lg:text-left drop-shadow-md"
                              >
                                {slide.tag}
                              </motion.span>
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
                                className="mb-6 lg:mb-0 text-3xl md:text-5xl lg:text-5xl font-bold text-white leading-tight drop-shadow-2xl text-center lg:text-left"
                              >
                                {slide.title}
                              </motion.h1>
                            </>
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
                      <div className="flex-[0.35] hidden lg:flex justify-center lg:justify-end opacity-0">
                        {/* Empty spacer for alignment */}
                        <div className="w-28 h-28 md:w-32 md:h-32 lg:mt-20 mt-12"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Stationary Explore Button Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none flex items-end pb-36 lg:pb-48">
        <div className="container mx-auto px-8">
          <div className="lg:flex items-end justify-between gap-12">
            {/* Spacer for Title/Subtitle */}
            <div className="flex-1"></div>
            <div className="flex-[0.8] hidden lg:block"></div>
            {/* Button Area */}
            <div className="flex-[0.35] flex justify-end">
              <CircularExploreButton />
            </div>
          </div>
        </div>
      </div>

      {/* Pagination wrapper for custom styling if needed */}
      <div className="swiper-pagination-custom absolute !bottom-28 !left-1/2 -translate-x-1/2 z-20" />

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
