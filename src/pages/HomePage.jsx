import React from 'react';
import Hero from '../shared/components/structure/Hero';
import Lawyers from '../features/lawyers/components/Lawyers';
import SuccessNumbers from '../shared/components/structure/SuccessNumbers';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <Lawyers></Lawyers>
            <SuccessNumbers></SuccessNumbers>
        </div>
    );
};

export default HomePage;