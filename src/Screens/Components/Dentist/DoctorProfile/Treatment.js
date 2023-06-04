import React from 'react';
import { useHistory } from 'react-router-dom';
import { PuffLoader } from "react-spinners";
import useAll from '../../../../hooks/useAll';
import Swal from 'sweetalert2';

const Treatment = ({ treatment, setBook, doctor }) => {
  const { slots } = treatment;
  const { firebase } = useAll();
  const { user, loading } = firebase;
  const history = useHistory();

  console.log(doctor);

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

  const handleAppointment = () => {
    if (!user) {
      return history.push("/services");

    }
    setBook(treatment);
  }




  const handleGetAppointment = () => {

    const details = {
      name: user?.displayName,
      email: user?.email,
      slot: slots && slots[0],
      doctorName:doctor?.name,
      doctorTitle:doctor?.title,
    }

    console.log(details);

    fetch("http://localhost:5000/appointment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {

          Swal.fire({
            icon: "success",
            title: "Awesome! Your Appointment has been confirmed.. ",
            showConfirmButton: false,
            timer: 1500,
            padding: "1rem 2rem 3rem",
          });
        }
      });
  };

  return (
    <div class="card-body">


      <p>
        {
          slots?.length > 0
            ? <span>{slots[0]}</span>
            : <span className='text-red-400'>Sorry, we are booked today. Try next working day.</span>
        }
      </p>
      <p className='text-xl mb-3'>{slots?.length} {slots?.length > 1 ? 'spaces' : 'space'} available</p>
      <div class="card-actions justify-center">
        <button
          type="button" data-toggle="modal" data-target="#exampleModal"
          for="booking-modal" disabled={slots?.length === 0}
          onClick={() => handleGetAppointment()}
          class="btn btn-primary w-full">Book Appointment</button>

      </div>
    </div>
  );
};

export default Treatment;