import React from 'react';
import { AiOutlineTrademark } from 'react-icons/ai';
import { Link } from 'react-router';


const LawyersCard = ({ lawyer }) => {
    const { id, name, specialization, experience, license_number, image, availability } = lawyer || {}

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const dayName = days[date.getDay()];

    const todayAvailabilityCheck = availability.find((available) => available === dayName)

    return (
        <div className='border border-primary-content/15 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-10 md:gap-16 text-center md:text-left'>
            <div className='flex-shrink-0 w-full md:w-[159px]'>
                <img src={image} className='rounded-[12px] w-full h-[158px]' alt="" />
            </div>
            <div className='flex-1 space-y-2'>
                <div className='flex gap-2'>
                    <p className={`${todayAvailabilityCheck ? "text-success bg-success/10 rounded-full px-[14px] py-[5px] font-medium text-xs" : "text-error bg-error/10 rounded-full px-[14px] py-[5px] font-medium text-xs"}`}>{todayAvailabilityCheck ? "Available" : "Not Available"}</p>
                    <p className='text-info bg-info/10 rounded-full px-[14px] py-[5px] font-medium text-xs'>{experience}+ Years Experience</p>
                </div>
                <div className=''>
                    <h2 className='font-extrabold text-2xl'>{name}</h2>
                    <p className='font-medium text-lg text-primary-content/60'>{specialization} Expert</p>
                    <p className='font-medium text-base text-primary-content/60 flex items-center gap-2'><AiOutlineTrademark size={16} />
                        License No: {license_number}</p>
                </div>
                <div>
                    <Link to={`lawyers-details/${id}`}>
                        <button className='cursor-pointer rounded-full border border-info/20 w-full py-2 text-info font-bold text-base hover:text-neutral-content hover:bg-info'>View Details</button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default LawyersCard;