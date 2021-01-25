import React from "react";
import "./css/About.css";
import Sidebar from "./Sidebar";

const About = () => {
  return (
    <>
      <Sidebar />
      <div className="about-section">
        <div className="about-container">
          <div className="row">
            <div class="abt-title">
              <h3>About Project</h3>
              <hr />
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="abt-text">
              <h3>The Github Account Finder</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                modi illo vel accusamus omnis vitae quis, earum, ducimus ad
                repudiandae perferendis? Sint illum, placeat autem maxime libero
                accusamus nihil minima. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Dicta nam aperiam hic nobis laborum rerum
                similique excepturi praesentium! Earum, minima. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Cumque modi illo
                vel accusamus omnis vitae quis, earum, ducimus ad repudiandae
                perferendis? Sint illum, placeat autem maxime libero accusamus
                nihil minima. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Dicta nam aperiam hic nobis laborum rerum similique
                excepturi praesentium! Earum, minima.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="personal-info">
              <div className="row">
                <div className="info-item">
                  <p>
                    from : <span>5 nov 2020</span>
                  </p>
                </div>
                <div className="info-item">
                  <p>
                    To : <span>5 nov 2020</span>
                  </p>
                </div>
                <div className="info-item last2nd-item">
                  <p>
                    Solved Problem :
                    <span>
                      To find important details from pesonal github. Lorem ipsum
                      dolor sit amet consectetur adipisicing elit. Cumque modi
                      illo vel accusamus omnis vitae quis, earum, ducimus ad
                      repudiandae perferendis? Sint illum, placeat autem maxime
                      libero accusamus nihil minima.
                    </span>
                  </p>
                </div>
                <div className="info-item last-item">
                  <p>
                    Contributors :
                    <span>Rajan, Aman, Prem, Shiv, Sukhjinder</span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="buttons">
                  <a href="#" className="btn">
                    Live View
                  </a>
                  <a href="#" className="btn">
                    GitHub Repo
                  </a>
                </div>
              </div>
            </div>
            <div className="skills-used">
              <div className="skill-item">
                <h5>JavaScript</h5>
                <div className="use-prnct">
                  <div className="prcnt-bar" style={{ width: "76%" }}></div>
                </div>
                <div className="skill-percent">76%</div>
              </div>
              <div className="skill-item">
                <h5>JavaScript</h5>
                <div className="use-prnct">
                  <div className="prcnt-bar"></div>
                </div>
                <div className="skill-percent">76%</div>
              </div>
              <div className="skill-item">
                <h5>JavaScript</h5>
                <div className="use-prnct">
                  <div className="prcnt-bar"></div>
                </div>
                <div className="skill-percent">76%</div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="img-title">
              <h3>ScreenShots from the Project</h3>
            </div>
            <div class="img-container"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
