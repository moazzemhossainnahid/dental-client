import React, { useEffect, useState } from 'react'
import Treatment from './Treatment';
import BookingModal from './BookingModal';

const AvailableDate = ({ date,doctor }) => {
    const [treatments, setTreatments] = useState([]);
    const [book, setBook] = useState(null);

    useEffect(() => {
        fetch('/serviceSlot.json')
            .then(res => res.json())
            .then(data => setTreatments(data));
    }, [])
    return (
        <div>
            <div>
                {
                    treatments?.map(treatment => <Treatment
                    key={treatment._id}
                    treatment={treatment}
                    setBook={setBook}
                    doctor={doctor}
                    ></Treatment>)
                }
            </div>
                {book && <BookingModal 
                date={date} 
                book={book}
                setBook={setBook}
                ></BookingModal>}
        </div>
    )
}

export default AvailableDate