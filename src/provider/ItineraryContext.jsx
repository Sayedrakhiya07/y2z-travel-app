import React, { createContext, useEffect, useState } from "react";
import { API_BASE_URL } from "../constant/constant";

export const ItineraryContext = createContext();

export const ItineraryProvider = ({ children }) => {
  const [itinerary, setItinerary] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchItineraryItems = async ()=> {
    try {
      const response = await fetch(API_BASE_URL);
      const data = await response.json()
      setItinerary(data.products); 
      setLoading(false);
    } catch (error) {
      console.error("Error loading itinerary data:", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItineraryItems();
  }, []);

  return (
    <ItineraryContext.Provider value={{ itinerary, setItinerary, loading }}>
      {children}
    </ItineraryContext.Provider>
  );
};
