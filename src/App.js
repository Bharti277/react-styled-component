import React from 'react';
import Navbar from './components/Navbar/Navbar';
import OurRooms from './components/OurRooms/OurRooms';
import SelectRoom from './components/SelectRoom/SelectRoom';
import { useSelector, useDispatch } from 'react-redux';
import { incNumber, decNumber} from "./Services/action";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  console.log(myState)
  return (
    <div className="app">
      <Navbar />
      <SelectRoom />
      <OurRooms />
      <div className="my-app">
        <button onClick={() => dispatch(incNumber(5))}>Increment</button>
        <input className='text-center' type="text" value={myState} onChange={e => e.target.value} />
        <button onClick={() => dispatch(decNumber())}>Decrement</button>
      </div>
    </div>
  )
}

export default App;