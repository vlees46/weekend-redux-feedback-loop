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
return (
    <div>
        <h1>How well are you understanding the content?</h1>
        <button onClick={advancePage}>NEXT</button>
    </div>

)


}
export default Understanding;