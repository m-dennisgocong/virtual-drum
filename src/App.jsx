import { useState } from 'react';
import './App.scss';
import BankPad from './components/BankPad';
// import ControlContainer from './components/ControlContainer';
import {bankOne} from './data/bankOne.js';


const App = () => {

  const [currentBank, setCurrentBank] = useState(bankOne);
  const [displayString, setdisplayString] = useState(" ")
  const [volumeValue, setVolumeValue] = useState(5);

  const display = (name) => {
    setdisplayString(name);
  }
  
  return(
    <main id="drum-machine" className="drum-container">
      <div className="display-container">
        <p id="display">{displayString}</p>
      </div>
      <BankPad currentBank={currentBank} display={display}/>
      {/* <ControlContainer /> */}
      <input type="range" name="volume" min={0} max={10} value={volumeValue} onChange={(event)=> setVolumeValue(event.target.value)}/>
      <div className="switch">
      </div>
    </main>
  );
}

export default App;