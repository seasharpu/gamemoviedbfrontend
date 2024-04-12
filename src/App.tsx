import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { AIPopupTool } from './components/home/AIPopupTool';

function App() {

  //handles the display of AITool
  const [AItoolOpen, setAItoolOpen] = useState(false);
  const handleClose = () => {setAItoolOpen(false)}
  const handleOpen = () => {setAItoolOpen(true)}

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
        <button onClick={handleOpen}>Klicka här</button>
        <AIPopupTool isAIToolOpen={AItoolOpen} handleClose={handleClose}></AIPopupTool>
      </header>
    </div>
  );
}

export default App;
