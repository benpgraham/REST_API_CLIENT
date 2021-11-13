import React from 'react';
import './App.css';
import { BrowserRouter as Router, Redirect, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
          <Routes>
            <Route path ='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
