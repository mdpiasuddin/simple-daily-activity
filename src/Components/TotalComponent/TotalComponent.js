import React from "react";
import { Row, Col } from "react-bootstrap";
import Left from "../Left/Left";
import Right from "../Right/Right";
import "./TotalCmponent.css";
import { useState } from "react";
const TotalComponent = () => {
  const [cartManage, setCartManage] = useState([]);
  const handleActivites = (activ) => {
    const newCart = [...cartManage, activ];
    setCartManage(newCart);
  };

  return (
    <>
      <Row>
        <Col lg={9}>
          <Left handle={handleActivites}></Left>
        </Col>
        <Col lg={3}>
          <Right cart={cartManage}></Right>
        </Col>
      </Row>
    </>
  );
};

export default TotalComponent;
