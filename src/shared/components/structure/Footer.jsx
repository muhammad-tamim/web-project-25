import React from 'react';
import logo from '../../../assets/logos/logo-footer.png'
import { Link, NavLink } from 'react-router';
import { navItems } from '../../utils/navItems';
import socialIcons from '../../../assets/images/social-icons.png'

const Footer = () => {
    return (
        <div className='max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 xl:px-20 py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24 text-center bg-neutral text-neutral-content space-y-8'>
            <div className='space-y-8'>
                <div className='flex items-center justify-center gap-1 md:gap-2 lg:gap-4'>
                    <img className='size-8 lg:size-12' src={logo} alt="" />
                    <h2 className='plus-jakarta-sans font-extrabold text-2xl lg:text-[32px] '>Law.BD</h2>
                </div>
                <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-12'>
                    {navItems.map((item) => <NavLink key={item.id} to={item.to}
                        className={({ isActive }) => {
                            const baseClasses = "font-medium text-lg";
                            const activeClasses = "underline decoration-primary ";
                            return isActive ? `${baseClasses} ${activeClasses}` : baseClasses;
                        }}>{item.label}</NavLink>)}
                </div>
            </div>
            <div>
                <hr className='border-dashed border-neutral-content/20' />
            </div>
            <div className='flex justify-center'>
                <img src={socialIcons} alt="" />
            </div>
        </div>
    );
};

export default Footer;