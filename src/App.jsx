import './App.scss';
import DrumPads from './components/DrumPads';
import ControlContainer from './components/ControlContainer';
const App = () => {

  return(
    <main id="drum-machine" className="drum-container">
      <p id="display"></p>
      <DrumPads />
      <ControlContainer />
    </main>
  );
}

export default App;