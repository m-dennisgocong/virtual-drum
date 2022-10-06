import { useState } from 'react';
import './App.scss';
import BankPad from './components/BankPad';
import ControlContainer from './components/ControlContainer';
import {bankOne} from './data/bankOne.js';


const App = () => {

  const [currentBank, setCurrentBank] = useState(bankOne);
  const [audioName, setAudioName] = useState("")

  const displayAudioName = (name) => {
    setAudioName(name);
  }
  
  return(
    <main id="drum-machine" className="drum-container">
      <p id="display">{audioName}</p>
      <BankPad currentBank={currentBank} displayAudioName={displayAudioName}/>
      <ControlContainer />
    </main>
  );
}

export default App;