import React from 'react';
import { AiOutlineTrademark } from 'react-icons/ai';
import { Link } from 'react-router';

const LawyersDetailsDynamicInfo = ({ lawyer }) => {
    const { name, specialization, experience, license_number, image, availability, price_bdt } = lawyer || {}


    return (
        <div className='mb-8 border border-primary-content/15 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-6 text-center md:text-left'>

            <div className=''>
                <img src={image} className='rounded-[19px] size-[308px]' alt="" />
            </div>

            <div className='space-y-4'>
                <p className='text-info bg-info/10 rounded-full font-medium w-fit mx-auto md:mx-0 py-1.5 px-4'>{experience}+ Years Experience</p>
                <h2 className='font-extrabold text-2xl md:text-[32px]'>{name}</h2>
                <div className='flex flex-col md:flex-row gap-2 md:gap-10 items-center'>
                    <p className='font-medium text-primary-content/60'>{specialization} Expert</p>
                    <p className='font-medium text-primary-content/60 flex items-center gap-2'><AiOutlineTrademark size={16} />
                        License No: {license_number}</p>
                </div>
                <div className='flex items-center gap-4'>
                    <p className='text-primary-content/70  font-bold hidden md:block'>Availability</p>
                    <div className='flex gap-4'>
                        {availability.map((available) => <p className='text-warning bg-warning/10 border border-warning-20 rounded-full font-medium w-fit py-[5px] px-[10px]'>{available}</p>)}
                    </div>
                </div>
                <div className='flex items-center justify-center md:justify-start gap-4'>
                    <p className='text-primary-content/70 font-bold'>Consultation Fee:</p>
                    <p className='text-success font-extrabold'>Taka : {price_bdt}</p>
                </div>
            </div>

        </div >
    );
};

export default LawyersDetailsDynamicInfo;