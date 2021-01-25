import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Slideshow from "./components/SlideShow";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Portfolio} />
        <Route exact path="/add-project" component={Slideshow} />
      </Switch>
      {
        // <Home />
        /* project cards */
        /* <div className="projects">
        <Card name="GitHub Account Finder" number="01" progress="87%" />
        <Card name="The Pig Game" number="02" progress="100%" />
      </div> */
      }
      {/* add projects 
       <Slideshow />  */}
    </>
  );
};

export default App;
