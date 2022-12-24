import React from 'react';
import scope from '../.././../assets/icon/compass.png';
import comparechanges from '../.././../assets/icon/comparechanges.png';
import takedecision from '../.././../assets/icon/target.png';
import goal from '../.././../assets/icon/goal.png';


const ExploreScope = () => {
    return (
        <div className='h-30  '>
           <div class="grid lg:grid-cols-4 gap-4 pt-12 ml-4 mr-4 md:grid-cols-1 ">
           <div>
            <div className="card w-64  text-primary-content hover:glass">
            <div className="card-body">
            <div>
                <img className='hover:bg-white' src={scope} alt="" />
                <div>
                <h2 className="card-title text-2xl uppercase hover:text-black">explore scope</h2>
            <p className='capitalize hover:text-black hover:uppercase'>you can browse more than 71,000 master's programs from all over the world .</p>
                </div>

            </div> 
              
          
      </div>
        </div>
         </div>
           <div>
            <div>
            <div className="card  w-64 text-primary-content hover:glass">
            <div className="card-body">
           <div>
            <img className='hover:bg-white' src={comparechanges} alt="" />
            <div>
            <h2 className="card-title  text-2xl uppercase hover:text-black">compare chances</h2>
            <p className='capitalize hover:uppercase hover:text-black'>you can browse more than 71,000 master's programs from all over the world .</p>
            </div>
           </div>
              
          
      </div>
        </div>
         </div>
         </div>
          <div><div>
            <div className="card w-64  text-primary-content hover:glass">
            <div className="card-body">
            <div>
                <img className='hover:bg-white' src={takedecision} alt="" />

                <div>
                <h2 className="card-title  uppercase hover:text-black">take decision</h2>
            <p className='capitalize hover:uppercase hover:text-black'> now you have your top programs shortlisted, you can pick the ones that fit you the best</p>
                </div>
            </div>
              
          
      </div>
        </div>
         </div>
         </div>
         <div><div>
            <div className="card w-64  text-primary-content hover:glass">
            <div className="card-body">
            <div>
                <img src={goal} className="hover:bg-white" alt="" />
                <div >
                <h2 className="card-title uppercase hover:text-black">apply goals</h2>
            <p className='capitalize hover:uppercase hover:text-black'> when can you feel confident about your program choice, now you can apply confidently .</p>
                </div>
            </div>
          
      </div>
        </div>
         </div></div>
  
  
  
</div>
        </div>
    );
};

export default ExploreScope;