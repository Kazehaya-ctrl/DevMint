import React from "react";
import "./AnimatedCubes.scss";

const n = 7; // Number of layers
const q = Math.pow(n, 3); // Total cubes

const AnimatedCubes = () => {
  const balls = [];

  for (let i = 0; i < q; i++) {
    let x = ~~(100 + 300 * Math.random());
    let y = ~~(100 + 300 * Math.random());
    let zf = +(1 + 3 * Math.random()).toFixed(2);

    balls.push(
      <div
        key={i}
        className="ball"
        style={{
          "--x": `${x}%`,
          "--y": `${y}%`,
          "--zf": zf,
        } as React.CSSProperties} 
      ></div>
    );
  }

  return (
    <div className="a3d" style={{ "--n": n } as React.CSSProperties}>
      {balls}
    </div>
  );
};

export default AnimatedCubes;
