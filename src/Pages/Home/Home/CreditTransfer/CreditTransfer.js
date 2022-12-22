import React from 'react';
import aus_flag from '../../../../assets/creditTransfer/AUS_flag.png';
import australia from '../../../../assets/creditTransfer/australia.jpg';
import news_flag from '../../../../assets/creditTransfer/news_flag.png';
import newzeland from '../../../../assets/creditTransfer/newzealand.jpg';
import swit_flag from '../../../../assets/creditTransfer/swit_flag.png';
import switzeland from '../../../../assets/creditTransfer/switzerland.jpg';
import uk from '../../../../assets/creditTransfer/uk1.jpg';
import uk_flag from '../../../../assets/creditTransfer/uk-flag.jpg';
import usa from '../../../../assets/creditTransfer/usa.jpg';
import usa_flag from '../../../../assets/creditTransfer/usa_flag.png';
import world from '../../../../assets/creditTransfer/world.png';


const creditTransfer = () => {
    return (
        <div className='h-screen mt-24'>
            <div className=' h-1/2 '>
               <div className='h-full flex ml-24 mr-24 '>
                <div className='w-1/2 '>
                <h1 className='uppercase underline underline-offset-4 mt-6 ml-6 text-white text-xl'>credit transfer</h1> <br />
                    <h2 className='capitalize ml-6 text-white font-bold text-2xl'>we're global partner <br /> of <br /> 580+ universities</h2>
                    <h1 className='text-white ml-6 font-bold'>we have helped students, business persons, tourists, clients with medical  needs to
                    acquire US. visas. Besides, we also help with other family 
                    and provide counseling for immigration .</h1>
                    <button className="btn glass mt-6 ml-6">more agencies</button>
                </div>
                <div className='w-1/2 '>
                    <img src={world} alt="world map" />

                
                </div>
               </div>
                        
                
            </div>
            <div className='
             h-1/2'>
             <div className='ml-12 mt-6 '>
             <div className="carousel w-full">
  <div id="slide_1" className="carousel-item relative w-full ">
    <div >
    <img src={australia} className=" h-2/5 ml-24 mb-2" />
    <div className='flex gap-4'>
    <img src={aus_flag} className=" h-1/5 ml-24 w-1/3" alt="" />
    <h1 className='uppercase text-white mt-3'>australia 32 universities</h1>
    </div>
    </div>
    <div >
    <img src={switzeland} className=" h-2/5 ml-24 mb-2" />
    <div className='flex gap-4'>
    <img src={swit_flag} className=" h-1/5 ml-24 w-1/3" alt="" />
    <h1 className='uppercase text-white mt-3'>switzerland 32 universities</h1>
    </div>
    </div>
    <div >
    <img src={newzeland} className=" h-2/5 ml-24 mb-2" />
    <div className='flex gap-4'>
    <img src={news_flag} className=" h-1/5 ml-24 w-1/3" alt="" />
    <h1 className='uppercase text-white mt-3'>new zealand 32 universities</h1>
    </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide_2" className="btn btn-circle">❮</a> 
      <a href="#slide_2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide_2" className="carousel-item relative w-full">
  <div >
    <img src={uk} className=" h-2/5 ml-24 mb-2" />
    <div className='flex gap-4'>
    <img src={uk_flag} className=" h-1/5 ml-24 w-1/3" alt="" />
    <h1 className='uppercase text-white mt-3'>united kingdom 33 universities</h1>
    </div>
    </div>
    <div >
    <img src={usa} className=" h-2/5 ml-24 mb-2" />
    <div className='flex gap-4'>
    <img src={usa_flag} className=" h-1/5 ml-24 w-1/3" alt="" />
    <h1 className='uppercase text-white mt-3'>united states 58 universities</h1>
    </div>
    </div>
    <div >
    <img src={newzeland} className=" h-2/5 ml-24 mb-2" />
    <div className='flex gap-4'>
    <img src={news_flag} className=" h-1/5 ml-24 w-1/3" alt="" />
    <h1 className='uppercase text-white mt-3'>new zealand 32 universities</h1>
    </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide_1" className="btn btn-circle">❮</a> 
      <a href="#slide_1" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
  
</div>
             </div>
            </div>
        </div>
    );
};

export default creditTransfer;