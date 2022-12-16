import React from 'react';
import img1 from '../../../assets/ourteam/masud.jpeg';
import img2 from '../../../assets/ourteam/mohin.jpeg';
import img3 from '../../../assets/ourteam/shamim.png';
import img4 from '../../../assets/ourteam/forida.jpg';

const OurTeam = () => {
  return (
    <div className=" btn-group btn-group-vertical avatar lg:btn-group-horizontal  gap-12 ">
   <div className='grid ' >
   <figure className=' '><img src={img1} alt="mirror_global_team"/></figure>
  <div className="card-body">
    <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
   </div>
    <div className='grid'>
    <figure className='h-64'><img src={img2} alt="mirror_global_team"/></figure>
  <div className="card-body">
    <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary  ">Learn now!</button>
    </div>
  </div>
    </div>
    <div className='grid'>
    <figure className='h-64'><img className='h-96' src={img3} alt="mirror_global_team"/></figure>
  <div className="card-body">
    <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary  ">Learn now!</button>
    </div>
  </div>
    </div>
    <div className='grid'>
    <figure className='h-64'><img src={img4} alt="mirror_global_team"/></figure>
  <div className="card-body">
    <h2 className="card-title">Life hack</h2>
    <p>How to park your car at your garage?</p>
    <div className="card-actions justify-start">
      <button className="btn btn-primary  ">Learn now!</button>
    </div>
  </div>
    </div>
</div>
  );
};

export default OurTeam;