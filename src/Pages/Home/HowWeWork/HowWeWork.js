import React from 'react';
import howwework from '../../../assets/icon/howwerowk.png';

const HowWeWork = () => {
    return (
        <div className='h-screen   '>
           <div className='h-1/6 '>
           <h1 className='text-white  text-3xl mt-6 text-center uppercase'>how we work </h1>
           </div>
           <div className='h-5/6'>
             <img className='h-screen ml-24 ' src={howwework} alt="" />
           </div>
        </div>
    );
};

export default HowWeWork;