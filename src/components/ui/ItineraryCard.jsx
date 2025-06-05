import React from "react";
import { Link, Pencil, Star, Trash2 } from "lucide-react";

export default function ItineraryCard({
  id,
  title,
  description,
  imageUrl,
  rating,
  reviews,
  count,
}) {
  return (
    <div className="hero-card flex items-center mb-4 touch-manipulation w-full">
      <div className="w-full h-32 md:h-auto rounded-lg overflow-hidden md:p-2">
        <div className="p-2 flex items-start md:items-center gap-3 relative h-full">
          {/* images */}
          <div className="className={`img w-16 h-16 md:w-28 lg:h-28 bg-green-100 p-1 rounded-md relative flex-shrink-0 flex items-center justify-center overflow-hidden`}">
            <img
              src={imageUrl}
              alt={title}
              className="w-16 h-16 md:w-28 md:h-full object-cover rounded-md text-[.75rem]"
              loading="lazy"
            />
            <div className="absolute top-[50%] left-[-10%] -translate-y-1/2 translate-x-[10%] bg-white rounded-full shadow-md flex items-center justify-center">
              <div className="location-pin w-5 h-5 md:w-7 md:h-7 text-gray-100 flex items-center justify-center"></div>
              <div className="absolute text-gray-50 font-medium text-[.75rem] md:text-sm">
                {count}
              </div>
            </div>
          </div>

          {/* content */}
          <div className="flex-1 ">
            {/* title & icons */}
            <div className="flex justify-between items-center mb-1">
              <h2 className="text-sm md:text-lg font-semibold">{title}</h2>
              <div className="icons flex items-center gap-1 md:gap-4 text-gray-500 flex-shrink-0">
                <img
                  src="assets/icons/google-map-icon.svg"
                  alt="map icon"
                  className="object-cover w-3"
                  width={14}
                  height={14}
                />
                <span className="hover:bg-gray-300 p-1 rounded">
                  <Link size={18} className="w-4" />
                </span>
                <span className="hover:bg-gray-300 p-1 rounded">
                  <Trash2 size={18} className="text-red-500 w-4" />
                </span>
              </div>
            </div>
            {/* rating and reviews */}
            <div className="mb-2 text-[.75rem] md:text-sm flex items-center gap-1">
              {rating}
              <span className="text-yellow-600 flex items-center p-0 gap-1">
                <Star
                  size={16}
                  className="text-yellow-600 mb-[.1rem]"
                  fill="yellow"
                />{" "}
                ({reviews.toLocaleString()} reviews)
              </span>
            </div>
            {/* description */}
            <div className="absolute bottom-0 left-0 pl-3 min-w-full md:p-0 md:relative md:min-w-auto">
              <div className="w-full bg-green-100 rounded-md flex gap-4 p-1 items-start">
                <p className="text-[.75rem] text-gray-600 line-clamp-2 leading-relaxed">
                  {description}
                </p>
                <Pencil className="text-gray-500 w-16 md:w-10" size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
