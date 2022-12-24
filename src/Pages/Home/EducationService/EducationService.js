import React from 'react';
import university from '../../../assets/educationservices/university.png';
import work from '../../../assets/educationservices/work.png';
import health from '../../../assets/educationservices/healthcare.png';
import intership from '../../../assets/educationservices//intership.png';
import education from '../../../assets/educationservices/educationloan.png';
import coaching from '../../../assets/educationservices/coaching.png';

const EducationService = () => {
    return (
        <div className=' h-screen mt-12 mb-12'>
            <div className='h-1/6 '>
                <h2 className='text-white text-center underline underline-offset-1 uppercase '>featured services</h2>
                <h2 className='text-white text-center text-4xl capitalize mt-4 '>Education services</h2>

            </div>
            <div class=" h-5/6 grid lg:grid-cols-3   ml-32  mr-32 md:grid-cols-1  ">
           <div>
            <div className="card w-64  text-primary-content hover:glass">
            <div className="card-body">
            <div>
                <img className='w-2/6 hover:bg-white' src={university} alt="" />
                <div>
                <h2 className="card-title text-2xl capitalize hover:text-black">university admission</h2>
            <p className='capitalize hover:text-black hover:uppercase'>university admission in higher education is designed to make
            an impact on the student affairs track . </p>
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
            <img className='w-2/6 hover:bg-white' src={work} alt="" />
            <div>
            <h2 className="card-title  text-2xl capitalize hover:text-black">work permit process</h2>
            <p className='capitalize hover:uppercase hover:text-black'>work permit approval in higher education is designed for career professional seeking
            to make an impact on the student affairs track .</p>
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
                <img className='w-2/6 hover:bg-white' src={health} alt="" />

                <div>
                <h2 className="card-title  capitalize hover:text-black">health insurance</h2>
            <p className='capitalize hover:uppercase hover:text-black'>health & medical in higher education is designed for early-career professional
            seeking to make an impact on .</p>
                </div>
            </div>
              
          
      </div>
        </div>
         </div>
         </div>
         <div>
            <div>
            <div className="card w-64  text-primary-content hover:glass">
            <div className="card-body">
            <div>
                <img src={intership} className="w-2/6 hover:bg-white" alt="" />
                <div >
                <h2 className="card-title capitalize hover:text-black">overseas internship</h2>
            <p className='capitalize hover:uppercase hover:text-black'> if you want to intern in higher education is designed for early-career professionals
            seeking to make an impact on the student affairs track .</p>
                </div>
            </div>
          
      </div>
        </div>
         </div>
         </div>
         <div>
            <div>
            <div className="card w-64  text-primary-content hover:glass">
            <div className="card-body">
            <div>
                <img src={education} className="w-2/6 hover:bg-white" alt="" />
                <div >
                <h2 className="card-title capitalize hover:text-black">education loan</h2>
            <p className='capitalize hover:uppercase hover:text-black'>we manage the loan in higher education is designed for early-career professionals
            seeking to make an impact on the student affairs track .</p>
                </div>
            </div>
          
      </div>
        </div>
         </div>
         </div>
         <div>
            <div>
            <div className="card w-64  text-primary-content hover:glass">
            <div className="card-body">
            <div>
                <img src={coaching} className="w-2/6 hover:bg-white" alt="" />
                <div >
                <h2 className="card-title capitalize hover:text-black">coaching assistance</h2>
            <p className='capitalize hover:uppercase hover:text-black'> student need help in higher education is designed for early-career <br />
            professional seeking to make an impact on the student affairs track .</p>
                </div>
            </div>
          
      </div>
        </div>
         </div>
         </div>
  
  
  
</div>
        </div>
    );
};

export default EducationService;