import { useEffect, useState } from "react";

const useAppointments = () => {
  const [app, setApp] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => res.json())
      .then((data) => setApp(data));
  }, []);

  return app;
};

export default useAppointments;
