// src/components/SearchBar.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setHotels } from "../store/hotelSlice";

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();

  const searchHotels = () => {
    // Mock search functionality
    const hotels = [
      {
        id: 1,
        name: "OYO Hotel New York",
        location: "New York",
        price: 100,
        roomsAvailable: 5,
        imageUrl: "https://via.placeholder.com/200x150",
      },
      {
        id: 2,
        name: "OYO Hotel California",
        location: "California",
        price: 120,
        roomsAvailable: 2,
        imageUrl: "https://via.placeholder.com/200x150",
      },
    ];
    dispatch(setHotels(hotels)); // Update hotels in Redux state
  };

  return (
    <div className="flex justify-center p-6">
      <input
        type="text"
        className="p-2 border border-gray-300 rounded-md"
        placeholder="Search for hotels or cities"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        onClick={searchHotels}
        className="p-2 ml-2 text-white bg-blue-600 rounded-md"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
