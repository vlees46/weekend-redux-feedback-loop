import { set } from 'express/lib/application';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'; //sweetalert 2 import

function Feeling({copyFeedback}){

  const dispatch = useDispatch();
  const history = useHistory();

// Allows the user to navigate to the next page Understanding
  const advancePage = () => {
     history.push('/Understanding');
  }

  let [howYouFeeling, setFeeling] = useState('');

  const submitFeeling = (event) => {
    event.preventDefault();
    if ( 1 <= howYouFeeling && 10 >= howYouFeeling) {
      copyFeedback.howYouFeeling = howYouFeeling;
      console.log('This is how your feeling', copyFeedback);
      dispatch({
        type: 'ADD_FEELING', 
        payload: howYouFeeling        
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
         <h1>How are you feeling  today?</h1>

         <form onSubmit={submitFeeling}>
                        <input class="numberInput" onChange={(event) => setFeeling(event.target.value)}
                            value={howYouFeeling}
                            type="number"
                            label="1 - 10"
                            style={{
                                textAlign: 'left' 
                            }}
                        />
                        <div className="nextButton">
                            <button
                                variant="contained" size="small" color="secondary" type="submit">Next</button>
                        </div>
                        
                    </form>
         
      </div>




  )


}
export default Feeling;