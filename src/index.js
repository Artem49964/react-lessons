import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";


const baseReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INC':
            return ++state
        case 'DEC':
            return --state
        case 'RES':
            return 0
        default:
            return state
    }
    return state
}


const store = createStore(baseReducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
