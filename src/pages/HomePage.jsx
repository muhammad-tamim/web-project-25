import React from 'react';
import Hero from '../shared/components/structure/Hero';
import Lawyers from '../features/lawyers/components/Lawyers';

const HomePage = () => {
    return (
        <div>
            <Hero></Hero>
            <Lawyers></Lawyers>
        </div>
    );
};

export default HomePage;