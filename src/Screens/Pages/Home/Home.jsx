import React from "react";
import "./Home.css";
import Banner from "../../Components/Banner/Banner";
import Features from "../../Components/Features/Features";
import Statistics from "../../Components/Statistics/Statistics";
import { Col, Row } from "react-bootstrap";
import Service from "../../Components/Service/Service";
import useAll from "../../../hooks/useAll";

const Home = () => {
  const { healthServices } = useAll();
  const { services } = healthServices;

  return (
    <div className="home" data-aos="fade-in">
      <Banner></Banner>
      <Features></Features>
      <Statistics></Statistics>

      <section className="home-services container">
        <h2 className="text-center mb-4">Our Services</h2>
        <Row xs={1} md={2} lg={3} className="g-4 mb-5">
          {services?.slice(0, 6)?.map((service) => (
            <Col>
              <Service service={service} key={service.id}></Service>
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default Home;
