import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import singleSpaReact from 'single-spa-react';
const reactLifecycles = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,
    errorBoundary(err, info, props) {
        return (
            <div className="h-16 flex items-center justify-between px-6 bg-primary text-white">
                Error
            </div>
        );
    },
    domElementGetter
});

export const bootstrap = reactLifecycles.bootstrap;
export const mount = reactLifecycles.mount;
export const unmount = reactLifecycles.unmount;

function domElementGetter() {
    let el = document.getElementById("navbar");
    if (!el) {
        el = document.createElement("nav");
        el.id = "navbar";
        el.className = "topnav";
        document.body.appendChild(el);
    }
    return el;
}
