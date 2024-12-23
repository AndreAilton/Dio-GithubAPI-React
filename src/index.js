import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/home';
import GlobalStyle from './global';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);


