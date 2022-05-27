import React from 'react';

import './ReviewCard.css';

const ReviewCard = (props) => {
    
    const renderComponent = props.reviews.map((review,idx) => {
        return(
            <div key={idx} className='app__review_card-review'>
                <div className='app__review_card-image'>
                    <img src={review.img} alt={review.name} />
                </div>
                <div className='app__review_card-content'>
                    <span><b>{review.name} </b>{review.noti}</span>
                    <span>{review.time}</span>
                </div>
            </div>
        )
    })
    
    return (
        <div className='app__review_card'>
            {renderComponent}
        </div>
    );
};

export default ReviewCard;