import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App'
import reducers from './reducers/index'

import axios from 'axios';

window.axios = axios;
const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

//const survey = {title: 'title', subject: 'this is subject', recipients :'sahil36468@gmail.com', body:'this is a body guys'};


ReactDOM.render(
<Provider store = {store}>
    <App/>
</Provider>, 
document.querySelector('#root'));



