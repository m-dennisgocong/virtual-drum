import { useEffect, useState } from 'react';

const DrumPads = ({keyCode,keyTrigger,id,audioUrl, display, power}) => {

    // light effects when power state is on

    const activateStyle = { // activated style when drum pad is hit/play
        backgroundColor: 'rgb(125, 249, 255,.5)',
        boxShadow: 'inset 0 0 35px rgb(0, 0, 255, 0.5),inset 0 0 55px rgb(255,255,255,.5),inset 0 0 2em rgb(255,20,147,.5), 0 0 20px rgb(0, 0, 255, 0.5), 0 0 10px #fff',
        height: 65,
        top: 3,
        color: "white"
    };
    const inActivateStyle = { // style for idle drum pads
        backgroundColor: '#333',
        boxShadow: '1px 1px 4px 1px rgb(255, 255, 255,0.5),3.5px 3.5px 4px 1px rgb(0, 0, 255, 0.5)',
        color: "white"
    };

    // style when power state is off

    const powerOffstyle = { // idle style for drum pads
        color: 'grey',
        backgroundColor: '#333',
        boxShadow: '3px 3px 2px rgb(0, 0, 0,0.5)',
    };
    const powerOffClick = { // activated style when drum pad is hit/play 
        color: 'grey',
        backgroundColor: '#333',
        height: '65',
        boxShadow: '0 0 3px rgb(0, 0, 0,0.5)',
        top: 3
    };

    // change drum pad style to idle
    const removeStyle = () => {
        if(power){ 
            setPadStyle(inActivateStyle); 
        }else{
            setPowerOff(powerOffstyle);
        }
    }

    // play the audio
    const playSound = () => {
        if(power){
            const sound = document.getElementById(keyTrigger);
            sound.currentTime = 0;
           
            setTimeout(() => {
                sound.play();
            }, 200);

            // display the name of triggered drum pad
            display(id);
            // change style of triggered drum pad  
            setPadStyle(activateStyle);

        }else{
            // click effect for power off
            setPowerOff(powerOffClick);  
        }
    }

    // onclick
    const handleClick = () => {
        playSound();
        setTimeout(() => removeStyle(), 100);
    }

    // keydown
    const handleKeyDown = (event) => {
        if(event.keyCode === keyCode && !event.repeat){
            playSound();
        }
    }

    const handleKeyUp = (event) => {
        if(event.keyCode == keyCode){
            setTimeout(() => removeStyle(), 100); 
        }
    }
    
    const [padStyle, setPadStyle] = useState(inActivateStyle);
    const [powerOff, setPowerOff] = useState(powerOffstyle);
    
    useEffect(()=> {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
        return() => {
            document.removeEventListener('keydown', handleKeyDown);
            document.addEventListener('keyup', handleKeyUp);
        };
    });

    return(
        
        <div className="drum-pad" id={id} onClick={handleClick} style={power ? padStyle : powerOff}>
            <audio className="clip" id={keyTrigger} src={audioUrl}></audio>{keyTrigger}
        </div>

    );
}

export default DrumPads;