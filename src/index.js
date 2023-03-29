import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/index.css';
import './i18n';
// import serviceWorker from './serviceWorker';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// serviceWorker.register();
