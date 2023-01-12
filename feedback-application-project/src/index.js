import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

// we want to render our main app component as the first argument to ReactDOM.render
root.render(
<React.StrictMode>
    <App />
</React.StrictMode>
);

