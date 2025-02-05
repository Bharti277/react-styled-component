import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HotelList from "./components/HotelList";
import HotelDetails from "./pages/HotelDetails";
import Footer from "./components/Footer";
import SearchBar from "./components/searchBar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<HotelList />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
