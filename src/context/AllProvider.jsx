import React, { createContext } from "react";
import useDentists from "../hooks/useDentists";
import useFirebase from "../hooks/useFirebase";
import useServices from "../hooks/useServices";
import useAppointments from "../hooks/useAppointments";

export const AllContext = createContext();

const AllProvider = ({ children }) => {
  const allContext = {
    firebase: useFirebase(),
    healthServices: useServices(),
    dentists: useDentists(),
    app: useAppointments(),
  }; //provided from hooks

  return (
    <>
      <AllContext.Provider value={allContext}>{children}</AllContext.Provider>
    </>
  );
};

export default AllProvider;
