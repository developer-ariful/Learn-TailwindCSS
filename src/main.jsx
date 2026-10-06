// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import router from "./Routes";



const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
