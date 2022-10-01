import './DrumPads.scss';
const DrumPads = ({currentBank}) => {

    const playSound = (event) => {
        const sound = event.target.firstChild;// get the first child which is the audio element
        sound.currentTime = 0;
        sound.play();       
    }

    const drumPads = currentBank.map(element => 
        <li key={element.keyTrigger} id={element.id} className="drum-pad" onClick={playSound}><audio id={element.keyTrigger} className="clip" src={element.url} />{element.keyTrigger}</li>
    );
        
    return(
        <section className="drum-map">
            <ul>
                {drumPads}
            </ul>
        </section>
    );
}

export default DrumPads;