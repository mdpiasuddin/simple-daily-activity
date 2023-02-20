import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "./Activeprop.css";

const Activeprop = (props) => {
  const handleActivites = () => {};
  return (
    <div className="caa">
      {" "}
      <Card style={{ width: "100%" }}>
        <Card.Img variant="top" src={props.imag} className="img-fluid" />
        <Card.Body>
          <Card.Title>
            <h3>{props.name}</h3>
          </Card.Title>
          <Card.Text>{props.detail}</Card.Text>
          <p>Time: {props.time}</p>
          <Button
            variant="primary"
            className=""
            onClick={() => props.handle(props)}
          >
            Add Activites
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Activeprop;
