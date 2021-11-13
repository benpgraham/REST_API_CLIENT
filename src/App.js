import React from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Routes/Home/Home';
import Login from './Routes/Login/Login';

const App = () => {
  return (
    <div className="App">
      <header>
          <Header />
        </header>
        <main>
        <Router>
            <Routes>
              <Route path ='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
            </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
