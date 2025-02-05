// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-600">
      <div className="container flex items-center justify-between mx-auto">
        <Link to="/" className="text-2xl font-bold text-white">
          Rooms
        </Link>
        <div>
          <Link to="/" className="mx-4 text-white">
            Home
          </Link>
          <Link to="/about" className="mx-4 text-white">
            About
          </Link>
          <Link to="/contact" className="mx-4 text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
