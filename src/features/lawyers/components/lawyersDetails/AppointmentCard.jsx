import React from 'react';
import { CiSquareInfo } from 'react-icons/ci';

const AppointmentCard = ({ lawyer }) => {
    const { id, name, specialization, experience, license_number, image, availability } = lawyer || {}

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const dayName = days[date.getDay()];

    const todayAvailabilityCheck = availability.find((available) => available === dayName)
    return (
        <div className='mb-[98px] border border-primary-content/15 rounded-2xl px-8 pt-8 pb-14'>
            <div className='space-y-4'>
                <h1 className='text-center font-bold text-2xl'>Book an Appointment</h1>
                <hr className='border border-dashed border-primary-content/20' />
                <div className='flex items-center justify-between'>
                    <p className='font-bold sm:text-lg'>Availability</p>
                    <p className={`${todayAvailabilityCheck ? "text-success bg-success/10 rounded-full px-[14px] py-[5px] font-medium text-[8px] sm:text-xs" : "text-error bg-error/10 rounded-full px-[14px] py-[5px] font-medium text-[8px] sm:text-xs"}`}>{todayAvailabilityCheck ? "Lawyer Available Today" : "Not Available"}</p>
                </div>
                <hr className='border border-primary-content/20' />
                <p className='lg:flex lg:gap-2 items-center text-warning text-center lg:text-left text-xs lg:text-sm 2xl:text-base 2xl:bg-warning/10 rounded-full font-medium w-fit py-[5px] px-[10px]'><CiSquareInfo className='hidden xl:flex' /> Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.</p>
            </div>
            <button className={`${todayAvailabilityCheck ? 'btn btn-success' : 'btn btn-error cursor-not-allowed'}  w-full rounded-full text-neutral-content font-bold md:text-xl mt-5 md:mt-[50px]`}>Book Appointment Now</button>
        </div >
    );
};

export default AppointmentCard;