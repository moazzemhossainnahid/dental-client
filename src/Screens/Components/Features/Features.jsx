import React from "react";
import "./Features.css";

const Features = () => {
  return (
    <section className="home_features container">
      <div className="home_features-item">
        <i class="fas fa-tooth color-blue"></i>
        <h2>Teeth Whitening</h2>
        <p>
          Whitening is among the most popular dental procedures because it can
          greatly improve how your teeth look.
        </p>
      </div>
      <div className="home_features-item">
        <i class="fas fa-teeth color-paste"></i>
        <h2>Quality Brackets</h2>
        <p>
          Orthodontics is the branch of dentistry that corrects teeth and jaws
          that are positioned improperly.
        </p>
      </div>
      <div className="home_features-item ">
        <i class="fab fa-digital-ocean color-blue"></i>
        <h2>Modern Anesthetic</h2>
        <p>
          Dental anesthesia is a field of anesthesia that includes not only
          local but sedation and general anesthesia.
        </p>
      </div>
      <div className="home_features-item">
        <i class="fab fa-squarespace color-paste"></i>
        <h2>Teeth Whitening</h2>
        <p>
          Whitening is among the most popular dental procedures because it can
          greatly improve how your teeth look.
        </p>
      </div>
    </section>
  );
};

export default Features;
