import React from "react";
import "./Dentist.css";
import { Card } from "react-bootstrap";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Dentist = ({ dentist }) => {
  const handleGetAppointment = () => {
    Swal.fire({
      icon: "success",
      title: "Awesome! Your booking has been confirmed.. ",
      showConfirmButton: false,
      timer: 1500,
      padding: "1rem 2rem 3rem",
    });
  };
  const { _id, name, img, designation } = dentist;
  const url = `/dentist/${_id}`; //dentist details page url
  return (
    <Card className="dentist-card" data-aos="fade-in">
      <Card.Img style={{height:"300px"}} className="overflow-hidden" variant="top" src={img} />
      <Card.Body className="text-center">
        <Card.Title className="card-title">{name}</Card.Title>
        <Card.Text>
          {designation}
          <Link className="btn-appointment" to={url}>
            Explore More
          </Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Dentist;
