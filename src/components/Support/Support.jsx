import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'; //sweetalert 2 import

function Support({copyFeedback}){

const dispatch = useDispatch();
const history = useHistory();


const advancePage = () => {

  history.push('/Comments');
}

let [howYouSupported, setSupported] = useState('');

const submitSupported = (event) => {
  event.preventDefault();
  if ( 1 <= howYouSupported && 10 >= howYouSupported) {
    copyFeedback.howYouSupported = howYouSupported;
    console.log('This is how your feeling', copyFeedback);
    dispatch({
      type: 'ADD_SUPPORT', 
      payload: howYouSupported        
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
       <h1>How well are you being supported?</h1>

       <form onSubmit={submitSupported }>
                      <input class="numberInput" onChange={(event) => setSupported(event.target.value)}
                          value={howYouSupported}
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
export default Support;