import { useState } from 'react';
import './App.scss';
import BankPad from './components/BankPad';
// import ControlContainer from './components/ControlContainer';
import {bankOne} from './data/bankOne.js';


const App = () => {

  const [currentBank, setCurrentBank] = useState(bankOne);
  const [displayString, setdisplayString] = useState(" ")
  const [volumeValue, setVolumeValue] = useState(0.5);
  const [power, setPower] = useState(true);

  const clearDisplay = () => {
    setdisplayString(" ");
  }
  
  const display = (name) => {
    setdisplayString(name);
  }

  const adjustVolume = (event) => {
    setVolumeValue(event.target.value);
    display("volume : "+ Math.round(event.target.value * 100));
    setTimeout(() => clearDisplay(), 1000); 
  }
  
  const handlePower = () => {
    setPower(!power);
  }
  
  // adjust audio volume
  const clips = document.querySelectorAll('.clip');    
  clips.forEach(sound => {
    sound.volume = volumeValue;
  });

  return(
    <main id="drum-machine" className="drum-container">
      <div className="display-container">
        <p id="display">{displayString}</p>
      </div>
      <BankPad currentBank={currentBank} display={display} power={power}/>
      {/* <ControlContainer /> */}
      <div className="volume-container">
        <p>volume: </p>
        <input type="range" name="volume" min="0" max="1" step="0.01" value={volumeValue} onChange={adjustVolume}/>
      </div>
      <div className="power-container">
        <input checked={power} type="checkbox" id="power" className='toggle' onChange={handlePower}/>
        <label htmlFor="power">Power</label>
      </div>
    </main>
  );
}

export default App;