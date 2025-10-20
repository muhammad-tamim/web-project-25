import React from 'react';
import heroImage from '../../../assets/images/banner-img-1.png'

const Hero = () => {
    return (
        <div
            className="hero min-h-[calc(100vh-237px)] mt-8 mb-[100px]"
            style={{
                backgroundImage:
                    `url(${heroImage})`,
                borderRadius: "24px",
            }}
        >
            <div className="w-full h-full bg-linear-to-b from-[#0f0f0f00] to-[#0f0f0f] opacity-80 rounded-[24px]"></div>
            <div className="hero-content flex-col text-neutral-content text-center">
                <h2 className="xl:max-w-4xl font-extrabold text-lg md:text-3xl lg:text-4xl xl:text-5xl xl:leading-14">
                    It avoids subjective claims or exaggeration that might raise red flags legally
                </h2>
                <p className='xl:max-w-[959px] text-xs md:text-sm xl:text-base font-medium'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
        </div >
    );
};

export default Hero;