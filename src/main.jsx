import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BotsProvider } from "./context/bot_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BotsProvider>
      <App />
    </BotsProvider>
  </React.StrictMode>
);
