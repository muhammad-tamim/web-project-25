import React from 'react';
import { Link } from 'react-router';

const PrimaryButton = ({ label }) => {
    return (
        <button className='hidden lg:flex btn btn-lg btn-primary rounded-[30px] text-white font-bold text-xl '>{label}</button>
    );
};

export default PrimaryButton;