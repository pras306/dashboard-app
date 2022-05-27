import React, { useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';

import './MainContent.css';
import Card from '../../components/Card/Card';
import ExpandedCard from '../../components/ExpandedCard/ExpandedCard';
import Grid from '../../components/Grid/Grid';
import { CardData, ProductsData } from '../../data/AppData';

const MainContent = () => {
  
  const [expand, setExpand] = useState(-1);

  return (
    <div className='app__main'>
        <h1>Dashboard</h1>
        <div className='app__main-cards'>
            {CardData.map((card, idx) => {
                return (
                  <AnimateSharedLayout key={idx}>
                    {expand === idx ? 
                      <ExpandedCard title={card.title} color={card.color} series={card.series} setExpand={() => setExpand(-1)} />
                     : 
                      <Card title={card.title} color={card.color} barValue={card.barValue} value={card.value} png={card.png} setExpand={() => setExpand(idx)} />
                    }
                  </AnimateSharedLayout>
                )
            })}
        </div>
        <h4>Recent Orders</h4>
        <div className='app__main-products'>
            <Grid titles={['Product', 'Tracking ID', 'Date', 'Status']} data={ProductsData} actionButtons={true} />
        </div>
    </div>
  );
}

export default MainContent;