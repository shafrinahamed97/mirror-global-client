import React from 'react';
import img1 from '../../../assets/ourteam/masud.jpeg';
import img2 from '../../../assets/ourteam/mohin.jpeg';
import img3 from '../../../assets/ourteam/shamim.png';
import img4 from '../../../assets/ourteam//forida.jpg';



const OurTeam = () => {


  return (
       <div className="mt-20 mb-20  ">
        <div tabIndex={0} className="glass text-center collapse  rounded-box  "> 
  <div className="collapse-title  font-medium text-3xl text-white">
    Our Team Members'
  </div>
  <div className="collapse-content"> 
    <p className='capitalize '>our team who are dedicatedly working with us </p>
  </div>
</div>
    <div className='grid lg:grid-cols-4 gap-4 pt-12 ml-4 mr-4 md:grid-cols-1  '>
      
       <div className="card  glass">
  <figure className='lg:h-80 md:h-68'><img src={img1} alt="mirror_global_team"/></figure>
  <div className="card-body">
    <h2 className="card-title uppercase">mahmud hasan</h2>
    <p className='capitalize '>founder & CEO</p>
    {/* <div className="card-actions justify-start">
      <button className="btn btn-primary">Learn now!</button>
    </div> */}
   
    
     <div>
     
   
  </div>
  </div>
</div>
<div className="card  glass">
  <figure className='lg:h-80 md:h-68'><img src={img2} alt="mirror_global_team"/></figure>
  <div className="card-body">
    <h2 className="card-title uppercase">mahin rashid</h2>
    <p className='capitalize '>managing director</p>
    {/* <div className="card-actions justify-start">
      <button className="btn btn-primary">Learn now!</button>
    </div> */}
  </div>
</div>

<div className="card glass">
  <figure className='lg:h-80 md:h-68'><img src={img3} alt="mirror_global_team"/></figure>
  <div className="card-body">
    <h2 className="card-title uppercase">md.kamruzzaman</h2>
    <p className='capitalize '>country manager</p>
    {/* <div className="card-actions justify-start">
      <button className="btn btn-primary">Learn now!</button>
    </div> */}
  </div>
</div>
<div className="card  glass">
  <figure className='lg:h-80 md:h-68'><img src={img4} alt="mirror_global_team"/></figure>
  <div className="card-body">
    <h2 className="card-title uppercase">forida yasmin</h2>
    <p className='capitalize '>operation manager</p>
    {/* <div className="card-actions justify-start">
      <button className="btn btn-primary">Learn now!</button>
    </div> */}
  </div>
</div>



    </div>
    </div>
    

    
  );
};

export default OurTeam;