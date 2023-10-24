import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterScreen from "./components/RegisterScreen";
import LoginScreen from './components/LoginScreen';

import './App.css';
import LandingScreen from "./components/LandingScreen";

function App() {
  
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/register' element={<RegisterScreen/>}/>
            <Route path='/login' element={<LoginScreen/>}/>
            <Route path="/LandingScreen" element={<LandingScreen/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;