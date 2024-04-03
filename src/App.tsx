import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Searchbar } from './components/molecules/Searchbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Searchbar placeholder="game, soundtrack..." styling="" type="gameAPI"></Searchbar>
      </header>
    </div>
  );
}

export default App;
