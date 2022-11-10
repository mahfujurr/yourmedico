import React, { useContext, useEffect, useState } from 'react';

import { AuthContext } from '../../Context/AuthProvider';
import Review from './Review';

const MyReview = () => {
    // const myReviews = useLoaderData();
    const [myReviews, setMyReviews] = useState([]);
    const { user } = useContext(AuthContext); 
    // console.log(myReviews );
    useEffect(()=>{
        fetch(`http://localhost:5000/myreview/user/${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        .then(res=> res.json())
        .then(data => setMyReviews(data))
    },[user?.email])
    
    return (
        <div>
            {
                myReviews.map(reviews => <Review reviews={reviews}></Review> )
            }
            
        </div>
    );
};

export default MyReview;