import DrumPads from "./DrumPads";
import './DrumPads.scss'

const BankPad = ({currentBank, display, power}) => {
    
    const drumPads = currentBank.map((element) => {
        return(
            <DrumPads
                power={power}
                key={element.id}
                display={display} 
                keyCode={element.keyCode}
                keyTrigger={element.keyTrigger}
                id={element.id}
                audioUrl={element.url}  
            />
        )
    });
    return(
        <div className="pad-bank">{drumPads}</div>
    );
}
export default BankPad;