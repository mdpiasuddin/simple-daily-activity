import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Activeprop from "./activeprop/Activeprop";
import "./Activites.css";

const Activites = (props) => {
  const [active, setActive] = useState([]);
  useEffect(() => {
    fetch("damidata/fake.json")
      .then((res) => res.json())
      .then((data) => setActive(data));
  }, []);

  return (
    <div>
      <Row className="activp">
        {active.map((item) => (
          <Col lg={4} className="mb-3  hh">
            <Activeprop
              name={item.name}
              detail={item.detail}
              imag={item.picture}
              time={item.time}
              handle={props.handle}
            ></Activeprop>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Activites;
