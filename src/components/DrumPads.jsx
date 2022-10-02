import './DrumPads.scss';
import { useEffect } from 'react';
const DrumPads = ({currentBank}) => {

    const playSound = (event) => {
        const sound = event.target.firstChild;// get the first child which is the audio element
        sound.currentTime = 0;
        sound.play();       
    }

    const handleKeyDown = (event) => {
        const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        sound.currentTime = 0;
        sound.play();  
    }
    
    useEffect(()=> {
        document.addEventListener('keydown', handleKeyDown);
        return() => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    });

    const drumPads = currentBank.map(element => 
        <li key={element.keyTrigger} id={element.id} className="drum-pad" onClick={playSound}><audio data-key={element.keyCode} id={element.keyTrigger} className="clip" src={element.url} />{element.keyTrigger}</li>
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