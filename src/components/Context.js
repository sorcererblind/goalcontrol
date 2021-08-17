import React from "react";
export const Appcontext = React.createContext()

class Context extends React.Component {
state = {
    isRunning: false,
    players: [],
};
statusGame = (status) => {

    this.setState({ isRunning: status});
}
addPlayer = (name) => {
    const player= {
        name,
        points: 0,
    }
    this.setState({
        players: [...this.state.players, player],
    })
};
increment = (playerIndex)  => {
const players = this.state.players;
players[playerIndex].points +=1;
console.log(players[playerIndex].points);
    this.setState({
        players: [...players],
    });
}

decrement = (playerIndex)  => {
    const players = this.state.players;
    if(players[playerIndex].points>0){
        players[playerIndex].points -=1;
        console.log(players[playerIndex].points);
            this.setState({
                players: [...players],
            })
        }
    }

render () {
    const totalPoints = this.state.players.reduce((total,player) => total + player.points, 0);
    
    const hiScore = () => {
        const scores = this.state.players.map(p => p.points);
        const maxscore = Math.max(...scores);
        if(maxscore)
        {
            return maxscore;
        }
        else{

            return null;
        }
    };
    const context = {
        statusGame: this.statusGame,
        state: this.state,
        addPlayer: this.addPlayer,
        decrement: this.decrement,
        increment: this.increment,
        totalPoints,
        hiScore: hiScore(),
    };
    return <Appcontext.Provider value= {context}>
        {this.props.children}
        </Appcontext.Provider>
    };
}
export default Context;