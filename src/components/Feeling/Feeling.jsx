import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'; //sweetalert 2 import

function Feeling({copyFeedback}){

const dispatch = useDispatch();
const history = useHistory();


const advancePage = () => {

  history.push('/Understanding');
}
return (
    <div>
        <h1>How are you feeling  today?</h1>
        <button onClick={advancePage}>NEXT</button>
    </div>

)


}
export default Feeling;