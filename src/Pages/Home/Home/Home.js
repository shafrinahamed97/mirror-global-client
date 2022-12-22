import React from 'react';
import Banner from '../Banner/Banner';
import EffectiveVisaSolution from '../EffectiveVisaSolution/EffectiveVisaSolution';
import BrowseCourses from './BrowseCourses/BrowseCourses';

import CreditTransfer from './CreditTransfer/CreditTransfer';
import FeaturedServices from './FeaturedServices/FeaturedServices';
import OurTeam from './OurTeam';
import StudySeason from './StudySeason/StudySeason';

const Home = () => {
    return (
        <div className='pt-20'>
            
            <StudySeason></StudySeason>
            <Banner></Banner>
            <EffectiveVisaSolution></EffectiveVisaSolution>
            <FeaturedServices></FeaturedServices>
            <BrowseCourses></BrowseCourses>
            <CreditTransfer></CreditTransfer>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;
