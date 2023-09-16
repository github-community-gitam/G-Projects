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
    </div>
  );
}

export default App;
