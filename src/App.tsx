import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Searchbar } from './components/molecules/Searchbar';
import { Soundtrack } from './components/games/Soundtrack';

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
        <Searchbar placeholder="hej" styling=""></Searchbar>
        <Soundtrack title="titel feiwkfew fwefnwef we gweg ewgr g w weg j wr gerj gwkgwg" composer="composer" thumbnail={"https://images.unsplash.com/photo-1609931386751-940a91933d9c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}></Soundtrack>
      </header>
    </div>
  );
}

export default App;
