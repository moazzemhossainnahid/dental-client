import { useEffect, useState } from "react";

const useDentists = () => {
  const [destists, setDetists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/doctors")
      .then((res) => res.json())
      .then((data) => setDetists(data));
  }, []);

  return destists;
};

export default useDentists;
