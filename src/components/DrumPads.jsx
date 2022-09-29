import './DrumPads.scss';
const DrumPads = () => {

    const clickPad = (event) => {
        console.log("Click!");
    }

    return(
        <section className="drum-map">
            <ul>
                <li id="Heater-1" className="drum-pad" onClick={clickPad}>Q</li>
                <li id="Heater-2" className="drum-pad" onClick={clickPad}>W</li>
                <li id="Heater-3" className="drum-pad" onClick={clickPad}>E</li>
                <li id="Heater-4" className="drum-pad" onClick={clickPad}>A</li>
                <li id="Clap" className="drum-pad" onClick={clickPad}>S</li>
                <li id="Open-HH" className="drum-pad" onClick={clickPad}>D</li>
                <li id="Kick-n'-Hack" className="drum-pad" onClick={clickPad}>Z</li>
                <li id="Kick" className="drum-pad" onClick={clickPad}>X</li>
                <li id="Closed-HH" className="drum-pad" onClick={clickPad}>C</li>
            </ul>
        </section>
    );
}

export default DrumPads;