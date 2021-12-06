import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Comments({copyFeedback}){
  
  const dispatch = useDispatch();
  const history = useHistory();
  
  
  const advancePage = () => {
    
    history.push('/Review');
  }
  
  let [howYouComment, setComments] = useState('');
  
  const submitComments = (event) => {
    event.preventDefault();
    copyFeedback.howYouComment = howYouComment;
    console.log('This are your comments', copyFeedback);
    dispatch({
      type: 'ADD_COMMENTS', 
      payload: howYouComment        
    });
    
    advancePage();
  }
  
  
  
  
  return (
    <div>
    <h1>Any comments you want to leave?</h1>
    
    <form onSubmit={submitComments}>
    <input class="numberInput" onChange={(event) => setComments(event.target.value)}
    value={howYouComment}
    type="text"
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
  export default Comments;