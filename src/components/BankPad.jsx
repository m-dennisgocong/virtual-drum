import DrumPads from "./DrumPads";
import './DrumPads.scss'

const BankPad = ({currentBank, display}) => {
    
    const drumPads = currentBank.map((element) => {
        return(
            <DrumPads
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