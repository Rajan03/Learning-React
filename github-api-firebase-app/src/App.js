import React, { useState, useEffect, useContext } from "react";

// CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// React Router
import { BrowserRouter, Switch, Link, Route } from "react-router-dom";

// Context
import { UserContext } from "./context/UserContext";

// Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// Firebase
import firebase from "firebase/app";
import "firebase/auth";

// Components
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUo";
import PageNotFound from "./pages/PageNotFound";
import Header from './layout/Header'
import Footer from './layout/Footer'

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <ToastContainer />
      <UserContext.Provider value ={{user, setUser}}>
        <Header/>
        <Switch>
          <Route exact path = '/' component = {Home}/>
          <Route path = '/signin' component = {SignIn}/>
          <Route path = '/signup' component = {SignUp}/>
          <Route path = '*' component = {PageNotFound}/>
        </Switch>
        <Footer/>
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
