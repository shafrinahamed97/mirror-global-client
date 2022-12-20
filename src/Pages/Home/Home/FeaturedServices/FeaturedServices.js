import React from 'react';

const FeaturedServices = () => {
    return (
       <div className='h-screen'>
         <div className='h-1/6  glass'>
           <h2 className='uppercase underline align-baseline text-white font-medium text-center'>featured services</h2>

           <h1 className='font-serif capitalize  font-bold text-white text-xl mt-4 text-center'>we provided visa & immigration service</h1>
         </div>

         <div className='h-4/6  '>
           
             <div className=' flex h-full ml-6 '>
             <div className='w-2/5  '>
                 <h2 className='uppercase underline mt-8 text-xl text-white'>about mirror global associates</h2>

                 <h1 className=' capitalize text-3xl mt-12 font-bold text-white'> 05+ years of your <br />trust and recommendation</h1>
                <h3 className='text-white mt-8 text-xl capitalize'>05+ years of your trust and recommendation</h3>

                <h4 className='text-white mt-6 capitalize'>for the last 5 years, we have helped students', business person, <br />
                clients with medical needs to acquire U.K. visas .</h4>

                <a role="button" className="btn mt-12">read more</a>

              </div>

              <div className='w-3/5 bg-gradient-to-r from-purple-500 to-pink-500' >
                   <h2>this is picture photo section</h2>
              </div>
             </div>

             
         </div>
       </div>
    );
};

export default FeaturedServices;