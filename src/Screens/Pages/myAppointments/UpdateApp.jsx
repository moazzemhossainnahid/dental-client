import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useAll from '../../../hooks/useAll';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import swal from 'sweetalert';

const UpdateApp = () => {
    const { id } = useParams();
    const { app } = useAll();
    const upApp = app?.find(a => a?._id === id);
    const { register, handleSubmit, reset } = useForm();
    const [btnSpinner, setBtnSpinner] = useState(false);
    const [get, setGet] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [slot, setSlot] = useState();

    console.log(upApp);

    const handleUpdateApp = (id) => {
        setBtnSpinner(true);
        const updData = { name, email, slot };

        console.log(updData);
        console.log(id);
        swal({
            title: "Are you sure?",
            text: "Once updated, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        }).then((willDelete) => {
            if (willDelete) {
                fetch(`http://localhost:5000/updateapp/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(updData)
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data?.modifiedCount > 0) {
                            swal("The Product has been successfully Saved", {
                                icon: "success",
                                className: "rounded-xl",
                            });

                            reset();
                            window.location.href = "/myappointments";
                        }
                    })

            }
        })
    };

    const handleNameInput = (e) => {
        setName(e.target.value)
    }

    const handleEmailInput = (e) => {
        setEmail(e.target.value)
    }

    const handleSlotInput = (e) => {
        setSlot(e.target.value)
    }




    const handleGetValues = (e) => {
        e.preventDefault();
        console.log(upApp);
        setName(upApp?.name);
        setEmail(upApp?.email);
        setSlot(upApp?.slot);
        setGet(true);
    }
    return (
        <div className="p-5 bg-gray-200 text-left h-full w-full lg:pt-20 -mt-16">
            <div className="w-full bg-gray-200 flex items-center justify-center my-12">
                <div className="bg-white shadow rounded py-12 lg:px-28 px-8">
                    <p className="md:text-3xl text-xl font-bold leading-7 text-center text-gray-700">
                        Update <span className="text-primary">{upApp?.doctorName}</span> Product
                    </p>
                    <form
                        onSubmit={handleSubmit(() => handleUpdateApp(upApp?._id))}
                        className="mb-32 p-3 w-full mx-auto"
                        action=""
                    >
                        <div className="md:flex items-center mt-12">
                            <div className="w-md-50 d-flex flex-column">
                                <label className="text-base font-semibold leading-none text-gray-800">
                                    my Name
                                </label>
                                <input
                                    {...register('name')}
                                    defaultValue={name}
                                    onChange={handleNameInput}
                                    required
                                    tabIndex={0}
                                    arial-label="Please input name"
                                    type="name"
                                    className="text-base w-full leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-500"
                                    placeholder="Please Input Product Name"
                                />
                            </div>
                            <div className="w-md-50 d-flex flex-column md:ml-6 md:mt-0 mt-4">
                                <label className="text-base font-semibold leading-none text-gray-800">
                                    Dentists Slot
                                </label>

                                <select {...register('slot')} defaultValue={slot} onChange={handleSlotInput} className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-500">
                                    <option disabled selected>Select Dentists Slot</option>
                                    <option>09:00 AM - 09:30 AM</option>
                                    <option>10:00 AM - 10:30 AM</option>
                                    <option>10:30 AM - 11:00 AM</option>
                                    <option>11:00 AM - 11:30 AM</option>
                                    <option>11:30 AM - 12:00 AM</option>
                                </select>
                            </div>
                        </div>

                        <div className="md:flex items-center mt-12">
                            <div className="w-md-50 d-flex flex-column">
                                <label className="text-base font-semibold leading-none text-gray-800">
                                   my Email
                                </label>
                                <input
                                    {...register('email')}
                                    value={email}
                                    required
                                    onChange={handleEmailInput}
                                    tabIndex={0}
                                    arial-label="Please input price"
                                    type="name"
                                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-gray-100 border rounded border-gray-200 placeholder-gray-500"
                                    placeholder="Please Input Product Price"
                                />
                            </div>
                        </div>


                        <div className="d-flex align-items-center justify-content-around gap-5 py-5 w-full">
                            <button
                                onClick={handleGetValues}
                                type="submit"
                                className="mt-9 text-base font-semibold leading-none text-white py-4 px-10 bg-primary rounded hover:bg-warning focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:outline-none"
                            >
                                get Product Values
                            </button>
                            <button
                                disabled={!get || btnSpinner}
                                type="submit"
                                className="mt-9 text-base disabled:bg-gray-300 font-semibold leading-none text-white py-4 px-10 bg-warning rounded hover:bg-primary focus:ring-2 focus:ring-offset-2 focus:ring-secondary focus:outline-none"
                            >
                                Update Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateApp;