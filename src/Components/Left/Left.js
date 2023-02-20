import React from "react";
import Navbar from "./Nav/Navbar";
import "./Left.css";
import Activites from "./Activites/Activites";

const Left = (props) => {
  return (
    <div className="all-left">
      <Navbar></Navbar>
      <Activites handle={props.handle}></Activites>
    </div>
  );
};

export default Left;
