import React from "react";
import ReactDOM from "react-dom/client"; // Import from 'react-dom/client'
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Create a root.
const rootElement = document.getElementById("root"); // Get the root element
const root = ReactDOM.createRoot(rootElement); // Create a root using createRoot

// Initial render: Render an element to the root.
root.render(
  
    <App />
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
