import React from 'react';

import './SideContent.css';
import ReviewCard from '../../components/ReviewCard/ReviewCard';
import ChartCard from '../../components/ChartCard/ChartCard';
import { UpdatesData, CustomersReviewData } from '../../data/AppData';

const SideContent = () => {
  return (
    <div className='app__side'>
        <h2>Updates</h2>
        <ReviewCard reviews={UpdatesData}/>
        <h2>Customer Review</h2>
        <ChartCard data={CustomersReviewData} />
    </div>
  );
};

export default SideContent;