import React from "react";
import "./Services.css";
import { Col, Row } from "react-bootstrap";
import Service from "../../Components/Service/Service";
import useAll from "../../../hooks/useAll";

const Services = () => {
  const { healthServices } = useAll();
  const { services } = healthServices;
  return (
    <div className="services container">
      <h4>#Our dental services</h4>
      <h1 className="text-center mt-3">
        Enjoy Specialized Care Through{" "}
        <span>
          Precision, Artistry, <br /> And Experience
        </span>{" "}
        Top
      </h1>
      <Row xs={1} md={2} lg={3} className="g-4 mt-3">
        {services?.map((service) => (
          <Col>
            <Service service={service} key={service.id}></Service>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
