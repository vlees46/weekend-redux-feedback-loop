import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import './App.css';

//Import Componenets
import Header from '../Header/Header.jsx'
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx'

function App() {

  // Create a copy of the app 

  let copyFeedback = {};

  const dispatch = useDispatch();



return (


  <div className='App'>
    <Router>

      <Header />

        <Route path='/' exact>
         <Feeling copyFeedback={copyFeedback} />
       </Route>

       <Route path='/Understanding' exact>
         <Understanding copyFeedback={copyFeedback} />
       </Route>

   </Router>
  </div>

  );
  
}

export default App;
