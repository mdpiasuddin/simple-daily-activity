import React from "react";
import Nav from "react-bootstrap/Nav";

import "./Nav.css";
const Navbar = () => {
  return (
    <div>
      <Nav
        activeKey="/home"
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <Nav.Item>
          <span></span>
        </Nav.Item>
        <Nav.Item>
          <h1>My-activites</h1>
        </Nav.Item>
      </Nav>
      <p className="p">Select Todays Exersise</p>
    </div>
  );
};

export default Navbar;
