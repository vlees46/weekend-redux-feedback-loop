import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'; //sweetalert 2 import

function Review({copyFeedback}){

const dispatch = useDispatch();
const history = useHistory();


const advancePage = () => {

  history.push('/Thankyou');
}
return (
    <div>
        <h1>Review Your Feedback</h1>
        <button onClick={advancePage}>SUBMIT</button>
    </div>

)


}
export default Review;