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

                <a role="button" className="btn btn-outline btn-ghost mt-12 ">read more</a>

              </div>

              <div className='w-3/5 mr-6 mt-12 ' >
                   <div className='grid grid-rows-3 grid-flow-col gap-4 h-full'>
                   <div class="col-span-2 bg-gradient-to-r from-cyan-500 to-blue-500 .."><h1>This is pic-1</h1></div>
                   <div class="row-span-3  bg-gradient-to-r from-purple-500 to-pink-500..."><h1>this is pic-2</h1></div>
                   <div class="row-span-2 col-span-2.  bg-gradient-to-r from-violet-500 to-fuchsia-500."><h1>this is pic-3</h1></div>
                   </div>
              </div>
             </div>

             
         </div>
       </div>
    );
};

export default FeaturedServices;