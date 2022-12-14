import React from 'react';
import masud from '../../../assets/ourteam/masud.jpeg';

const OurTeam = () => {
    return (
        <div className=' bg-gradient-to-r from-red-500 to-green-500'>
            <h1 className='text-center'>Our TeamWho are dedicatedly </h1>

            <div className=" ml-6 mb-8 card w-96 bg-base-100 shadow-xl bg-gradient-to-r from-sky-500 to-indigo-5">
  <figure className="px-10 pt-10">
    <img src={masud} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions">
      
    </div>
  </div>
</div>

        </div>
    );
};

export default OurTeam;