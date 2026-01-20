import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
  const [xValue, setXValue] = useState(0);
  const [rotateValue, setRotateValue] = useState(0);

  const randomX = gsap.utils.random(-500, 500, 100);
  const randomRotate = gsap.utils.random(-360, 360, 30);

  const boxRef = useRef();

  useGSAP(() => {
    gsap.to(boxRef.current, {
      x: xValue,
      rotate:rotateValue,
      duration: 1,
    });
  },[xValue, rotateValue]);
  
  return (
    <main>
      <button
        onClick={() => {
          setXValue(randomX);
          setRotateValue(randomRotate)
        }}
      >
        Animate
      </button>
      <div ref={boxRef} className="box"></div>
    </main>
  );
};
export default App;
