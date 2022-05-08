// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';

// ReactDOM.render(<App />, document.getElementById('root'));


import { render } from "react-dom";
import App from './App';
import './index.css';

import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { rootReducer, initialState } from "./redux/reducers";
import thunkMiddleware from "redux-thunk";

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
        thunkMiddleware // lets us dispatch() functions
    )
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
