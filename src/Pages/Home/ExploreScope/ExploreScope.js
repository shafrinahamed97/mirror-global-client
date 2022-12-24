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
            <div className="card w-64  text-primary-content hover:bg-black">
            <div className="card-body">
            <div>
                <img src={scope} alt="" />
                <div>
                <h2 className="card-title text-2xl uppercase">explore scope</h2>
            <p className='capitalize'>you can browse more than 71,000 master's programs from all over the world .</p>
                </div>

            </div>
              
          
      </div>
        </div>
         </div>
           <div>
            <div>
            <div className="card  w-64 text-primary-content hover:bg-black">
            <div className="card-body">
           <div>
            <img src={comparechanges} alt="" />
            <div>
            <h2 className="card-title  text-2xl uppercase">compare chances</h2>
            <p className='capitalize'>you can browse more than 71,000 master's programs from all over the world .</p>
            </div>
           </div>
              
          
      </div>
        </div>
         </div>
         </div>
          <div><div>
            <div className="card w-64  text-primary-content hover:bg-black">
            <div className="card-body">
            <div>
                <img src={takedecision} alt="" />

                <div>
                <h2 className="card-title  uppercase">take decision</h2>
            <p className='capitalize'> now you have your top programs shortlisted, you can pick the ones that fit you the best</p>
                </div>
            </div>
              
          
      </div>
        </div>
         </div>
         </div>
         <div><div>
            <div className="card w-64  text-primary-content hover:bg-black">
            <div className="card-body">
            <div>
                <img src={goal} alt="" />
                <div>
                <h2 className="card-title uppercase">apply goals</h2>
            <p className='capitalize'> when can you feel confident about your program choice, now you can apply confidently .</p>
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