import React from "react";
import { useState, useEffect } from "react";
import imge from "../../../src/images/pias1 (2).jpg";

import "./Right.css";
import BreakeTime from "./BreakeTime";
import Completemsg from "./Completemsg";

const Right = (props) => {
  // const [activeTime, setActiveTime] = useState(0);
  const a = props.cart;
  let b = 0;
  a.map((item) => (b = b + parseInt(item.time)));
  const [brektime, setBrektime] = useState(0);
  const handleClick = (num) => {
    setBrektime(num);
  };
  const hndletoast = () => {
    <Completemsg></Completemsg>;
  };

  return (
    <>
      <div className="profile">
        <div className="profile-img ">
          <img src={imge} alt="" className="img-fluid" />
        </div>
        <h5 className="d-inline name">Md Pias Uddin</h5>

        <span className="address">Dhaka,Bangladesh</span>
      </div>
      <div className="personal-info mt-5 p-4 d-flex justify-content-between">
        <div className="info">
          <h5>60kg</h5>
          <p>Weight</p>
        </div>
        <div className="info">
          <h5>5.5</h5>
          <p>height</p>
        </div>
        <div className="info">
          <h5>24years</h5>
          <p>Age</p>
        </div>
      </div>
      <h2 className="mt-5 mb-3">Add a Break</h2>
      <BreakeTime hande={handleClick}></BreakeTime>
      <h2 className="mt-5 mb-3">Activites Detailes</h2>
      <div className="time-cal d-flex w-100 justify-content-between p-3 mb-2 ">
        <p>Activites Time</p>
        <p>{b} m</p>
      </div>
      <div className="time-cal d-flex w-100 justify-content-between p-3 mb-4 ">
        <p>Break Time</p>
        <p>{brektime}m</p>
      </div>
      <button className="btn btn-primary ms-5" onClick={hndletoast}>
        Activity Completed
      </button>
    </>
  );
};

export default Right;
