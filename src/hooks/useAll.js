import { useContext } from "react";
import { AllContext } from "../context/AllProvider";

const useAll = () => {
  return useContext(AllContext); //use this hook in any component to get AllContext results
};

export default useAll;
