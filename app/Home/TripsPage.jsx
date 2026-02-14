import React from "react";
import Image from "next/image";

const tripData = [
  {
    id: 1,
    title: "Giza Pyramids Experience",
    image: "/image/mustafa-yasser-hIy9MzipFOg-unsplash.jpg",
  },
  {
    id: 2,
    title: "Old Cairo & Bazaar",
    image: "/image/Khan-El-Khalili-Bazaar.jpg",
  },
  {
    id: 3,
    title: "Religious Heritage Tour",
    image: "/image/St-Virgin-Mary-Church-Maadi-Egypt-Trips-in-Egypt.jpg",
  },
  {
    id: 4,
    title: "Nile Cruise Adventure",
    image: "/image/hamedtaha-6w05BdMmxy8-unsplash.jpg",
  },
];

export default function TripsPage() {
  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-4 tracking-tight">
            Featured Journeys
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tripData.map((trip) => (
            <div
              key={trip.id}
              className="group relative overflow-hidden shadow-xl aspect-[3/4] cursor-pointer"
            >
              {/* Image Container */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-2xl font-serif font-bold mb-2 drop-shadow-lg">
                  {trip.title}
                </h3>
                <div className="flex items-center gap-2 opacity-0 -translate-x-4 transition-all duration-300 delay-100 group-hover:opacity-100 group-hover:translate-x-0">
                  <span className="text-sm font-semibold tracking-widest text-amber-500 uppercase">
                    Learn More
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-4 h-4 text-amber-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5l6 6m0 0l-6 6m6-6H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
