import React from 'react';
import img_1 from '../../../../assets/featuredServices/pic1.jpg';
import img_2 from '../../../../assets/featuredServices/pic2.jpg';
import img_3 from '../../../../assets/featuredServices/pic3.jpg';
import img_4 from '../../../.././assets/featuredServices/pic4.png';

const FeaturedServices = () => {
    return (
       <div className='h-screen '>
         <div className='h-1/6  '>
           <h2 className='uppercase underline align-baseline text-white font-medium text-center'>featured services</h2>

           <h1 className='font-serif capitalize  font-bold text-white text-xl mt-4 text-center'>we provided visa & immigration service</h1>
         </div>

         <div className='h-4/6  '>
           
             <div className=' flex h-full ml-24 '>
             <div className='w-2/5  '>
                 <h2 className='uppercase underline mt-8 text-xl text-white'>about mirror global associates</h2>

                 <h1 className=' capitalize text-3xl mt-12 font-bold text-white'> 05+ years of your <br />trust and recommendation</h1>
                <h3 className='text-white mt-8 text-xl capitalize'>05+ years of your trust and recommendation</h3>

                <h4 className='text-white mt-6 capitalize'>for the last 5 years, we have helped students', business person, <br />
                clients with medical needs to acquire U.K. visas .</h4>

                <a role="button" className="btn btn-outline btn-ghost mt-12 ">read more</a>

              </div>
              <div class="w-3/5 flex flex-col h-screen . ..">
                 <div className='mt-20  h-1/3'><img className='w-3/5 ml-28 ' src={img_1} alt="" /></div>
                 <div class="grid grid-cols-2  content-start h-2/3...">
                        <div className='ml-12 mt-12'><img className='w-4/5 ml-10' src={img_2} alt="" /></div>
                        <div className='mt-12'><img className='w-3/5 ' src={img_3} alt="" /></div>
                        
                      </div>
                 </div>
              
             </div>

             
         </div>
       </div>
    );
};

export default FeaturedServices;