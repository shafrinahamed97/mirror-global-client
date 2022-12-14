import React from 'react';
import Banner from '../Banner/Banner';
import OurTeam from './OurTeam';

const Home = () => {
    return (
        <div className='mb-8'>
            <h2 className='uppercase'>This is Home</h2>
            <Banner></Banner>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;
