import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import './App.css';

//Import Componenets
import Header from '../Header/Header.jsx'

function App() {

return (


  <div className='App'>
  <Router>
    <Header />



  </Router>
  </div>
  )
  
}

export default App;
