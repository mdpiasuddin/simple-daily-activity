import React from "react";
import "./Breaktime.css";
const BreakeTime = (props) => {
  return (
    <div className="break-time">
      <div className="time">
        <p>
          <span onClick={() => props.hande(10)}>10</span>m
        </p>
      </div>
      <div className="time">
        <p>
          <span onClick={() => props.hande(20)}>20</span>m
        </p>
      </div>
      <div className="time">
        <p>
          <span onClick={() => props.hande(50)}>30</span>m
        </p>
      </div>
      <div className="time">
        <p>
          <span onClick={props.hande}>40</span>m
        </p>
      </div>
    </div>
  );
};

export default BreakeTime;
