import React from 'react';
import { UilTimes } from '@iconscout/react-unicons';
import Chart from 'react-apexcharts';
import { motion } from 'framer-motion';

import './ExpandedCard.css';
import { ChartData } from '../../data/AppData';

const ExpandedCard = (props) => {
  return (
      <motion.div layoutId='expandableCard' className='app__extended_card' style={{'background': `${props.color.backGround}`, 'boxShadow': `${props.color.boxShadow}`}}>
          <div className='app__extended_card-icon'>
              <UilTimes onClick={props.setExpand} />
          </div>
          <span className='app__extended_card-title'>{props.title}</span>
          <div className='app__extended_card-chart'>
              <Chart series={props.series} type='area' options={ChartData.options} />
          </div>
          <span>Last 24 hours</span>
      </motion.div>
  );
};

export default ExpandedCard;