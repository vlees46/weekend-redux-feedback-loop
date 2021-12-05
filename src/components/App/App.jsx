import { useDispatch } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import './App.css';

//Import Componenets
import Header from '../Header/Header.jsx'
import Feeling from '../Feeling/Feeling.jsx';
import Understanding from '../Understanding/Understanding.jsx'
import Support from '../Support/Support.jsx'
import Comments from '../Comment/Comment.jsx'
import Review from '../Review/Review.jsx'
import Thankyou from '../ThankYou/Thankyou.jsx'

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

       <Route path='/Support' exact>
         <Support copyFeedback={copyFeedback} />
       </Route>

       <Route path='/Comments' exact>
         <Comments copyFeedback={copyFeedback} />
       </Route>

       <Route path='/Review' exact>
         <Review copyFeedback={copyFeedback} />
       </Route>

       <Route path='/Thankyou' exact>
         <Thankyou copyFeedback={copyFeedback} />
       </Route>

   </Router>
  </div>

  );
  
}

export default App;
