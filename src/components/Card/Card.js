import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { motion } from 'framer-motion';

import './Card.css';

const Card = (props) => {
  return (
    <motion.div layoutId='expandableCard' className='app__card' style={{'background': `${props.color.backGround}`, 'boxShadow': `${props.color.boxShadow}`}} onClick={props.setExpand} >
        <div className='app__card-header'>
            <CircularProgressbar value={props.barValue} text={`${props.barValue}%`} />
            <h3>{props.title}</h3>
        </div>
        <div className='app__card-content'>
            <props.png />
            <span className='app__card-content_value'>${props.value}</span>
            <span>Last 24 hours</span>
        </div>
    </motion.div>
  );
};

export default Card;