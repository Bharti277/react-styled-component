// src/components/HotelList.js
import React from "react";
import { useSelector } from "react-redux";
import HotelCard from "./HotelCard";

const HotelList = () => {
  const hotels = useSelector((state) => state.hotels.hotels);

  return (
    <div className="container grid grid-cols-1 gap-6 p-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelList;
