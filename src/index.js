import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import { createStore, combineReducers, applyMiddleware } from 'redux';


let defaultStore = {
     feeling: '',
     understanding: '',
     support: '',
     comments: ''
}
console.log(defaultStore);

// Create reducer, manages all change of state from various components

const feedbackReducer = (state = defaultStore, action) => {
    if (action.type === "ADD_FEELING") {
        return {...state, feeling: action.payload };
    } 
    else if (action.type === "ADD_UNDERSTANDING") {
        return {...state, understanding: action.payload };
    }
    else if (action.type === "ADD_SUPPORT") {
        return {...state, support: action.payload };
    }
    else if (action.type === "ADD_COMMENTS") {
        return {...state, comments: action.payload };
    }
    return state;
}

console.log(feedbackReducer);

const storeInstance = createStore(
    combineReducers(
        {
            feedbackReducer
        }

    ),
         applyMiddleware(logger)
);

ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>
    , document.getElementById('root'));
registerServiceWorker();
