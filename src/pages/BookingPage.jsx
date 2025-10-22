import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Rechart from '../features/lawyers/components/myBookings/Rechart';
import BookingCard from '../features/lawyers/components/myBookings/BookingCard';
import { getIdFromLocalStorage } from '../shared/utils/getIdFromLocalStorage';
import EmptyState from '../shared/components/ui/EmptyState';
import { deleteIdFromLocalStorage } from '../shared/utils/deleteIdFromLocalStorage';

const BookingPage = () => {
    const allLawyers = useLoaderData()
    const [lawyers, setLawyers] = useState([])

    useEffect(() => {
        const appointedLawyersId = getIdFromLocalStorage()
        if (!appointedLawyersId?.length || !allLawyers?.length) return;

        const appointedLawyers = allLawyers.filter((lawyer) => appointedLawyersId.includes(lawyer.id))
        setLawyers(appointedLawyers)
    }, [allLawyers])

    const handleCancelAppointment = (id) => {
        const remainingLawyers = lawyers.filter((lawyer) => lawyer.id !== id)
        setLawyers(remainingLawyers)
        deleteIdFromLocalStorage(id)
    }

    if (lawyers.length === 0) return <EmptyState></EmptyState>

    return (
        <div>
            <Rechart lawyers={lawyers}></Rechart>
            <div className='mt-[97px] text-center mb-16'>
                <h1 className='font-extrabold text-[40px] pb-4'>My Today Appointments</h1>
                <p className='font-primary-content'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
            </div>
            <div className='space-y-16 mb-16 lg:mb-20 xl:mb-[220px]'>
                {lawyers.map((lawyer) => <BookingCard handleCancelAppointment={handleCancelAppointment} lawyer={lawyer} key={lawyer.id}></BookingCard>)}
            </div>
        </div>
    );
};

export default BookingPage;