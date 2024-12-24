import React from 'react';

const Hero = () => {
    return (
        <div className='mt-8'>
            <div className='flex flex-col-reverse md:flex-row md:justify-between items-center gap-9'>
                {/* Text Section */}
                <div className='flex flex-col items-center md:items-start gap-8 w-full md:w-1/2'>
                    <h1 className='text-4xl md:text-6xl font-bold text-blue-700 text-center md:text-left'>
                        Do What's Best For Your Brand
                    </h1>
                    <button className='border-2 border-blue-500 py-2 px-6 text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300'>
                        BOOK A MEETING
                    </button>
                </div>
                {/* Image Section */}
                <div className='w-full md:w-1/2'>
                    <img
                        src='https://static.wixstatic.com/media/913019_a8362a4c886e427ab8fc6064673d7764~mv2.jpg/v1/fill/w_1020,h_789,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_a8362a4c886e427ab8fc6064673d7764~mv2.jpg'
                        alt='Brand Image'
                        className='w-full h-auto'
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;