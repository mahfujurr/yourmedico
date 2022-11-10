import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Review from './Review';

const MyReview = () => {
    const myReviews = useLoaderData();
    
    return (
        <div>
            {
                myReviews.map(reviews => <Review reviews={reviews}></Review> )
            }
            
        </div>
    );
};

export default MyReview;