"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MoveLeft, MoveRight, Plane } from "lucide-react";
import { motion } from "framer-motion";
import styles from "./TripsPage.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const tripData = [
  {
    id: 1,
    title: "Giza Pyramids",
    description: "Witness the last of the ancient Seven Wonders of the World.",
    image: "/image/spencer-davis-ONVA6s03hg8-unsplash.jpg",
  },
  {
    id: 2,
    title: "Old Cairo & Bazaar",
    description: "Explore historical churches and the vibrant Khan el-Khalili.",
    image: "/image/Khan-El-Khalili-Bazaar.jpg",
  },
  {
    id: 3,
    title: "Aswan & Abu Simbel",
    description: "Marvel at the colossal statues of Ramses II and Nefertari.",
    image: "/image/flying-carpet-Si1MFhSLNWY-unsplash.jpg",
  },
  {
    id: 4,
    title: "Nile Cruise Adventure",
    description: "Sail away on a luxury cruise between Luxor and Aswan.",
    image: "/image/mo-gabrail-iuC3w8mLDcs-unsplash.jpg",
  },
  {
    id: 5,
    title: "Luxor Valley of Kings",
    description: "Discover the secrets of the pharaohs' eternal resting place.",
    image: "/image/mustafa-yasser-hIy9MzipFOg-unsplash.jpg",
  },
];

export default function TripsPage() {
  return (
    <section className="py-20 bg-stone-900 overflow-hidden relative">
      <div
        className={`${styles.trips} absolute inset-0 z-0 blur-md scale-110 opacity-70`}
      ></div>
      <div className="absolute inset-0 z-0 bg-black/60"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-amber-500 text-white px-5 py-2 rounded-full mb-6 group transition-all duration-300 shadow-xl shadow-amber-500/20"
          >
            <Plane className="w-5 h-5 -rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 ease-out" />
            <span className="text-xs font-black tracking-[0.25em] uppercase">
              Our Journeys
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight"
          >
            Featured Journeys
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg text-stone-300 mb-6 max-w-2xl mx-auto"
          >
            Discover the best of Egypt with our carefully curated journey
            packages.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="relative group/slider"
        >
          {/* Custom Navigation Buttons - Positioned on sides */}
          <button className="swiper-prev-trips absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 p-3 rounded-full bg-white shadow-xl hover:bg-amber-500 hover:text-white transition-all duration-300 cursor-pointer text-stone-800 opacity-0 group-hover/slider:opacity-100 group-hover/slider:translate-x-0">
            <MoveLeft size={24} />
          </button>
          <button className="swiper-next-trips absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 p-3 rounded-full bg-white shadow-xl hover:bg-amber-500 hover:text-white transition-all duration-300 cursor-pointer text-stone-800 opacity-0 group-hover/slider:opacity-100 group-hover/slider:translate-x-0">
            <MoveRight size={24} />
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-prev-trips",
              nextEl: ".swiper-next-trips",
            }}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="pb-12"
          >
            {tripData.map((trip) => (
              <SwiperSlide key={trip.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden shadow-2xl aspect-[3/4] cursor-pointer"
                >
                  {/* Image Container */}
                  <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                    <Image
                      src={trip.image}
                      alt={trip.title}
                      fill
                      className="object-cover"
                    />
                    {/* Dark Gradient Overlay (Initial) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-0" />

                    {/* Dark Overlay (Hover) */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  {/* Content Overlays */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 transition-colors duration-500">
                    {/* Title Wrapper - Moves up on hover */}
                    <div className="transition-transform duration-500 ease-out group-hover:-translate-y-4">
                      <h3 className="text-2xl text-center font-bold mb-0 drop-shadow-xl leading-tight text-white">
                        {trip.title}
                      </h3>
                    </div>

                    {/* Reveal Container (Desc + CTA) */}
                    <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-out group-hover:max-h-40 group-hover:opacity-100 group-hover:-translate-y-2">
                      <p className="text-sm text-center text-stone-200 mt-3 line-clamp-2 leading-relaxed transition-colors duration-500">
                        {trip.description}
                      </p>

                      <div className="flex items-center justify-center gap-2 mt-4 text-amber-500 hover:text-amber-600 group/btn transition-colors duration-500">
                        <span className="text-xs font-black tracking-widest uppercase">
                          View Details
                        </span>
                        <MoveRight
                          size={16}
                          className="transition-transform duration-300 group-hover/btn:translate-x-1"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }
        .swiper-pagination-bullet-active {
          background: #f59e0b !important;
        }
      `}</style>
    </section>
  );
}
