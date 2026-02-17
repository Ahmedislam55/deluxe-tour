import React from "react";
import Navbar from "../Navbar/Navbar";
import HomeSlider from "./HomeSlider";
import styles from "./HomePage.module.css";
import TripsPage from "./TripsPage";
import SearchPage from "./SearchPage";
export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <HomeSlider />
        <SearchPage />
      </main>
      <TripsPage />
    </>
  );
}
