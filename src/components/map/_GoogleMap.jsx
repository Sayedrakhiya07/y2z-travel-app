import { Map } from "lucide-react";
import React from "react";

export default function _GoogleMap() {
  return (
    <div className="w-full h-full md:flex md:items-center md:justify-center">
      <div className="floating-map block md:hidden bg-slate-800 text-gray-200 w-32 py-3 rounded-md shadow-lg fixed bottom-4 left-[50%] translate-x-[-50%]  z-50">
        <span className="flex items-center justify-center gap-1">
          {" "}
          MAPS <Map />
        </span>
      </div>
      <img
        src="assets/images/map.png"
        alt="map"
        className="w-full h-full object-cover rounded-md mix-blend-multiply hidden md:block"
        loading="lazy"
      />
    </div>
  );
}
