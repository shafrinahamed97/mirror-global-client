import React from 'react';
import Banner from '../Banner/Banner';
import EducationService from '../EducationService/EducationService';
import EffectiveVisaSolution from '../EffectiveVisaSolution/EffectiveVisaSolution';
import ExploreScope from '../ExploreScope/ExploreScope';
import HowWeWork from '../HowWeWork/HowWeWork';
import RecentUpdateOfVisa from '../RecentUpdateOfVisa/RecentUpdateOfVisa';
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
            <EducationService></EducationService>
            <CreditTransfer></CreditTransfer>
            <OurTeam></OurTeam>
            <RecentUpdateOfVisa></RecentUpdateOfVisa>
        </div>
    );
};

export default Home;
