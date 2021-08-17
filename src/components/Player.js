import React from "react";
import { Appcontext } from "./Context";
const Player = ({name, score, index}) => {
const context= React.useContext(Appcontext);
return (
<div className="player grid">
    <div className="player-remove"></div>
<div className="player-name">
    { context.hiScore === score ? <small style={{
        padding: '3px',
        fontSize: '10px',
        borderRadius: '4px',
    }}>WIN</small> : null  }
    {name}
</div>
    <div className="player-controls grid">
        <div className="decrement">
            <button className="btn"
            disabled={!context.state.isRunning}
            onClick={() => context.decrement(index)}
            >-</button>
        </div>
        
    <span className="score" data-testis="score">{score}</span>
        <div className="increment">
            <button className="btn"
            disabled={!context.state.isRunning}
            onClick={() => context.increment(index)}
            >+</button>
        </div>
    </div>
</div>
);
}

export default Player;