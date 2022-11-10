import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const EditReview = () => {
    const storedReview = useLoaderData();
    const [review, setreview] = useState({});

    const handleUpdateUser = (e) => {
        e.preventDefault();

        // console.log(user);
        fetch(`https://your-medico-server.vercel.app/review/${storedReview._id}`, {
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
            {/* this is update and the name is {storedReview.name}
            <form onSubmit={handleUpdateUser}>
                <h1>Add user</h1>
                <input onChange={handleInputChange} defaultValue={storedReview.name} type="text" placeholder='' name='reviewMessage' />
                <button type='submit'>Update User</button>
            </form> */}

            <div className="flex flex-col items-center w-full my-10">
                <h2 className="text-3xl text-cyan-900 font-semibold text-center my-5">Update Your review</h2>

                {/* review form  */}

                <form onSubmit={handleUpdateUser} className="flex flex-col w-1/2">
                    <input onBlur={handleInputChange}  type="text" placeholder='Write your updated review...' name='reviewMessage' className="border-2 border-black/10 p-4 rounded-md resize-none text-cyan-900 bg-white" />

                    <button type="submit" className="py-4 my-8 font-semibold rounded-md text-cyan-900 bg-cyan-400">Update</button>
                </form>

            </div>
        </div>
    );
};

export default EditReview;