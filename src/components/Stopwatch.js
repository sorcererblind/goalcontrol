import React from "react";
import {Appcontext} from "./Context";

class Stopwatch extends React.Component {
    static contextType=Appcontext;
    state = {
    elapsedTime:0,
    previusTime: 0,
    intervalId: null,
    };

    componentDidMount (){
       this.setState({ intervalId: setInterval(() => this.tick(),1000),});
    }

componentWillUnmount(){
    clearInterval(this.state.intervalId);
}

tick= () => {
if(this.context.state.isRunning) {
console.log("Iniciando");
    const now = Date.now(); 
    const time = this.state.elapsedTime;
    
    
    this.setState({
        elapsedTime: time + (now- this.state.previusTime),
        previusTime: now,
        })
    }
}
togglehandler = () => {
    const status = this.context.state.isRunning;
    this.context.statusGame(!status);
    this.setState({
    previusTime: Date.now(),
    });
}
reset = () => {
    this.setState({
        elapsedTime:0,
    })
    console.log("Reseteo");
}
    render() {
            return (
            <div className="stopwatch">
                <h2 className="scoreboard-subtitle">
                    Contador
                </h2>
                <span className="stopwatch-time">{Math.floor(this.state.elapsedTime/1000)}</span>
                <div className="stopwatch-controls">
                    <button className="btn handler" onClick={this.togglehandler}>
                        {this.context.state.isRunning ? 'Detener' : 'Iniciar'}
                    </button>
                    <button className="btn" onClick={this.reset}>Reiniciar</button>
                </div>
            </div>
            );
    }
}

export default Stopwatch;