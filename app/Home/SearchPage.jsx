"use client";

import React, { useState } from "react";
import { MapPin, Wallet, Search, ChevronDown } from "lucide-react";

const destinations = ["All Destinations", "Egypt", "Jordan", "Any"];

const budgets = [
  "All Budgets",
  "$500 - $1,000",
  "$1,000 - $2,500",
  "$2,500 - $5,000",
  "$5,000+",
];

export default function SearchPage() {
  const [destination, setDestination] = useState(destinations[0]);
  const [budget, setBudget] = useState(budgets[0]);

  return (
    <section className="md:absolute bottom-0 left-0 w-full md:translate-y-1/2 z-30 px-4 my-6 md:my-0">
      <div className="container mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 border border-stone-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            {/* Destination Dropdown */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-stone-500 font-medium text-sm ml-1">
                <MapPin className="w-4 h-4 text-amber-500" />
                Destinations
              </label>
              <div className="relative group">
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 text-stone-800 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all appearance-none cursor-pointer"
                >
                  {destinations.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 pointer-events-none group-hover:text-amber-500 transition-colors" />
              </div>
            </div>

            {/* Budget Dropdown */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-stone-500 font-medium text-sm ml-1">
                <Wallet className="w-4 h-4 text-amber-500" />
                Budget
              </label>
              <div className="relative group">
                <select
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 text-stone-800 font-semibold focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all appearance-none cursor-pointer"
                >
                  {budgets.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400 pointer-events-none group-hover:text-amber-500 transition-colors" />
              </div>
            </div>

            {/* Find Now Button */}
            <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold h-[60px] rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:-translate-y-0.5 active:translate-y-0 group">
              <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="uppercase tracking-wider">Find now</span>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Optional: Custom styling for select scrollbar */
        select::-webkit-scrollbar {
          width: 8px;
        }
        select::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        select::-webkit-scrollbar-thumb {
          background: #d6d3d1;
          border-radius: 4px;
        }
        select::-webkit-scrollbar-thumb:hover {
          background: #78716c;
        }
      `}</style>
    </section>
  );
}
