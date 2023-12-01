import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./root";
import RootConext from "./context";
// import 'antd/dist/antd.css';

   
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootConext>
      <Root />
    </RootConext>
  </React.StrictMode>
);
