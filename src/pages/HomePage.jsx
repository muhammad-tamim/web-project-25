import React from 'react';
import Hero from '../shared/components/structure/Hero';
import SuccessNumbers from '../shared/components/structure/SuccessNumbers';
import { useLoaderData } from 'react-router';
import Lawyers from '../features/lawyers/components/HomePageLayersCards/Lawyers';

const HomePage = () => {
    const lawyers = useLoaderData()
    return (
        <article>
            <title>{"Law.BD | Home"}</title>
            <div>
                <Hero></Hero>
                <Lawyers lawyers={lawyers}></Lawyers>
                <SuccessNumbers></SuccessNumbers>
            </div>
        </article>
    );
};

export default HomePage;