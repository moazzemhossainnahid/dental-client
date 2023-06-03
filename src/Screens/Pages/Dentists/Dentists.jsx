import React from "react";
import "./Dentists.css";
import useAll from "../../../hooks/useAll";
import { Col, Row } from "react-bootstrap";
import Dentist from "../../Components/Dentist/Dentist";

const Dentists = () => {
  const { dentists } = useAll();
  return (
    <section className="dentists container">
      <h4>#Our experienced dentist</h4>
      <h1 className="text-center mt-3">
        Top Dentist For{" "}
        <span>
          Specialized And <br /> Experienced
        </span>{" "}
        Dentist
      </h1>

      <Row xs={1} md={2} lg={4} className="g-4 mt-lg-3 mt-2">
        {dentists.map((dentist) => (
          <Col>
            <Dentist key={dentist.id} dentist={dentist}></Dentist>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Dentists;
