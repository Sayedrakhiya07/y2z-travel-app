import { useContext } from "react";
import { Reorder } from "framer-motion";
import SortedCardContent from "./SortedCardContent";
import { ItineraryContext } from "../../provider/ItineraryContext";

export default function ItineraryList() {
  const { itinerary, setItinerary, loading } = useContext(ItineraryContext);
  
  if (loading) {
    return <p>Loading...</p>;
  }
  if (!itinerary || itinerary.length === 0) {
    return <p className="text-gray-500">No items in the itinerary.</p>;
  }

  return (
    <Reorder.Group
      axis="y"
      values={itinerary}
      onReorder={setItinerary}
      className="space-y-4"
    >
      {itinerary.map((item, index) => (
        <SortedCardContent
          key={item.id}
          item={item}
          count={index + 1}
        />
      ))}
    </Reorder.Group>
  );
}
