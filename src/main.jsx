import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../public/css/styles.css";
import App from "./App.jsx";



//   [
//   {
//     path: "/",
//     element: <Home />,
//     errorElement: <NotFound />,
//   },
//   {
//     path: "works",
//     element: <WorksPage />,
//   },
//   // TODO:fix routing and the dynamic pages rendering
//   {
//     path: "works/page1",
//     element: <Page1 />,
//   },
//   {
//     path: "works/page2",
//     element: <Page2 />,
//   },
//   {
//     path: "works/page3",
//     element: <Page1 />,
//   },
//   {
//     path: "works/page4",
//     element: <Page1 />,
//   },
//   {
//     path: "about",
//     element: <About />,
//   },
//   {
//     path: "contact",
//     element: <Contact />,
//   },
// ]
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
