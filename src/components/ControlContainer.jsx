import { useState } from "react";
const ControlContainer = () => {
    const [volume, setVolume] = useState(5);
    return(<>
        <input type="range" name="volume" min={0} max={10} value={volume} onChange={(event)=> setVolume(event.target.value)}/>
        <div className="switch">
        </div>
    </>);
}
export default ControlContainer;