import React from "react";
import "./NotFound.css"; //import css style
import image from "../../../Images/404/not-found-3.svg";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  const gotToHome = () => {
    history.push("/home");
  };
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="error-page">
      <img className="mb-3" src={image} alt="" />
      <div className="btn-box mt-4">
        <button onClick={gotToHome} className="btn btn-success me-3">
          Go to home
        </button>
        <button onClick={goBack} className="btn btn-dark">
          Go back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
