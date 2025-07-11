import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "./Context/ThemeContext";
import App from "./app";
import "./index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
