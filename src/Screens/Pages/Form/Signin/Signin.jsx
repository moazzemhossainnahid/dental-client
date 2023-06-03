import React, { useState } from "react";
import image from "../../../../Images/Form/Secure login-bro.svg";
import { Col, Form, Row } from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAll from "../../../../hooks/useAll";
import popupError from "../../../../popup/popupError";
import popupSuccess from "../../../../popup/popupSuccess";

const Signin = () => {
  const [user, setUser] = useState({});
  const { firebase } = useAll();
  const {
    googleProvider,
    facebookProvider,
    twitterProvider,
    signInWithEmail,
    signInWithSocialAccount,
    resetPassword,
  } = firebase;

  const history = useHistory();
  const location = useLocation();
  const redirectUrl = location.state?.from || "/home";

  /* -------------------------------------------------------------------------- */
  /*                         SIGN IN WITH SOCIAL ACCOUNT                        */
  /* -------------------------------------------------------------------------- */
  const handleSignInWithSocial = (provider) => {
    signInWithSocialAccount(provider)
      .then((result) => {
        popupSuccess("login");
        history.push(redirectUrl);
      })
      .catch((err) => {
        popupError(err.message);
      });
  };

  /* -------------------------------------------------------------------------- */
  /*                             SIGN IN WITH EMAIL                             */
  /* -------------------------------------------------------------------------- */
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    setUser(data);
    const userEmail = data.email;
    const userPassword = data.password;
    signInWithEmail(userEmail, userPassword)
      .then((result) => {
        popupSuccess("login");
        history.push(redirectUrl);
      })
      .catch((err) => {
        popupError(err.message);
      });
  };

  /* -------------------------------------------------------------------------- */
  /*                               RESET PASSWORD                               */
  /* -------------------------------------------------------------------------- */
  const handleResetPassword = () => {
    resetPassword(user?.email);
  };

  return (
    <div className="sign-form container h-100">
      <Row md={2} xs={1} className=" h-100">
        <Col className="sign-left" md={7}>
          <div className="sign-greetings">
            <img className="w-75" src={image} alt="" />
          </div>
        </Col>
        <Col md={5} className="sign-right">
          <h1 className="text-white text-center">Sign In</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className="form-label">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="form-input"
                {...register("email", { required: true })}
              />
              {errors.email?.type === "required" && (
                <small className="required-text">Email is required</small>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label className="form-label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="form-input"
                {...register("password", { required: true })}
              />
              {errors.password?.type === "required" && (
                <small className="required-text">Password is required</small>
              )}
            </Form.Group>
            <div className="mb-3 d-flex justify-content-between align-items-center">
              <Form.Check className="form-label" label="Remember me?" />
              <button
                onClick={handleResetPassword}
                type="reset"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  textDecoration: "underLine",
                }}
                className="switch-link"
              >
                Forgot password?
              </button>
            </div>
            <Form.Group className="mb-3" controlId="formHorizontalCheck">
              <button className="w-100 btn-custom" type="submit">
                Sign In
              </button>
            </Form.Group>
          </Form>
          <small className="text-center d-block text-more-option ">
            Or with Social Profile
          </small>
          <div className="social-btn-box my-3 d-flex justify-content-center align-items-center">
            <button
              className="btn-social"
              onClick={() => handleSignInWithSocial(googleProvider)}
            >
              <i class="fab fa-google"></i>
            </button>
            <button
              className="btn-social"
              onClick={() => handleSignInWithSocial(facebookProvider)}
            >
              <i class="fab fa-facebook"></i>
            </button>
            <button
              className="btn-social"
              onClick={() => handleSignInWithSocial(twitterProvider)}
            >
              <i class="fab fa-twitter"></i>
            </button>
          </div>

          <small className="text-center d-block">
            Dont have an account?
            <Link to="/form/signup" className="switch-link ms-1">
              Sign Up
            </Link>
          </small>
        </Col>
      </Row>
    </div>
  );
};

export default Signin;
