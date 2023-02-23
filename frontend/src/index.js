import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider, SecureApp } from "@asgardeo/auth-react";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { default as config } from "./config.json";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <script
      src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
      crossOrigin="true"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
      crossOrigin="true"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
      crossOrigin="true"
    ></script>
    <AuthProvider config={config} fallback={<div>Loading...</div>}>
      <SecureApp>
        <App />
      </SecureApp>
    </AuthProvider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
