import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterScreen from "./pages/RegisterScreen";

function App() {
  return (
    <div className="App">
    
<BrowserRouter>
<Routes>
  <Route path='/register' element={<RegisterScreen/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
