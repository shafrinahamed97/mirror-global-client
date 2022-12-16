import React from 'react';
import img1 from '../../../assets/ourteam/masud.jpeg';
import img2 from '../../../assets/ourteam/mohin.jpeg';
import img3 from '../../../assets/ourteam/shamim.png';
import img4 from '../../../assets/ourteam//forida.jpg';


const OurTeam = () => {
  return (
    <div className='grid grid-cols-4 gap-4 pt-12 ml-4 mr-4 '>
       <div className="card  glass">
  <figure className='h-80'><img src={img1} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title uppercase">mahmud hasan</h2>
    <p className='capitalize '>founder & CEO</p>
    {/* <div className="card-actions justify-start">
      <button className="btn btn-primary">Learn now!</button>
    </div> */}
  </div>
</div>
<div className="card  glass">
  <figure className='h-80'><img src={img2} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title uppercase">mahin rashid</h2>
    <p className='capitalize '>managing director</p>
    {/* <div className="card-actions justify-start">
      <button className="btn btn-primary">Learn now!</button>
    </div> */}
  </div>
</div>

<div className="card glass">
  <figure className='h-80'><img src={img3} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title uppercase">md.kamruzzaman</h2>
    <p className='capitalize '>country manager</p>
    {/* <div className="card-actions justify-start">
      <button className="btn btn-primary">Learn now!</button>
    </div> */}
  </div>
</div>
<div className="card  glass">
  <figure className='h-80'><img src={img4} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title uppercase">forida yasmin</h2>
    <p className='capitalize '>operation manager</p>
    {/* <div className="card-actions justify-start">
      <button className="btn btn-primary">Learn now!</button>
    </div> */}
  </div>
</div>



    </div>
    

    
  );
};

export default OurTeam;