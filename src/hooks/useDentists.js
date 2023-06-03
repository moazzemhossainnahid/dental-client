import { useEffect, useState } from "react";

const useDentists = () => {
  const [destists, setDetists] = useState([]);

  useEffect(() => {
    fetch("/Dentists.json")
      .then((res) => res.json())
      .then((data) => setDetists(data));
  }, []);

  return destists;
};

export default useDentists;
