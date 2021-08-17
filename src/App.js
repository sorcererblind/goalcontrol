import React from 'react';
import './scoreboard.css';
import Scoreboard from './components/Scoreboard';
import Context from "./components/Context";

function App() {
  return (
      <Context>
          <div className="App">
            <Scoreboard />
          </div>
      </Context>
  );
}

export default App;
