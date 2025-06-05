export const API_BASE_URL = "./assets/api/Itinerary-mock-data.json";


const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const mapCenter = {
  lat: 48.8606,
  lng: 2.3376,
};

const mapMarkers = [
  {
    position: { lat: 48.8609, lng: 2.3365 },
    label: "Le Bistrot des Halles",
  },
  {
    position: { lat: 48.8603, lng: 2.3372 },
    label: "Signature",
  },
  {
    position: { lat: 48.8607, lng: 2.3369 },
    label: "Cabinet d’Avocats Nakache Perez",
  },
];

export { mapContainerStyle, mapCenter, mapMarkers };