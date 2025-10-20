import React from 'react';

const Container = ({ children }) => {
    return (
        <div className='max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[160px]'>
            {children}
        </div>
    );
};

export default Container;