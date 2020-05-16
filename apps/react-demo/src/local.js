import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Note that SingleSpaContext is a react@16.3 (if available) context that provides the singleSpa props
console.log('local')
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
serviceWorker.unregister();