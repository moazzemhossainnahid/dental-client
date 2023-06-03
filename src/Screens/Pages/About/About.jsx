import React from "react";
import "./About.css";
import img1 from "../../../Images/About/about-1.jpg";
import img2 from "../../../Images/About/about-2.jpg";
import img3 from "../../../Images/About/about-3.jpg";
import img4 from "../../../Images/About/about-4.jpg";

import { Carousel, Col, Row } from "react-bootstrap";
import { useHistory } from "react-router";
import Count from "../../Components/Count/Count";

const About = () => {
  const history = useHistory();
  const goToServices = () => {
    history.push("/services");
  };

  return (
    <section className="about" data-aos="fade-in">
      <h4>#About Our Clinic</h4>
      <h1 className="text-center mt-3">
        Our Clients Are Our{" "}
        <span>
          Priority,
          <br />
          We Offer Quality
        </span>{" "}
        Dental Services
      </h1>

      <Row xs={1} lg={2} className="g-4 container mt-4 mx-lg-5">
        <Col className="about-banner">
          <Carousel fade indicators={false} controls={false}>
            <Carousel.Item>
              <img className="d-block w-100" src={img1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img2} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img3} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={img4} alt="First slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col className="about-content">
          <h2>Welcome to Dental Clinic</h2>
          <p>
            Dental Clinic is the best & leading dental treatment provider in
            Rampura, Dhaka, Bangladesh, with a specialized, Dental implant,
            Endodontic, Pediatric operative, Prosthodontic, oral surgery, and
            Orthodontic Center. The Living Legend in Bangladesh dental practice
            Prof. Dr. Kazi Mehdih Ul Alam establish Rampura dental clinic in
            1977. From that time to till now,Rampura dental clinic is a center
            of excellence and house of trust in the section of dental practice
            in Bangladesh. Our philosophy is simple. We provide excellence in
            dental care, with a focus on patient comfort, satisfaction, and
            dental health, in line with our company’s core value, ‘Creating
            Happy Smiles’. Here at Dental Aspects, YOU are the number one
            priority.
          </p>
          <ul className="about-list">
            <li className="about-item">
              {" "}
              <i class="fas fa-chevron-circle-down"></i> Teeth Whitening
            </li>
            <li className="about-item">
              {" "}
              <i class="fas fa-chevron-circle-down"></i> Complete Crown
            </li>
            <li className="about-item">
              {" "}
              <i class="fas fa-chevron-circle-down"></i> Root Canal
            </li>
            <li className="about-item">
              {" "}
              <i class="fas fa-chevron-circle-down"></i> Dental Implants
            </li>
          </ul>
        </Col>
      </Row>

      <div className="about-message" data-aos="fade-up">
        <h1>
          Nervous Troubled{" "}
          <span>
            Attractive Staring Right
            <br /> Anxiously!{" "}
          </span>{" "}
          Make An Appointment
        </h1>
        <button onClick={goToServices} className="btn-learn">
          See All Services
        </button>
      </div>

      <div className="about__statistics" data-aos="fade-in">
        <h4>#Our advantages</h4>
        <h1 className="text-center mt-3">
          Features That You Will{" "}
          <span>
            Love Us and
            <br />
            Enjoy Specialized
          </span>{" "}
          Care
        </h1>

        <ul className="about__statistics-list">
          <li className="about__statistics-item">
            <i class="fas fa-medal"></i>
            <h4>
              <Count end="1278"></Count>
            </h4>
            <p>The Quality of Used Medical Materials</p>
          </li>
          <li className="about__statistics-item">
            <i class="far fa-smile"></i>
            <h4>
              <Count end="4695"></Count>
            </h4>
            <p>A Full Range of Dental Services</p>
          </li>
          <li className="about__statistics-item">
            <i class="fas fa-wrench"></i>
            <h4>
              <Count end="1250"></Count>
            </h4>
            <p>Dental Implants-New Teeth in One Day</p>
          </li>
          <li className="about__statistics-item">
            <i class="fas fa-pen-nib"></i>
            <h4>
              <Count end="50"></Count>
            </h4>
            <p>Modern Methods of Teeth Straightening</p>
          </li>
          <li className="about__statistics-item">
            <i class="fas fa-money-bill-wave"></i>
            <h4>
              <Count end="8500"></Count>
            </h4>
            <p>Loyalty Discounts of Regular Customers</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
