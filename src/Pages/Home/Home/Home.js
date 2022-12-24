import React from 'react';
import Banner from '../Banner/Banner';
import EffectiveVisaSolution from '../EffectiveVisaSolution/EffectiveVisaSolution';
import ExploreScope from '../ExploreScope/ExploreScope';
import HowWeWork from '../HowWeWork/HowWeWork';
import BrowseCourses from './BrowseCourses/BrowseCourses';

import CreditTransfer from './CreditTransfer/CreditTransfer';
import FeaturedServices from './FeaturedServices/FeaturedServices';
import OnlineVisaImmigration from './OnlineVisaImmigration/OnlineVisaImmigration';
import OurTeam from './OurTeam';
import StudySeason from './StudySeason/StudySeason';

const Home = () => {
    return (
        <div className='pt-20'>
            
            <StudySeason></StudySeason>
            <Banner></Banner>
            <OnlineVisaImmigration></OnlineVisaImmigration>
            <EffectiveVisaSolution></EffectiveVisaSolution>
            <FeaturedServices></FeaturedServices>
            <ExploreScope></ExploreScope>
            <HowWeWork></HowWeWork>
            <BrowseCourses></BrowseCourses>
            <CreditTransfer></CreditTransfer>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;
