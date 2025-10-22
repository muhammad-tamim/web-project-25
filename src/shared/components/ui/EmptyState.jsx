import React from 'react';
import { Link } from 'react-router';

const EmptyState = () => {
    return (
        <div className='space-y-4 flex flex-col items-center justify-center min-h-[calc(100vh-506px)]'>
            <h1 className='font-bold text-5xl'>No Data Found</h1>
            <div>
                <p className='text-primary-content/70'>It seems you haven't Booked any lawyers.</p>
                <p className='text-primary-content/70'>Click the button below to browse our Lawyers.</p>
            </div>
            <Link to={'/'}><button className='btn btn-primary rounded-full text-white btn-xl'>Home Page</button></Link>
        </div>
    );
};

export default EmptyState;