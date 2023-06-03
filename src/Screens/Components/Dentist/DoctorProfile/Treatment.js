import React from 'react';
import { useHistory } from 'react-router-dom';
import { PuffLoader } from "react-spinners";
import useAll from '../../../../hooks/useAll';

const Treatment = ({ treatment, setBook }) => {
  const { slots } = treatment;
  const { firebase } = useAll();
  const { user, loading } = firebase;
  const history = useHistory();

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
          onClick={() => handleAppointment()}
          class="btn btn-primary w-full">Book Appointment</button>

      </div>
    </div>
  );
};

export default Treatment;