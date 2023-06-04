import React from 'react';
import useAll from '../../../hooks/useAll';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom';

const MyAppointments = () => {
    const { app } = useAll();
    const { firebase } = useAll();
    const { user } = firebase;
    const myApp = app?.filter(a => a?.email === user?.email);
    const history = useHistory();

    console.log(myApp);



  const handleDelete = (id) => {
    // Handle delete logic here
    fetch(`http://localhost:5000/appointment/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
          if (data?.deletedCount) {
  
            Swal.fire({
              icon: "success",
              title: "Awesome! Your Appointment has been Deleted.. ",
              showConfirmButton: false,
              timer: 1500,
              padding: "1rem 2rem 3rem",
            });
            window.location.reload();
          }
        });

  };

    return (
        <div className="container mt-5">
            <div className="row">
                {myApp?.map((item, index) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={index}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{item?.name}</h5>
                                <p className="card-text">
                                    <strong>Slot: </strong> {item?.slot}
                                </p>
                                <p className="card-text">
                                    <strong>Email: </strong> {item?.email}
                                </p>
                                <p className="card-text">
                                    <strong>Doctor: </strong> {item?.doctorName}
                                </p>
                                <p className="card-text">
                                    <strong>Title: </strong> {item?.doctorTitle}
                                </p>
                                <div className="btn-group">
                                    <button
                                        className="btn btn-primary"
                                        onClick={() => history.push(`/updateapp/${item?._id}`)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(item?._id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default MyAppointments;