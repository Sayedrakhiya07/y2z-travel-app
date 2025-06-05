import React from "react";
import ItineraryCard from "../ui/ItineraryCard";
import { Reorder } from "framer-motion";
import { Equal } from "lucide-react";

export default function SortedCardContent({ item, className = "", count }) {
  return (
    <Reorder.Item
      value={item}
      whileDrag={{
        scale: 1.02,
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        zIndex: 10,
      }}
      dragElastic={0.1}
      className={`SortedCardContent flex items-center space-x-2 mb-4 touch-manipulation ${className} overflow-y-auto w-full cursor-grab active:cursor-grabbing`}
    >
      {/* Drag Handle */}
      <div
        className="drag-icon flex-shrink-0 cursor-grab active:cursor-grabbing p-1 hover:bg-gray-100 rounded text-gray-500"
        aria-label="Drag to reorder"
      >
        <Equal size={22} />
      </div>

      <ItineraryCard
        id={item.id}
        title={item.title}
        description={item.description}
        imageUrl={item.image}
        rating={item.rating}
        reviews={item.reviews}
        count={count}
      />
    </Reorder.Item>
  );
}
