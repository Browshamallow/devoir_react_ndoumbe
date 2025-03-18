import React from "react";

const hotels = [
  {
    name: "Stay-Kay City Hotel",
    description:
      "Hôtel classique situé à New York, proche de Times Square et du centre historique.",
  },
  {
    name: "Countryside Hotel",
    description:
      "WiFi gratuit, cuisine complète, centre de fitness et bien situé près du centre-ville.",
  },
  {
    name: "Royal Cottage Resort",
    description:
      "Chambres Premium, WiFi rapide, cuisine et centre de fitness modernes.",
  },
  {
    name: "Winter Panorama Resort",
    description:
      "Idéal pour le ski, le patinage sur glace, le yoga et d'autres activités hivernales.",
  },
  {
    name: "Luxury Lion Resort",
    description:
      "Hébergement de luxe en centre-ville, proche du stade et des transports.",
  },
];

function HotelList() {
  return (
    <div>
      <h1>Liste des hôtels</h1>
      <ul>
        {hotels.map((hotel, index) => (
          <li key={index}>
            <h2>{hotel.name}</h2>
            <p>{hotel.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HotelList;
