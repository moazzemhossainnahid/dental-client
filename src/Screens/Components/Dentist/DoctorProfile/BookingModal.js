import React from 'react';
import { format } from 'date-fns';

const BookingModal = ({ date, book, setBook }) => {
    const { _id, name, slots } = book;
    console.log(slots);

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);
        setBook(null)
    }
    return (
        <div>
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-primary mb-5">Booking for : {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" placeholder="Type Your Name" class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' placeholder="Type Your E-mail" class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Type Your Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" placeholder="Type here" class="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;