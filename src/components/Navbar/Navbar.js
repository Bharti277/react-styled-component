import React from "react";

function Navbar() {
  return <div className="text-center text-white bg-black">
      <div className="flex items-center">
        <div className="home">Home</div>
        <div className="pages">Pages</div>
        <div className="rooms">Rooms</div>
        <div className="reservation">Reservation</div>
        <div className="blog">Blog</div>
        <div className="contact">Contact</div>
      </div>
  </div>;
}

export default Navbar;