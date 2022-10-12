import { useEffect, useState } from 'react';

const DrumPads = ({keyCode,keyTrigger,id,audioUrl, display, power}) => {

    const activateStyle = {
        backgroundColor: 'rgb(125, 249, 255,.5)',
        boxShadow: 'inset 0 0 35px rgb(0, 0, 255, 0.5),inset 0 0 55px rgb(255,255,255,.5),inset 0 0 2em rgb(255,20,147,.5), 0 0 20px rgb(0, 0, 255, 0.5), 0 0 10px #fff',
        height: 65,
        top: 3,
        color: "white"
    };
    const inActivateStyle = {
        backgroundColor: '#333',
        boxShadow: '1px 1px 4px 1px rgb(255, 255, 255,0.5),3.5px 3.5px 4px 1px rgb(0, 0, 255, 0.5)',
        color: "white"
    };
    const powerOffstyle = {
        color: 'grey',
        backgroundColor: '#333',
        boxShadow: '3px 3px 2px rgb(0, 0, 0,0.5)',
    };
    const powerOffClick = {
        color: 'grey',
        backgroundColor: '#333',
        height: '65',
        boxShadow: '0 0 3px rgb(0, 0, 0,0.5)',
        top: 3
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
            setPadStyle(activateStyle);
            setTimeout(() => setPadStyle(inActivateStyle), 100); 

        }else{
            // click effect for power off
            setPowerOff(powerOffClick);
            setTimeout(() => setPowerOff(powerOffstyle), 100);  
        }
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
    const [powerOff, setPowerOff] = useState(powerOffstyle);
    useEffect(()=> {
        document.addEventListener('keydown', handleKeyDown);
        return() => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    });

    return(
        
        <div className="drum-pad" id={id} onClick={handleClick} style={power ? padStyle : powerOff}>
            <audio className="clip" id={keyTrigger} src={audioUrl}></audio>{keyTrigger}
        </div>

    );
}

export default DrumPads;