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
        <div className='h-screen '>
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
            <div className='bg-gradient-to-r from-red-500 to-green-500 h-1/2'>
                 <h1>This is card + btn + carousel section</h1>
            </div>
        </div>
    );
};

export default creditTransfer;