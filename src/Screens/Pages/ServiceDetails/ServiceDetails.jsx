import React from "react";
import "./ServiceDetails.css";
import { useParams, useHistory } from "react-router-dom";
import useAll from "../../../hooks/useAll";
import Swal from "sweetalert2";

const ServiceDetails = () => {
  const { healthServices } = useAll();
  const { services } = healthServices;
  const { id } = useParams();

  console.log(id);
  const currentService = services.find((service) => service.id == id);

  const history = useHistory();
  const goToServices = () => {
    history.push("/services");
  };

  const handleGetAppointment = () => {
    Swal.fire({
      icon: "success",
      title: "Awesome! Your booking has been confirmed.. ",
      showConfirmButton: false,
      timer: 1500,
      padding: "1rem 2rem 3rem",
    });
  };

  return (
    <section className="service-details">
      <div className="service-details-grid-box">
        <div className="service-poster">
          <img src={currentService?.img} alt="" />
        </div>
        <div className="service-content">
          <h1>{currentService?.name}</h1>
          <h5 className="service-price ">
            Start from <span>{currentService?.cost} $</span>
          </h5>
          <p>{currentService?.details}</p>
          <div>
            <button
              onClick={handleGetAppointment}
              style={{ width: "max-content", transition: "all .2s ease" }}
              className="btn-book btn-active mb-3 mb-lg-0"
            >
              Get Appointment
            </button>
            <button
              onClick={goToServices}
              style={{
                width: "max-content",
              }}
              className="btn-learn"
            >
              See All Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
