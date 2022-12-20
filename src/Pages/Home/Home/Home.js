import React from 'react';
import Banner from '../Banner/Banner';
import EffectiveVisaSolution from '../EffectiveVisaSolution/EffectiveVisaSolution';
import FeaturedSerivces from './FeaturedServices/FeaturedSerivces';
import OurTeam from './OurTeam';
import StudySeason from './StudySeason/StudySeason';

const Home = () => {
    return (
        <div className='pt-20'>
            
            <StudySeason></StudySeason>
            <Banner></Banner>
            <EffectiveVisaSolution></EffectiveVisaSolution>
            <FeaturedSerivces></FeaturedSerivces>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;
