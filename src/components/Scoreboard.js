import React from "react";
import Stadistics from "./Stadistics";
import Stopwatch from "./Stopwatch";
import Player from "./Player";
import PlayerForm from "./PlayerForm";
import {Appcontext} from './Context'
const Scoreboard = () => {
    const context = React.useContext(Appcontext);
return (
<div className="scoreboard">

    <h1 className="scoreboard-title">Call Center - Goal Control</h1>
    
    <h2 className="scoreboard-subtitle">
        Record de cierres en creditos otorgados
    </h2>
    <div className="scoreboard-wrapper">
        <div className="scoreboard-header grid">
            <Stadistics />
            <Stopwatch />
        </div>
        <div className="scoreboard-content">
            {
            context.state.players
            .map((player, index ) =>
                <Player 
                key={index}
                index={index}
                name={player.name}
                score={player.points} />
                )
            }
        </div>

        <div className="scoreboard-footer">
            <PlayerForm />
        </div>
        
    </div>
</div>
);
}

export default Scoreboard;