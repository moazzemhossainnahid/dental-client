import React, { createContext } from "react";
import useDentists from "../hooks/useDentists";
import useFirebase from "../hooks/useFirebase";
import useServices from "../hooks/useServices";

export const AllContext = createContext();

const AllProvider = ({ children }) => {
  const allContext = {
    firebase: useFirebase(),
    healthServices: useServices(),
    dentists: useDentists(),
  }; //provided from hooks

  return (
    <>
      <AllContext.Provider value={allContext}>{children}</AllContext.Provider>
    </>
  );
};

export default AllProvider;
