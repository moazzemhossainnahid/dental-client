import React from "react";
import "./Service.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { name, img, details, cost, id } = service; //destructuring keys from service object

  const url = `/service/${id}`; //service details page url

  return (
    <Card className="service-card p-3" data-aos="zoom-in">
      <Card.Img className="mb-auto" variant="top" src={img} />
      <Card.Body className="px-0 d-flex flex-column">
        <Card.Title className="card-title">{name}</Card.Title>
        <Card.Text className="mt-auto">
          <p> {details?.slice(0, 150)}..</p>
          <p className="price mt-4">
            <i class="fas fa-chevron-right"></i> Starting from{" "}
            <span>{cost}</span>$
          </p>
          <p className="price">
            <i class="fas fa-chevron-right"></i>{" "}
            <Link to={url}>See Details</Link>
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Service;
