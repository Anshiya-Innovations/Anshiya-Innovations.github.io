import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Import CSS Design System in correct cascade order
import './styles/variables.css';
import './styles/reset.css';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
