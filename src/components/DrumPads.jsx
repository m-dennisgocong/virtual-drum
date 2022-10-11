import { useEffect, useState } from 'react';

const DrumPads = ({keyCode,keyTrigger,id,audioUrl, display, power}) => {

    const activateStyle = {
        backgroundColor: '#333',
        boxShadow: 'inset 0 0 2em rgb(0, 0, 255, 0.5),inset 0 0 4em #fff, 0 0 2em rgb(0, 0, 255, 0.5), 2px 2px 1em #fff',
        height: 67.5,
        top: 3.5
    };
    const inActivateStyle = {
        backgroundColor: '#333',
        boxShadow: '1px 1px 4px 1px rgb(255, 255, 255,0.5),3.5px 3.5px 4px 1px rgb(0, 0, 255, 0.5)',
        color: "white"
    };
    const powerOffstyle = {
        backgroundColor: '#333',
        height: 67.5,
        boxShadow: 'unset',
        top: 3.5
    };

    // play the audio
    const playSound = () => {
        if(power){
            const sound = document.getElementById(keyTrigger);
            sound.currentTime = 0;
            sound.play();

            // display the name of triggered drum pad
            display(id);
            // change style of triggered drum pad  
            setPadStyle(activateStyle)
            
        } else{
            setPadStyle(powerOffstyle)
        }
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