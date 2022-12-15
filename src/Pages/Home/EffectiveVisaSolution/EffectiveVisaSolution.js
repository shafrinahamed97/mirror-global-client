import React from 'react';
import img1 from '../../../assets/effectiveVisaSolutaoin/effectivevisasolution_1.jpg';
import img2 from '../../../assets/effectiveVisaSolutaoin/effectivevisasolution_2.jpg';
import img3 from '../../../assets/effectiveVisaSolutaoin/effectivevisasolution_3.jpg';
import './EffectiveVisaSolution.css';

const EffectiveVisaSolution = () => {
    return (
        <div className='pt-12 mb-11 '>
            <div className="carousel w-full">
  <div id="_1" className="carousel-item relative w-full">
    <div className='carousel-img'>
    <img src={img1} className="w-screen h-96" />
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4 ">
      <h1 className='text-2xl  font-bold text-blue-900   capitalize'>
        effective visa solution <br />
        visa & immigration consultation...
        <p>our professionalism, honestly, sincerity <br />and dedicated to client 
        service has <br /> helped our client to fulfill their wishes</p>


      </h1>
    </div>
    <div className="mt-12 absolute flex left-24 transform -translate-y-1/2 w-2/5 top-1/2 ">
    <button className="btn btn-outline btn-warning">Booking Now</button>
    </div>
    <div className="absolute flex justify-center transform -translate-y-1/2 left-4 right-5 bottom-0">
      <a href="#_3" className="btn btn-circle mr-5">❮</a> 
      <a href="#_2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="_2" className="carousel-item relative w-full">
  <div className='carousel-img'>
    <img src={img2} className="w-screen h-96" />
    </div>
    <div className="absolute flex justify-center transform -translate-y-1/2 left-24 top-1/4 ">
      <h1 className='text-2xl  font-bold text-blue-900  truncate capitalize'>
        effective visa solution <br />
        visa & immigration consultation
        <p>our professionalism, honestly, sincerity <br />and dedicated to client 
        service has <br /> helped our client to fulfill their wishes</p>


      </h1>
    </div>
    <div className="mt-12 absolute flex left-24 transform -translate-y-1/2 w-2/5 top-1/2 ">
    <button className="btn btn-outline btn-warning">Booking Now</button>
    </div>
    <div className="absolute flex justify-center transform -translate-y-1/2 left-4 right-5 bottom-0">
      <a href="#_1" className="btn btn-circle mr-5">❮</a> 
      <a href="#_3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="_3" className="carousel-item relative w-full">
  <div className='carousel-img'>
    <img src={img3} className="w-screen h-96" />
    </div>
    <div className="absolute flex justify-center transform -translate-y-1/2 left-24 top-1/4 ">
      <h1 className='text-2xl  font-bold text-blue-900  truncate capitalize'>
        effective visa solution <br />
        visa & immigration consultation
        <p>our professionalism, honestly, sincerity <br />and dedicated to client 
        service has <br /> helped our client to fulfill their wishes</p>


      </h1>
    </div>
    <div className="mt-12 absolute flex left-24 transform -translate-y-1/2 w-2/5 top-1/2 ">
    <button className="btn btn-outline btn-warning">Booking Now</button>
    </div>
    
    <div className="absolute flex justify-center transform -translate-y-1/2 left-4 right-5 bottom-0">
      <a href="#_2" className="btn btn-circle mr-5">❮</a> 
      <a href="#_1" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
</div>
        </div>
    );
};

export default EffectiveVisaSolution;