import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Form from "./components/Form";

ReactDOM.render(
  <BrowserRouter>
    {/* <Form
      action="LogIn"
      pholder2="Password"
      input="password"
      pholder1="Username"
      heading="LogIn"
      enterIn={signIn}
    /> */}
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
function signIn() {
  console.log("clicked");
}
// function signIn() {
//   console.log("clicked");
// }
