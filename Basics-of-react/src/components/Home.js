import React from "react";
import "./css/Home.css";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
    <>
      <div class="home-page">
        <Sidebar />
        <div class="home-content">
          <div class="home-container">
            <img src="https://picsum.photos/200" />
            <br />
            <br />
            <h2>Rajan Verma</h2>
          </div>
          <br />
          <div class="home-social">
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
