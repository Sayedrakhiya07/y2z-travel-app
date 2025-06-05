import React from "react";
import Header from "../components/Header";
import ItineraryList from "../components/card/ItineraryList";
import _GoogleMap from "../components/map/_GoogleMap";

export default function Home() {
  return (
    <main className="hero-home h-screen flex-none md:flex md:flex-row md:max-h bg-white md:overflow-y-scroll mb-4 md:mb-0">
      <section className="left-section w-full rounded-t-md p-4 h-full md:overflow-y-scroll ">
        <Header />
        <div className="itinerary-header md:ml-[2.5rem] overflow-hidden py-3">
          <h2 className="text-xl font-bold text-gray-800">Itinerary</h2>
          <p className="text-gray-500 text-sm">Day</p>
        </div>

        <div className="px-2 overflow-y-scroll">
          <div className="itiernary-list-container py-4">
            {/* Itinerary List Component */}
            <ItineraryList />
          </div>
        </div>
      </section>
      <section className="right-section w-full text-black">
        <_GoogleMap />
      </section>
    </main>
  );
}
