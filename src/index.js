import './assets/css/index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleWare from 'redux-saga'
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './shared/store/rootReducer';
import rootSaga from './shared/store/rootSaga'

var sagaMiddleWare = createSagaMiddleWare();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(rootSaga)
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));