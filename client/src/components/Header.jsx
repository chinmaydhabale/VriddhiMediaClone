import React, { useEffect, useState } from 'react';

const Header = () => {
    const [isOpen, setisOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            // Add class to disable scroll
            document.body.classList.add('overflow-hidden');
        } else {
            // Remove class to enable scroll
            document.body.classList.remove('overflow-hidden');
        }
    }, [isOpen]);

    return (
        <div>
            {/* Header */}
            <div className='flex justify-center md:justify-between'>
                <div className='flex items-end'>
                    {/* Logo */}
                    <img
                        className={`w-60 ${isOpen ? 'hidden' : 'block'}`}
                        src='https://static.wixstatic.com/media/22791e_043cdd660d5f451a80750e04f8da012e~mv2.png/v1/fill/w_420,h_140,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Screenshot%202024-05-19%20234401.png'
                        alt='logo'
                    />
                </div>
                {/* Desktop Menu */}
                <div className='hidden md:flex items-center pr-32'>
                    <ul className='flex gap-5 text-blue-500'>
                        <li className='py-1'>Newsletter</li>
                        <li className='py-1'>Services</li>
                        <li className='py-1'>Contact</li>
                        <li className='border-2 border-blue-500 py-1 px-5'>
                            Book a Session
                        </li>
                    </ul>
                </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div
                className='md:hidden fixed top-4 right-4 text-6xl z-50'
                onClick={() => setisOpen(!isOpen)}
            >
                {!isOpen ? '+' : '-'}
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='fixed inset-0 bg-white z-40 overflow-y-auto'>
                    <div className='flex flex-col items-center justify-center h-full'>
                        <ul className='text-center text-2xl text-blue-500 space-y-6'>
                            <li
                                className='cursor-pointer border-b-blue-600'
                                onClick={() => setisOpen(false)}
                            >
                                Landing Page
                            </li>
                            <li
                                className='cursor-pointer'
                                onClick={() => setisOpen(false)}
                            >
                                Services
                            </li>
                            <li
                                className='cursor-pointer'
                                onClick={() => setisOpen(false)}
                            >
                                Thank You
                            </li>
                            <li
                                className='cursor-pointer'
                                onClick={() => setisOpen(false)}
                            >
                                Newsletter
                            </li>
                            <li
                                className='cursor-pointer'
                                onClick={() => setisOpen(false)}
                            >
                                Contact
                            </li>
                            <li
                                className='cursor-pointer'
                                onClick={() => setisOpen(false)}
                            >
                                Portfolio
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;