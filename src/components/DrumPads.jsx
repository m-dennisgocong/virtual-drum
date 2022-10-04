import './DrumPads.scss';
import { useEffect } from 'react';
const DrumPads = ({currentBank, displayAudioName}) => {


    const playSound = (sound, soundName) => {

        sound.currentTime = 0;
        sound.play(); 
        
        displayAudioName(soundName); // display the sound audio name when trigger

    }

    const handleClick = (event) => {
        
        console.log(currentBank)
        const sound = event.target.firstChild; // get the first child which is the audio element
        const soundName = event.target.id; // audio name 

        playSound(sound, soundName); // play the audio
    }

    const handleKeyDown = (event) => {
           
        const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        const soundName = sound.parentNode.id;
        
        playSound(sound, soundName); // play sound
    }
    
    useEffect(()=> {
        document.addEventListener('keydown', handleKeyDown);
        return() => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    });

    const drumPads = currentBank.map(element => 
        <li key={element.keyTrigger} id={element.id} className="drum-pad" onClick={handleClick}><audio data-key={element.keyCode} id={element.keyTrigger} className="clip" src={element.url} />{element.keyTrigger}</li>
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