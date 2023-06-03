import React, { useState } from 'react'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const Calender = ({date, setDate}) => {

    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p className='text-xl font-bold pr-10 mt-10'>You Picked: {format(date, 'PP')}</p>;
    }

    return (
        <div class="hero d-flex justify-content-start">
            <div class="hero-content text-center">
                <div class="max-w-md ">
                    <DayPicker mode="single"
                        selected={date}
                        onSelect={setDate}
                        footer={footer}
                    />
                </div>
            </div>
        </div>
    )
}

export default Calender;