import React from "react";
import './App.css';

import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/login' element={<LoginScreen/>}/>
          </Routes>
      </BrowserRouter>

import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" ></Route>
        <Route path="/login" ></Route>
        <Route path="/register" ></Route>
      </Routes>


    </div>
  );
}

export default App;
