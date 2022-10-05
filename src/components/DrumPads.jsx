import './DrumPads.scss';
import { useEffect, useState } from 'react';
const DrumPads = ({currentBank, displayAudioName}) => {

    const activateStyle = {
        backgroundColor: 'orange',
        boxShadow: '1px 1px 3px orange',
        padding: 11,
    };
    const inActivateStyle = {
        backgroundColor: 'grey',
        padding: 10,
        boxShadow: '3px 3px 3px black',
    };

    const playSound = (sound, soundName) => {

        sound.currentTime = 0;
        sound.play(); 
        
        displayAudioName(soundName); // display the sound audio name when trigger
        
        padActivated();
        setTimeout(() => setPadStyle(inActivateStyle), 100);
    }

    const handleClick = (event) => {
        
        const sound = event.target.firstChild; // get the first child which is the audio element
        const soundName = event.target.id; // audio name 

        playSound(sound, soundName); // play the audio
    }

    const handleKeyDown = (event) => {
           
        const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
        const soundName = sound.parentNode.id;
        
        playSound(sound, soundName); // play sound
    }

    const padActivated = () =>  {
        // console.log(activateStyle);
        setPadStyle(activateStyle);
    }
    
    const [padStyle, setPadStyle] = useState(inActivateStyle);

    useEffect(()=> {
        document.addEventListener('keydown', handleKeyDown);
        return() => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    });

    const drumPads = currentBank.map(element => 
        <li key={element.keyTrigger} id={element.id} className="drum-pad" onClick={handleClick} style={padStyle}><audio data-key={element.keyCode} id={element.keyTrigger} className="clip" src={element.url} />{element.keyTrigger}</li>
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