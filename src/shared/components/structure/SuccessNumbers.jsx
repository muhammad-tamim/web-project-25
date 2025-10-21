import React from 'react';
import lawyers from '../../../assets/images/success-doctor.png'
import review from '../../../assets/images/success-review.png'
import initiated from '../../../assets/images/success-patients.png'
import staffs from '../../../assets/images/success-staffs.png'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const SuccessNumbers = () => {
    const { ref, inView } = useInView({ threshold: .5, triggerOnce: true }); // percentage of element visible before triggering (0 - 1)

    const successItems = [
        { id: 1, image: `${lawyers}`, number: 199, label: "Total Lawyers" },
        { id: 2, image: `${review}`, number: 467, label: "Total Reviews" },
        { id: 3, image: `${initiated}`, number: 1900, label: "Total Initiated" },
        { id: 4, image: `${staffs}`, number: 300, label: "Total Stuffs" },
    ]


    return (
        <div ref={ref} className='py-[100px]'>
            <div className='text-center pb-8'>
                <h1 className='font-extrabold text-[40px]'>We Provide Best Law Services</h1>
                <p>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 justify-between'>
                {successItems.map((item) => <div key={item.id} className='flex flex-col items-center md:items-start md:pl-12 md:pr-[110px] py-10 gap-4 bg-primary-content/5 rounded-2xl'>
                    <img src={item.image} className='size-16' alt="" />
                    <h3 className='font-extrabold text-5xl'>{inView ? <CountUp end={item.number} duration={5} /> : 0}+</h3>
                    <p className='text-primary-content/60 font-medium text-xl'>{item.label}</p>
                </div>)}
            </div>
        </div>
    );
};

export default SuccessNumbers;