import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='container md:mt-20 mt-10 mb-5 md:mb-10'>
            <h1 className='black font-bold text-4xl md:text-5xl text-center'>Friends to keep close in your life</h1>
            <p className='gray text-center pt-4 pb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p>
        <button className='btn flex items-center justify-center text-white bg-dark-green mx-auto'>{<FaPlus />}Add a Friend</button>
        </div>
    );
};

export default Banner;