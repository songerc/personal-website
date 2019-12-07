import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BreakpointProvider} from './components/Utilities/Breakpoint.js'

import * as serviceWorker from './serviceWorker';

const queries = {
    xs: '(max-width: 320px)',
    sm: '(max-width: 720px)',
    md: '(max-width: 1024px)',
    or: '(orientation: portrait)' // can check orientation as well
}

ReactDOM.render(
<BreakpointProvider queries = {queries}>
    <App />
</BreakpointProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
