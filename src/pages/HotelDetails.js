// src/pages/HotelDetails.js
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const HotelDetails = () => {
  const { id } = useParams();
  const hotel = useSelector((state) =>
    state.hotels.hotels.find((h) => h.id === parseInt(id))
  );

  if (!hotel) {
    return <div>Hotel not found!</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold">{hotel.name}</h1>
      <p>{hotel.location}</p>
      <img
        className="object-cover w-full mt-4 h-96"
        src={hotel.imageUrl}
        alt={hotel.name}
      />
      <div className="mt-4">
        <h2 className="text-2xl">Room Options:</h2>
        {hotel.roomsAvailable > 0 ? (
          <p>Rooms available for booking: {hotel.roomsAvailable}</p>
        ) : (
          <p>No rooms available currently</p>
        )}
        <button className="p-3 mt-4 text-white bg-blue-600 rounded-md">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default HotelDetails;
