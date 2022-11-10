import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const EditReview = () => {
    const storedReview = useLoaderData();
    const [review, setreview] = useState({});

    const handleUpdateUser = (e) => {
        e.preventDefault();

        // console.log(user);
        fetch(`http://localhost:5000/review/${storedReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            console.log(review)
    }
    const handleInputChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newreview = { ...review }
        newreview[field] = value;
        setreview(newreview);
    }
    
    return (
        <div>
            this is update and the name is {storedReview.name}
            <form onSubmit={handleUpdateUser}>
                <h1>Add user</h1>
                <input onChange={handleInputChange} defaultValue={storedReview.name} type="text" placeholder='' name='reviewMessage' />
                <button type='submit'>Update User</button>
            </form>
        </div>
    );
};

export default EditReview;