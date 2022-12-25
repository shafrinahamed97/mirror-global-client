import React from 'react';
import img_1 from '../../../assets/recentupdatevisa/img_1.jpg';
import img_2 from '../../../assets/recentupdatevisa/img_2.jpg';


const RecentUpdateOfVisa = () => {
    return (
        <div className='h-screen  '>
            <div className='h-2/6  '>
                <h1 className='text-white text-center text-xl uppercase underline underline'>recent blog</h1>
                <h1 className='text-white text-3xl text-center mt-6 capitalize'>recent updated of visa and immigration</h1>
                <button className="btn btn-active btn-ghost hover:btn-warning text-white ml-96 mt-4">read all posts</button>

            </div>
            <div className='h-4/6 ' >
            <div className='grid lg:grid-cols-2 gap-4 ml-4 mr-4 md:grid-cols-1  '>
      
      <div className="card   h-80 mt-12 hover:glass">
 <figure className='lg:h-80 md:h-68'><img className='w-3/6 mt-4' src={img_1} alt="mirror_global_team"/></figure>
 <div className="card-body">
   <h2 className="card-title uppercase">web development to update react hooks cons</h2>
   <p className='capitalize '>Nancy boy Charles down the pub get stuffed mate easy peasy…</p>
   {/* <div className="card-actions justify-start">
     <button className="btn btn-primary">Learn now!</button>
   </div> */}
  
   
    <div>
    
  
 </div>
 </div>
</div>
<div className="card   h-80 mt-12 hover:glass">
 <figure className='lg:h-80 md:h-68'><img src={img_2} alt="mirror_global_team"/></figure>
 <div className="card-body">
   <h2 className="card-title uppercase ">A Guide To Attracting Clients To Your Agency</h2>
   <p className='capitalize '>Nancy boy Charles down the pub get stuffed mate easy peasy…r</p>
   {/* <div className="card-actions justify-start">
     <button className="btn btn-primary">Learn now!</button>
   </div> */}
 </div>
</div>






   </div>

            </div>
        </div>
    );
};

export default RecentUpdateOfVisa;