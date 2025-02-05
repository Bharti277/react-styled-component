// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import hotelReducer from "./store/hotelSlice";

const store = configureStore({
  reducer: {
    hotels: hotelReducer,
  },
});

export default store;
