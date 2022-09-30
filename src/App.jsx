import { useState } from 'react';
import './App.scss';
import DrumPads from './components/DrumPads';
import ControlContainer from './components/ControlContainer';
import {bankOne} from './data/bankOne.js';

const App = () => {
  
  const [currentBank, setCurrentBank] = useState(bankOne);

  return(
    <main id="drum-machine" className="drum-container">
      <p id="display"></p>
      <DrumPads />
      <ControlContainer />
    </main>
  );
}

export default App;