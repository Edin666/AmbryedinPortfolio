import React from 'react';
import ReactDOM from 'react-dom/client';
import './App'; // Import minimal global base styles (or change to './App.css' if you put all base styles there)
import App from './App'; // Import your main component (which contains all others)

// 1. Get the root DOM element where the app will be rendered (from public/index.html)
const container = document.getElementById('root');

// 2. Create the React 18 root instance
const root = ReactDOM.createRoot(container);

// 3. Render the application (App component) inside the root
root.render(
  // React.StrictMode is a tool for highlighting potential problems in an application.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);