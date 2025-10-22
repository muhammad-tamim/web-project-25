import React from 'react';
import logo from '../../../assets/logos/logo.png'
import { navItems } from '../../utils/navItems';
import { Link, NavLink } from 'react-router';
import { CiMenuFries } from 'react-icons/ci';
import PrimaryButton from '../ui/Buttons/PrimaryButton';

const Navbar = () => {
    return (
        <div className='max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 xl:px-[160px] py-7 border-b border-primary-content/5'>
            <div className='flex justify-between items-center'>
                <Link to={'/'}>
                    <div className='flex items-center gap-1 md:gap-2 lg:gap-4'>
                        <img className='size-8 lg:size-12' src={logo} alt="" />
                        <h2 className='plus-jakarta-sans font-extrabold text-2xl lg:text-[32px] text-primary-content/80'>Law.BD</h2>
                    </div>
                </Link>
                <div className='space-x-12 hidden lg:flex'>
                    {navItems.map((item) => <NavLink key={item.id} to={item.to}
                        className={({ isActive }) => {
                            const baseClasses = "text-primary-content/70 font-medium text-lg";
                            const activeClasses = "underline decoration-primary ";
                            return isActive ? `${baseClasses} ${activeClasses}` : baseClasses;
                        }}>{item.label}</NavLink>)}
                </div>
                <div>
                    <Link to={"/contact-now"}><PrimaryButton label={"Contact Now"}></PrimaryButton></Link>
                    {/* drawer */}
                    <div className="drawer drawer-end lg:hidden">
                        <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-5" className="drawer-button btn btn-sm"><CiMenuFries size={18} /></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu space-y-5 bg-base-200 min-h-full w-52 p-4">
                                {/* Sidebar content here */}
                                {navItems.map((item) => <NavLink key={item.id} to={item.to}
                                    className={({ isActive }) => {
                                        const baseClasses = "text-primary-content/70 font-medium text-lg";
                                        const activeClasses = "underline decoration-primary";
                                        return isActive ? `${baseClasses} ${activeClasses}` : baseClasses;
                                    }}>{item.label}</NavLink>)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;