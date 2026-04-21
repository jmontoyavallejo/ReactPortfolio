import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/**
 * Boots the React app into the root element.
 * @returns {void} No return value.
 */
const boot = () => {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    return;
  }

  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

boot();
