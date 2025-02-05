// src/components/HotelCard.js
import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedHotel } from "../store/hotelSlice";
import { Link } from "react-router-dom";

const HotelCard = ({ hotel }) => {
  const dispatch = useDispatch();

  const selectHotel = () => {
    dispatch(setSelectedHotel(hotel)); // Select the hotel to show details
  };

  return (
    <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
      <img
        className="object-cover w-full h-48"
        src={hotel.imageUrl}
        alt={hotel.name}
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{hotel.name}</h3>
        <p className="text-gray-600">{hotel.location}</p>
        <p className="text-blue-600">${hotel.price} per night</p>
        <p className="text-sm text-gray-500">
          Rooms Available: {hotel.roomsAvailable}
        </p>
        <Link
          to={`/hotel/${hotel.id}`}
          onClick={selectHotel}
          className="inline-block mt-2 text-blue-600 hover:underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default HotelCard;
