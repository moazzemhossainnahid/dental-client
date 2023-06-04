import React, { useState } from 'react'
import AvailableDate from './AvailableDate'
import useAll from "../../../../hooks/useAll";
import Calender from './Calender'
import { format } from 'date-fns';
import { useParams } from 'react-router-dom';

const DoctorProfile = () => {
  const { id } = useParams();
  const { dentists:doctors } = useAll();
  const [date, setDate] = useState(new Date());

  const doctor = doctors && doctors?.find(doctor => doctor?._id === Number(id));

  console.log(doctor);

  let footer = <p>Please pick a day.</p>;
  if (date) {
    footer = <p className='text-xl font-bold pr-10 mt-10'>Your Appointment Date {format(date, 'PP')}</p>;
  }


  return (
    <div>
      <div className="bg-primary opacity-80 py-8 md:py-12 mb-8 md:mb-12">
        <h1 className="text-4xl md:text-5xl font-medium text-white">
          Doctor Profile
        </h1>
      </div>
      <div className="d-md-flex bg-white gap-y-6 md:gap-x-8 px-3 md:px-0 container mx-auto mb-10">
        <div className="rounded shadow-md h-full border-gray-400 p-5 md:p-8 mx-auto md:col-span-1">
          <div>
            <img
            className='w-25'
              src={doctor?.img} 
              alt="dentist"
            />
          </div>
          <div className="my-6 md:my-8">
            <h1 className="text-2xl md:text-3xl text-left text-md-left font-medium text-primary opacity-80">
              {doctor?.name}
            </h1>
            <p className=" font-thin text-left text-md-left mt-2">
              {doctor?.title}
            </p>
            <p className="text-base text-left text-md-left mt-2">
              {doctor?.organization}
            </p>
          </div>
          <div className="my-6 md:my-8">
            <div className="d-flex align-items-center justify-center md:justify-start gap-3 mb-3">
              <img
              style={{width:"30px"}}
                className="p-1"
                src="https://img.icons8.com/ios/452/phone.png"
                alt=""
              />
              <p className="text-lg pt-3 font-medium">{doctor?.chamberPhone}</p>
            </div>
            {/* <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <img
                className="w-6 h-6"
                src="https://img.icons8.com/ios/452/new-post.png"
                alt=""
              />
              <p className="text-lg font-medium">drsarah@gmail.com</p>
            </div> */}
            <div className="d-flex align-items-center justify-center md:justify-start gap-3 mb-3">
              <img
              style={{width:"30px"}}
                className="p-1"
                src="https://img.icons8.com/ios/452/marker--v1.png"
                alt=""
              />
              <p className="text-lg pt-3 font-medium">{doctor?.location}</p>
            </div>

          </div>
          <div class="divider"></div>
          <>
            <h3 className='font-bold text-2xl text-left text-primary'>Select Date for Appointment</h3>
            <Calender date={date} setDate={setDate}></Calender>
            <AvailableDate doctor={doctor} date={date} footer={footer}></AvailableDate>
          </>

        </div>

        <div className="rounded shadow-md h-full md:col-span-2 p-5 md:p-8">
          <div className="mb-5">
            <h3 className="font-medium text-3xl text-center text-md-left mb-5 text-primary opacity-80">
              Biography
            </h3>
            <p className="text-justify text-base my-3">
              {doctor?.desc}
            </p>
          </div>
          <div class="divider"></div>
          <div className="mb-5">
            <h3 className="font-medium text-3xl text-center text-md-left mb-5 text-primary opacity-80">
              Qualifications
            </h3>
            <div>
              {doctor?.qualifications && doctor?.qualifications?.map(q => (
                <p className="text-justify font-medium text-base mb-3">
                  ● {q}
                </p>
              ))}
            </div>
          </div>
          <div class="divider"></div>
          <div className="mb-5">
            <h3 className="font-medium text-3xl text-center text-md-left mb-5">
              Expertise
            </h3>
            <div className="row gap-x-4 gap-y-4">
              <div className="col-6 d-flex flex-col flex-md-row align-items-center gap-3 py-5 p-md-5">
                <img
                style={{width:"100px"}}
                  className="w-16 h-16 mb-5 md:mb-0 mr-md-6"
                  src="https://img.icons8.com/ios/452/medical-heart.png"
                  alt=""
                />
                <div>
                  <h4 className="text-xl font-medium mb-3 text-start text-md-left text-primary opacity-80">
                    Heart Specialist
                  </h4>
                  <p>Diagnose and treat disorders and diseases of the cardiovascular system.</p>
                </div>
              </div>
              <div className="col-6 d-flex flex-col flex-md-row align-items-center gap-3 py-5 p-md-5">
                <img
                style={{width:"100px"}}
                  className="w-16 h-16 mb-5 md:mb-0 mr-md-6"
                  src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/452/external-kidneys-anatomy-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
                  alt=""
                />
                <div>
                  <h4 className="text-xl font-medium mb-3 text-start text-md-left text-primary opacity-80">
                  pulmonologist
                  </h4>
                  <p>Pulmonologist diagnoses and treats diseases of the respiratory system.</p>
                </div>
              </div>
              <div className="col-6 d-flex flex-col flex-md-row align-items-center gap-3 py-5 p-md-5">
                <img
                style={{width:"100px"}}
                  className="w-24 h-24 mb-5 md:mb-0 mr-md-6"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScQ8g5oUhk5PgoBhJKfH6sMjc4ZT-hQdHGsB2yEJHN8htdiUzU"
                  alt=""
                />
                <div>
                  <h4 className="text-xl font-medium mb-3 text-start text-md-left text-primary opacity-80">
                  Neuro Specialist
                  </h4>
                  <p>Diagnoses, treats and manages disorders of the brain and nervous system (brain, spinal cord and nerves).</p>
                </div>
              </div>
              <div className="col-6 d-flex flex-col flex-md-row align-items-center gap-3 py-5 p-md-5">
                <img
                style={{width:"100px"}}
                  className="w-24 h-24 mb-5 md:mb-0 mr-md-6"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_WsEMJL1_I0NIA6DEMGK-Z0HXoB3c9uLD5hDY-pJh7bp021T"
                  alt=""
                />
                <div>
                  <h4 className="text-xl font-medium mb-3 text-start text-md-left text-primary opacity-80">
                  Cardiac specialist
                  </h4>
                  <p>Cardiologist is a physician who's an expert in the care of your heart and blood vessels.</p>
                </div>
              </div>

            </div>
          </div>
          <div class="divider"></div>
          {/* <div className="w-full d-flex flex-column justify-content-left mb-5">
            <h3 className="font-medium text-3xl text-start text-md-left mb-5 text-primary opacity-80">
              Working Hours
            </h3>
            <div className="d-flex gap-2 align-items-center justify-contet-left md:justify-contant-start">
              <div className="mr-10">
                <p className="text-justify font-medium text-base mb-3">Mon</p>
                <p className="text-justify font-medium text-base mb-3">Tue</p>
                <p className="text-justify font-medium text-base mb-3">Wed</p>
                <p className="text-justify font-medium text-base mb-3">Thu</p>
                <p className="text-justify font-medium text-base mb-3">Fri</p>
              </div>
              <div>
                <p className="text-justify font-medium text-base mb-3">
                  09:00 - 18:00
                </p>
                <p className="text-justify font-medium text-base mb-3">
                  09:00 - 18:00
                </p>
                <p className="text-justify font-medium text-base mb-3">
                  09:00 - 18:00
                </p>
                <p className="text-justify font-medium text-base mb-3">
                  09:00 - 18:00
                </p>
                <p className="text-justify font-medium text-base mb-3">
                  09:00 - 18:00
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;