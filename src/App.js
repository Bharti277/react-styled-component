import React from 'react';
import Navbar from './components/Navbar/Navbar';
import OurRooms from './components/OurRooms/OurRooms';
import SelectRoom from './components/SelectRoom/SelectRoom';


function App() {
  return (
    <div className="app">
      <Navbar />
      <SelectRoom />
      <OurRooms />
    </div>
  )
}

export default App;