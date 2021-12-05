import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2'; //sweetalert 2 import

function Thankyou(){

const dispatch = useDispatch();
const history = useHistory();


const advancePage = () => {

  history.push('/');
}
return (
    <div>
        <h1>Thank You!</h1>
        <button onClick={advancePage}>NEXT</button>
    </div>

)


}
export default Thankyou;