import React from 'react';
import onlinevisa from '../../../../assets/icon/onlinevisaapplication.png';
import visainformation from '../../../../assets/icon/visainformation.png';
import immigration from '../../../../assets/icon/immigration.png';
import onlineapplication from '../../../../assets/icon/onlineapplication.png';


const OnlineVisaImmigration = () => {
    return (
        <div className='h-30  '>
           <div class="grid lg:grid-cols-4 gap-4 pt-12 ml-4 mr-4 md:grid-cols-1 ">
           <div>
            <div className="card w-64  text-primary-content hover:glass">
            <div className="card-body">
              <img src={onlinevisa} alt="" />
            <h2 className="card-title text-2xl capitalize">online visa application</h2>
              
          
      </div>
        </div>
         </div>
           <div>
            <div>
            <div className="card  w-64 text-primary-content hover:glass  ">
            <div className="card-body">
              <img src={visainformation} alt="" />
            <h2 className="card-title  text-2xl capitalize">visa information</h2>
              
          
      </div>
        </div>
         </div>
         </div>
          <div><div>
            <div className="card w-64  text-primary-content hover:glass ">
            <div className="card-body">
              <img src={immigration} alt="" />
            <h2 className="card-title capitalize capitalize">immigration resources</h2>
              
          
      </div>
        </div>
         </div>
         </div>
         <div><div>
            <div className="card w-64  text-primary-content hover:glass">
            <div className="card-body">
              <img src={onlineapplication} alt="" />
            <h2 className="card-title capitalize">online passport application</h2>
          
      </div>
        </div>
         </div></div>
  
  
  
</div>
        </div>
    );
};

export default OnlineVisaImmigration;