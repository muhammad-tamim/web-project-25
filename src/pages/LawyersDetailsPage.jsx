import React from 'react';
import LawyersDetailsStaticIntro from '../features/lawyers/components/lawyersDetails/LawyersDetailsStaticIntro';
import LawyersDetailsDynamicInfo from '../features/lawyers/components/lawyersDetails/LawyersDetailsDynamicInfo';
import { useLoaderData, useParams } from 'react-router';
import AppointmentCard from '../features/lawyers/components/lawyersDetails/AppointmentCard';

const LawyersDetailsPage = () => {
    const lawyers = useLoaderData()
    const { id } = useParams()

    const lawyer = lawyers.find((lawyer) => lawyer.id === parseInt(id))


    return (
        <div className=''>
            <LawyersDetailsStaticIntro></LawyersDetailsStaticIntro>
            <LawyersDetailsDynamicInfo lawyer={lawyer}></LawyersDetailsDynamicInfo>
            <AppointmentCard lawyer={lawyer}></AppointmentCard>
        </div>
    );
};

export default LawyersDetailsPage;