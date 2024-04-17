import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Searchbar } from './components/molecules/Searchbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/molecules/Navbar";
import Home from "./pages/Home";
import User from "./pages/User";
import Game from "./pages/Game";
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
    <Searchbar placeholder="hej" styling=""></Searchbar>
  </div>
  );
}
export default App;
