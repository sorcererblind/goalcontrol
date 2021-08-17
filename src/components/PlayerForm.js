import React from "react";
import { Appcontext } from "./Context";
const PlayerForm = () => {
    const context = React.useContext(Appcontext);
    const [playerName, setPlayername] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(playerName!=='') {
            context.addPlayer(playerName);
            setPlayername('');
            console.log("" + playerName);
            
        }
    }
    const handleChange = (e) => {
        setPlayername(e.target.value);
    }
return (
<form className="player-form" onSubmit={handleSubmit}>

<input
type="text"
className="player-input"
placeholder="Nombre del asesor"
onChange={(e) => handleChange(e)}
value={playerName} />

<button type="submit" className="submit-button">Nuevo asesor</button>
</form>

);
}

export default PlayerForm;