import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Library from "./chapter_03/Library";
import Clock from "./chapter_04/clock";
import CommentList from "./chapter_05/CommentList";
import StateExample from "./03/StateExample";

const root = ReactDOM.createRoot(document.getElementById("root"));

// setInterval(() => {
//   root.render(
//     <React.StrictMode>
//       <Clock />
//     </React.StrictMode>
//     // document.getElementById("root")
//   );
// }, 1000);

root.render(
  <React.StrictMode>
    <StateExample/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
