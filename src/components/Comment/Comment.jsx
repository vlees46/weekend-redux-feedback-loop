import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'; //sweetalert 2 import

function Comments({copyFeedback}){

const dispatch = useDispatch();
const history = useHistory();


const advancePage = () => {

  history.push('/Understanding');
}
return (
    <div>
        <h1>Any comments you want to leave?</h1>
        <button onClick={advancePage}>NEXT</button>
    </div>

)


}
export default Comments;