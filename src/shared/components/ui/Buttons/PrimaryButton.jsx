import React from 'react';
import { Link } from 'react-router';

const PrimaryButton = ({ to, label }) => {
    return (
        <Link to={to}><button className='hidden lg:flex btn btn-lg btn-primary rounded-[30px] text-white font-bold text-xl '>{label}</button></Link>
    );
};

export default PrimaryButton;