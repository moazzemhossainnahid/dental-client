import React from "react";
import "./Dentist.css";
import { Card } from "react-bootstrap";
import Swal from "sweetalert2";

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
  const { doctorName, doctorImg, designation } = dentist;
  return (
    <Card className="dentist-card" data-aos="fade-in">
      <Card.Img variant="top" src={doctorImg} />
      <Card.Body className="text-center">
        <Card.Title className="card-title">{doctorName}</Card.Title>
        <Card.Text>
          {designation}
          <button onClick={handleGetAppointment} className="btn-appointment">
            Get Appointment
          </button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Dentist;
