import { useEffect, useState } from 'react';

const DrumPads = ({keyCode,keyTrigger,id,audioUrl, displayAudioName}) => {

    const activateStyle = {
        backgroundColor: 'orange',
        boxShadow: '0 3px orange',
        height: '77',
        marginTop: 13,
    };
    const inActivateStyle = {
        backgroundColor: 'grey',
        marginTop: 10,
        boxShadow: '3px 3px 3px black',
    };

    // play the audio
    const playSound = () => {

        const sound = document.getElementById(keyTrigger);
        sound.currentTime = 0;
        sound.play();

        // display the name of triggered drum pad
        displayAudioName(id); 

        // change style of triggered drum pad    
        setPadStyle(activateStyle)
        setTimeout(() => setPadStyle(inActivateStyle), 100);

    }

    // onclick
    const handleClick = () => {

        playSound();

    }

    // keydown
    const handleKeyDown = (event) => {

        if(event.keyCode === keyCode){
            playSound();
        }

    }

    
    const [padStyle, setPadStyle] = useState(inActivateStyle);

    useEffect(()=> {
        document.addEventListener('keydown', handleKeyDown);
        return() => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    });
        
    return(
        <div className="drum-pad" id={id} onClick={handleClick} style={padStyle}>
            <audio className="clip" id={keyTrigger} src={audioUrl}></audio>{keyTrigger}
        </div>
    );
}

export default DrumPads;