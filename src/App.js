import React, { useRef, useEffect } from "react";
import gsap, { Power4 } from "gsap";

import Carousel from "./components/Carousel/Carousel";
import "./App.scss";

function App() {
  const app = useRef();

  useEffect(() => {
    const elem = app.current;
    const text = elem.querySelectorAll(".text-in");

    text.forEach((element) => {
      gsap.to(element, {
        autoAlpha: 1,
        y: 0,
        duration: 1.85,
        delay: 0.3,
        ease: Power4,
      });
    });
  }, [app]);

  return (
    <div className="app" ref={app}>
      <div className="app__inner">
        <h1 className="app__inner-title">
          <div className="text-in">What are you</div> <br />
          <div className="text-in">
            <strong>here to do?</strong>
          </div>
        </h1>
        <Carousel />
      </div>
    </div>
  );
}

export default App;
