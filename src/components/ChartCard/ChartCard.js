import React from 'react';
import Chart from 'react-apexcharts';

import './ChartCard.css';

const ChartCard = (props) => {
    return (
        <div className='app__chart_card'>
            <Chart series={props.data.series} type='area' options={props.data.options} />
        </div>
    );
};

export default ChartCard;