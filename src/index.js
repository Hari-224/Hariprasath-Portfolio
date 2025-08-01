import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Google font (Optional: install with `npm install @fontsource/poppins`)
import "@fontsource/poppins";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* Suspense fallback loader */}
    <Suspense fallback={<div className="page-loader">Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);

// Log performance results
reportWebVitals(console.log);
