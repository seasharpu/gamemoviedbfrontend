import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/molecules/Navbar";
import Home from "./pages/home";
import User from "./pages/user";
import Game from "./pages/game";
import Franchise from "./pages/Franchise";
import Fourohfour from "./pages/Fourohfour";

function App() {
  return (
    <div className="App">   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="user" element={<User />} />
          <Route path="game" element={<Game />} />
          <Route path="franchise" element={<Franchise />} />
          <Route path="*" element={<Fourohfour />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}
export default App;
