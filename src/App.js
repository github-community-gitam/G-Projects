import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterScreen from "./components/RegisterScreen";
import LoginScreen from './components/LoginScreen';
import Discover from "./pages/Discover";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Discover />} />
            <Route path='/register' element={<RegisterScreen/>}/>
            <Route path='/login' element={<LoginScreen/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
