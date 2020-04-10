import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import * as serviceWorker from 'serviceWorker';
import axios from 'axios';
import { configureStore } from 'crud/modules/store';

import App from 'App';
import config from 'config';

axios.defaults.baseURL = config.baseURLApi;
axios.defaults.headers.common['Content-Type'] = "application/json";
const token = localStorage.getItem('token');
if (token) {
    axios.defaults.headers.common['Authorization'] = "Bearer " + token;
}

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
