import React from "react";
import { PuffLoader } from "react-spinners";
import { Redirect, Route } from "react-router";
import useAll from "../../../hooks/useAll";

const PrivateRoute = ({ children, ...rest }) => {
  const { firebase } = useAll();
  const { user, loading } = firebase;

  /* -------------------------------------------------------------------------- */
  /*                 RENDERING THE SPINNER WHEN LOADING IS TRUE                 */
  /* -------------------------------------------------------------------------- */
  if (loading) {
    return (
      <div
        style={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PuffLoader loading={loading} color="#64DECE" size={60} />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/form/signin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
