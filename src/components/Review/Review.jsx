import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'; //sweetalert 2 import

function Review() {

const dispatch = useDispatch();
const reduxStore = useSelector(store => store.feedbackReducer);
const history = useHistory();

console.log('store is in', reduxStore);

const startOver = () => {
  history.push('/');
}

const thankyou = () => {
  history.push('/Thankyou');
}

const postDatabse = () => {
  console.log('Sending data to database', reduxStore);
    if(reduxStore.feeling === '' || reduxStore.understanding === '' || reduxStore.support === ''){
      Swal.fire({
        icon: 'error',
        title: 'Hold on HOSS',
        text: ' Please missed something',
        confirmButtonText: 'Start Over'
      })
      startOver();
    } else {
    console.log('we are past the ELSE');
   axios({
     method: 'POST',
     url: '/feedback',
     data: reduxStore,
   }).then(response => {
     Swal.fire({
        icon: 'success',
        title: 'Feedback Success!',
        position: 'center',
        text: ' Please missed something',
       showConfirmButton: false,
       timer: 1300
   })
     thankyou();
    }).catch((error) => {
    console.log('error on client side error error check!!', error)
    });
    }
  }


  return (
  
    <div className='review'>
        <h1>Review Your Feedback</h1>
        <h5>Feeling: <b>{reduxStore.feeling}</b></h5>
        <h5>Understanding: <b>{reduxStore.understanding}</b></h5>
        <h5>Support: <b>{reduxStore.support}</b></h5>
        <h5 id="reviewComments">Comments: <b>{reduxStore.comments}</b></h5>
        <button
       variant="contained" size="small" color="secondary" onClick={() => postDatabse(reduxStore)}>Confirm</button>
     </div>

  )

  
}
export default Review;