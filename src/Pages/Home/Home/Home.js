import React from 'react';
import Banner from '../Banner/Banner';
import OurTeam from './OurTeam';
import StudySeason from './StudySeason/StudySeason';

const Home = () => {
    return (
        <div className='mb-8'>
            
            <StudySeason></StudySeason>
            <Banner></Banner>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;
