import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

const modal = ReactDOM.createPortal(document.getElementById('modal'));
modal.render(
  <App />
)
