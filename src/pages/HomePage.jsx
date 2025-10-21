import React from 'react';
import Hero from '../shared/components/structure/Hero';
import SuccessNumbers from '../shared/components/structure/SuccessNumbers';
import { useLoaderData } from 'react-router';
import Lawyers from '../features/lawyers/components/HomePageLayersCards/Lawyers';

const HomePage = () => {
    const lawyers = useLoaderData()
    return (
        <div>
            <Hero></Hero>
            <Lawyers lawyers={lawyers}></Lawyers>
            <SuccessNumbers></SuccessNumbers>
        </div>
    );
};

export default HomePage;