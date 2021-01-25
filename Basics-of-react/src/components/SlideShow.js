import React from "react";
import "./css/SlideShow.css";
import Sidebar from "./Sidebar";

function Slideshow() {
  return (
    <>
      <Sidebar />
      <div className="slides">
        <div className="slide-content">
          <div className="slide s1 a">content 1</div>
          <div className="slide s2 b">content 2</div>
          <div className="slide s3 c">content 3</div>
        </div>
        <div className="slide-dots">
          <input
            type="radio"
            className="navigate dot1"
            name="slider"
            title="slide1"
            // checked="checked"
            //  onclick={slide1()}
          />
          <input
            type="radio"
            name="slider"
            title="slide2"
            className="navigate dot2"
            // onclick={slide2()}
          />
          <input
            type="radio"
            name="slider"
            title="slide2"
            className="navigate dot3"
            // onclick={slide3()}
          />
        </div>
      </div>
    </>
  );
}
// function slide1() {

// }
export default Slideshow;
