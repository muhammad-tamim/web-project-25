import React from 'react';

const BookingCard = ({ lawyer, handleCancelAppointment }) => {

    const { id, specialization, name, price_bdt } = lawyer || {}

    return (
        <div className='border border-primary-content/15 rounded-2xl px-8 py-8'>
            <div className='space-y-4'>
                <p className='font-bold sm:text-xl text-center sm:text-left'>{name}</p>
                <div className='flex flex-col sm:flex-row items-center justify-between'>
                    <p className='font-medium sm:text-lg text-primary-content/60'>{specialization}</p>
                    <p className='font-medium sm:text-lg text-primary-content/60'>Appointment Fee : {price_bdt} Taka</p>
                </div>
                <hr className='border border-dashed border-primary-content/20' />
                <button onClick={() => handleCancelAppointment(id)} className={`btn btn-outline btn-error text-error  w-full rounded-full hover:text-neutral-content font-bold md:text-xl `}>Cancel Appointment</button>
            </div>
        </div >
    );
};

export default BookingCard;