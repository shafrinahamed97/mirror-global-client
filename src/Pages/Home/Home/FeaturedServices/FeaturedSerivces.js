import React from 'react';

const FeaturedSerivces = () => {
    return (
       <div className='h-screen'>
         <div className='h-1/6  glass'>
           <h2 className='uppercase underline align-baseline text-white font-medium text-center'>featured services</h2>

           <h1 className='font-serif capitalize  font-bold text-white text-xl mt-4 text-center'>we provided visa & immigration service</h1>
         </div>

         <div className='h-4/6 bg-gradient-to-r from-purple-500 to-pink-500'>

             <h2>This is Writing and Photo section</h2>
         </div>
       </div>
    );
};

export default FeaturedSerivces;