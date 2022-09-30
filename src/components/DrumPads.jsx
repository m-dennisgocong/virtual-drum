import './DrumPads.scss';
const DrumPads = ({currentBank}) => {

    const clickPad = (event) => {
        console.log("Click!");
    }
    
    const drumPads = currentBank.map(element => 
        <li key={element.keyTrigger} id={element.id} className="drum-pad" onClick={clickPad}><audio id={element.keyTrigger} className="clip" src={element.url} />{element.keyTrigger}</li>
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