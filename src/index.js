import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App/App';
import thunkMiddleware from 'redux-thunk';
import reportWebVitals from './reportWebVitals';
import combinedReducer from "./redux/combinedReducer";
import {applyMiddleware, createStore} from "redux";
import {createLogger} from "redux-logger/src";
import {Provider} from "react-redux";

const reducer = combinedReducer;

const loggerMiddleware = createLogger({
    collapsed: (getState, action, logEntry) => {
        return (logEntry) && !(logEntry).error;
    },
    predicate: () => {
        return true;
    },
    duration: true,
    timestamp: false,
    diff: true,
});

const store = createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

const render = (Component) => {
    return ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <Component/>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root'),
    );
};

render(App);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
