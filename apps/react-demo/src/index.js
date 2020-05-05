// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
// export const bootstrap = vueLifecycles.bootstrap;
// export const mount = vueLifecycles.mount;
// export const unmount = vueLifecycles.unmount;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// Note that SingleSpaContext is a react@16.3 (if available) context that provides the singleSpa props
import singleSpaReact from 'single-spa-react';
const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    App,
    errorBoundary(err, info, props) {
        // https://reactjs.org/docs/error-boundaries.html
        return (
            <div>This renders when a catastrophic error occurs</div>
        );
    },
});
serviceWorker.unregister();
export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;
