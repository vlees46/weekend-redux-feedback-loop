import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'; //sweetalert 2 import

function Understanding({copyFeedback}){
  
  const dispatch = useDispatch();
  const history = useHistory();
  
  
  const advancePage = () => {
    history.push('/Support');
  }
  
  let [howYouUnderstanding, setUnderstanding] = useState('');
  
  const submitUnderstand= (event) => {
    event.preventDefault();
    if ( 1 <= howYouUnderstanding && 10 >= howYouUnderstanding) {
      copyFeedback.howYouUnderstanding = howYouUnderstanding;
      console.log('This is how your feeling', copyFeedback);
      dispatch({
        type: 'ADD_UNDERSTANDING', 
        payload: howYouUnderstanding        
      });
      advancePage();
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Hold on HOSS',
        text: ' Please enter a value from 1 to 10, Have an execellent day',
      })
      return;
    }
    
    
  }
  
  
  return (
    <div>
    <h1>How well are you understanding the content?</h1>
    
    <form onSubmit={submitUnderstand}>
    <input class="numberInput" onChange={(event) => setUnderstanding(event.target.value)}
    value={howYouUnderstanding}
    type="number"
    label="1 - 10"
    style={{
      textAlign: 'left' 
    }}
    />
    <div class="nextButton">
    <button
    variant="contained" size="small" color="secondary" type="submit">Next</button>
    </div>
    
    </form>
    
    </div>
    
    
    
    
    )
    
    
    
  }
  export default Understanding;