// src/store/hotelSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hotels: [
    {
      id: 1,
      name: "Hotel New York",
      location: "New York",
      price: 100,
      roomsAvailable: 5,
      imageUrl: "https://via.placeholder.com/200x150",
    },
    {
      id: 2,
      name: "Hotel California",
      location: "California",
      price: 120,
      roomsAvailable: 2,
      imageUrl: "https://via.placeholder.com/200x150",
    },
  ],
  selectedHotel: null,
};

const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  reducers: {
    setHotels: (state, action) => {
      state.hotels = action.payload;
    },
    setSelectedHotel: (state, action) => {
      state.selectedHotel = action.payload;
    },
  },
});

export const { setHotels, setSelectedHotel } = hotelSlice.actions;

export default hotelSlice.reducer;
