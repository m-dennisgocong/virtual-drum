import { useState } from 'react';
import './App.scss';
import BankPad from './components/BankPad';
import {bankOne, bankTwo} from './data/Bank.js';
import githubLogo from './icon/github-logo.svg';

const App = () => {

  const [displayString, setdisplayString] = useState(" ")
  const [volumeValue, setVolumeValue] = useState(0.5);
  const [power, setPower] = useState(true);
  const [bank, setBank] = useState(false);

  const clearDisplay = () => {
    setdisplayString(" ");
  }
  
  const display = (name) => {
    setdisplayString(name);
  }

  const adjustVolume = (event) => {
    setVolumeValue(event.target.value);
    if(power){
      display("volume : "+ Math.round(event.target.value * 100));
      setTimeout(() => clearDisplay(), 1000); 
    }
  }
  
  const handlePower = () => {
    setPower(!power);
    clearDisplay();
  }
  const kitType = (bank) => {
    return bank ? display("Heater Kit") : display("Smooth Piano Kit"); 
  }
  const handleBankChange = () => {  
    setBank(!bank);
    if(power){
      kitType(bank);
    }  
  }

  // adjust audio volume
  const clips = document.querySelectorAll('.clip');    
  clips.forEach(sound => {
    sound.volume = volumeValue;
  });

  // remove light effect style for drum-machine container 
  const powerOffstyle = {
    border: "1px solid grey",
    boxShadow: "unset"
  }

  return(
    <main style={!power ? powerOffstyle : null} id="drum-machine" className="drum-container">
      <div className="display-container">
        <p id="display">{displayString}</p>
      </div>
      <BankPad currentBank={!bank ? bankOne : bankTwo} display={display} power={power}/>
      <div className="volume-container">
        <p style={!power ? {color: 'grey'}: null}>volume: </p>
        <input type="range" name="volume" min="0" max="1" step="0.01" value={volumeValue} onChange={adjustVolume}/>
      </div>
      <div className="switch">
        <div className="power-container">
          <input checked={power} type="checkbox" id="power" className='toggle' onChange={handlePower}/>
          <label htmlFor="power" style={!power ? {color: 'grey'}: null} >Power</label>
        </div>
        <div className="bank-container">
          <input checked={bank} type="checkbox" id="bank" className='toggle' onChange={handleBankChange}/>
          <label htmlFor="bank" style={!power ? {color: 'grey'}: null} >Bank</label>
        </div>
      </div>
      <div id="footer">
        <a href="https://github.com/m-dennisgocong/virtual-drum" target='_blank'>
          <img src={githubLogo} alt="" /> Dennis Goc-ong 
        </a>
      </div>
    </main>
  );
}

export default App;