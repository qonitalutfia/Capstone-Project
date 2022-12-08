import {BrowserRouter, Routes, Route,Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Header'
import Home from './pages/Home';
import Team from './pages/Team';
import Trainers from './pages/Trainers';
import Place from './pages/Place';
import Food from './pages/Food';

function App() {
  return (
        <BrowserRouter>
          <Navbar/>
            <Routes>  
              <Route path='/' element={<Home/>} />
              <Route path='/trainer' element={<Trainers />} />
              <Route path='/team' element={<Team />} />
              <Route path='/place' element={<Place />} />
              <Route path='/food' element={<Food />} />
            </Routes>
        </BrowserRouter>
    // <div className="App">
    // </div>
  );
}

export default App;
