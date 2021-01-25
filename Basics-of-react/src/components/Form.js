import React, { useState } from "react";
import "./css/Form.css";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";

function Form(props) {
  const [loginData, setloginData] = useState({
    //object
    uname: "",
    psw: "",
  });
  const InputEvent = (e) => {
    const { name, value } = e.target;
    setloginData((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  function logIn() {
    if (loginData.uname === "rajan" && loginData.psw === "rajan03") {
      props.enterIn();
    } else {
      alert("Wrong Credentials");
    }
  }
  return (
    <>
      <div className="container-box">
        <div className="box-card">
          <h1>{props.heading}</h1>
          <div className="input-box">
            <span>
              <PersonIcon />
            </span>
            <input
              type="text"
              name="uname"
              value={loginData.uname}
              placeholder={props.pholder1}
              onChange={InputEvent}
            />
          </div>
          <div className="input-box">
            <span>
              <LockIcon />
            </span>
            <input
              type={props.input}
              name="psw"
              value={loginData.psw}
              placeholder={props.pholder2}
              onChange={InputEvent}
            />
          </div>
          <button className="action-btn" onClick={logIn}>
            {props.action}
          </button>
        </div>
      </div>
    </>
  );
}
export default Form;

// {props.action} props.pholder2} {props.input} {props.pholder1} {props.heading} props.enterIn();
