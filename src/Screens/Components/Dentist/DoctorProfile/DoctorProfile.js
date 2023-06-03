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
      <div className="grid grid-cols-1 md:grid-cols-3 bg-white gap-y-6 md:gap-x-8 px-3 md:px-0 container mx-auto mb-10">
        <div className="rounded shadow-md h-full border-gray-400 p-5 md:p-8 mx-auto md:col-span-1">
          <div>
            <img
              src={(doctor?.sex === "male" && "https://i.ibb.co/TLqKPLH/1024px-Male-Doctor-Flat-Icon-Vector-svg.png") || (doctor?.sex === "female" && "https://i.ibb.co/09LdpB6/6620101.png")} 
              alt="Dr. Sarah Taylor"
            />
          </div>
          <div className="my-6 md:my-8">
            <h1 className="text-2xl md:text-4xl text-center md:text-left font-medium text-primary opacity-80">
              {doctor?.name}
            </h1>
            <h4 className="text-sm md:text-md font-medium text-center md:text-left mt-2">
              {doctor?.title}
            </h4>
            <h5 className="text-base text-center md:text-left mt-2">
              {doctor?.organization}
            </h5>
          </div>
          <div className="my-6 md:my-8">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <img
                className="w-6 h-6"
                src="https://img.icons8.com/ios/452/phone.png"
                alt=""
              />
              <p className="text-lg font-medium">{doctor?.chamberPhone}</p>
            </div>
            {/* <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <img
                className="w-6 h-6"
                src="https://img.icons8.com/ios/452/new-post.png"
                alt=""
              />
              <p className="text-lg font-medium">drsarah@gmail.com</p>
            </div> */}
            <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
              <img
                className="w-6 h-6"
                src="https://img.icons8.com/ios/452/marker--v1.png"
                alt=""
              />
              <p className="text-lg font-medium">{doctor?.location}</p>
            </div>

          </div>
          <div class="divider"></div>
          <>
            <h3 className='font-bold text-2xl text-center text-primary'>Select Date for Appointment</h3>
            <Calender date={date} setDate={setDate}></Calender>
            <AvailableDate date={date} footer={footer}></AvailableDate>
          </>

        </div>

        <div className="rounded shadow-md h-full md:col-span-2 p-5 md:p-8">
          <div className="mb-5">
            <h3 className="font-medium text-3xl text-center md:text-left mb-5 text-primary opacity-80">
              Biography
            </h3>
            <p className="text-justify text-base my-3">
              {doctor?.desc}
            </p>
          </div>
          <div class="divider"></div>
          <div className="mb-5">
            <h3 className="font-medium text-3xl text-center md:text-left mb-5 text-primary opacity-80">
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
            <h3 className="font-medium text-3xl text-center md:text-left mb-5">
              Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
              <div className="flex flex-col md:flex-row items-center py-5 md:p-5">
                <img
                  className="w-16 h-16 mb-5 md:mb-0 md:mr-6"
                  src="https://img.icons8.com/ios/452/medical-heart.png"
                  alt=""
                />
                <div>
                  <h4 className="text-2xl font-medium mb-3 text-center md:text-left text-primary opacity-80">
                    Heart Specialist
                  </h4>
                  <p className="text-justify text-sm">
                    Sirius WordPress Theme features a slick and clean design
                    that is suitable for virtually any type of website
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center py-5 md:p-5">
                <img
                  className="w-16 h-16 mb-5 md:mb-0 md:mr-6"
                  src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/452/external-kidneys-anatomy-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
                  alt=""
                />
                <div>
                  <h4 className="text-2xl font-medium mb-3 text-center md:text-left text-primary opacity-80">
                    Kidney Specialist
                  </h4>
                  <p className="text-justify text-sm">
                    Sirius WordPress Theme features a slick and clean design
                    that is suitable for virtually any type of website
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center py-5 md:p-5">
                <img
                  className="w-16 h-16 mb-5 md:mb-0 md:mr-6"
                  src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/452/external-kidneys-anatomy-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
                  alt=""
                />
                <div>
                  <h4 className="text-2xl font-medium mb-3 text-center md:text-left text-primary opacity-80">
                    Kidney Specialist
                  </h4>
                  <p className="text-justify text-sm">
                    Sirius WordPress Theme features a slick and clean design
                    that is suitable for virtually any type of website
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center py-5 md:p-5">
                <img
                  className="w-16 h-16 mb-5 md:mb-0 md:mr-6"
                  src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/452/external-kidneys-anatomy-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"
                  alt=""
                />
                <div>
                  <h4 className="text-2xl font-medium mb-3 text-center md:text-left text-primary opacity-80">
                    Kidney Specialist
                  </h4>
                  <p className="text-justify text-sm">
                    Sirius WordPress Theme features a slick and clean design
                    that is suitable for virtually any type of website
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div class="divider"></div>
          <div className="mb-5">
            <h3 className="font-medium text-3xl text-center md:text-left mb-5 text-primary opacity-80">
              Working Hours
            </h3>
            <div className="flex item-center justify-center md:justify-start">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;