import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Routes from "./routes/routes";
import { ContextProvider } from "./contexts/ContextProvider";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={Routes} />
      <ToastContainer />
    </ContextProvider>
  </React.StrictMode>
);
