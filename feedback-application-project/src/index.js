import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';

// we want to render our main app component as the first argument to ReactDOM.render
ReactDOM.render(
<React.StrictMode>
    <App />
</React.StrictMode>, document.getElementById('root'));

