import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-401px)]'>
            <span className="loading loading-spinner size-20"></span>
        </div>
    );
};

export default LoadingSpinner;