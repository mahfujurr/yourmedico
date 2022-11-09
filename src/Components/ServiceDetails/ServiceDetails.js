import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../Context/AuthProvider';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const serviceDetails = useLoaderData();
    const { picture, price, details, name, _id } = serviceDetails;
    // console.log(serviceDetails);

    // const handleInputBlur = e => {

    // }


    const [review, setReview] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const email = user?.email || 'unregistered';
        const reviewMessage = form.reviewmsg.value;

        const reviewDetails = {
            id: _id,
            serviceName: name,
            customer: user.displayName,
            email,
            reviewMessage
        }
        // console.log(reviewDetails);


        // const newReview = { ...review }
        // reviewDetails = newReview;

        setReview(reviewDetails);

        console.log(review);

        fetch('http://localhost:5000/myreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                form.reset();
            })
    }
    return (

        // service details 
        <div className='bg-cyan-100 flex flex-col justify-center items-center'>
            <div className="p-5 mx-auto sm:p-10 md:p-16  text-gray-100">
                <div className="flex flex-col w-full mx-auto overflow-hidden rounded">

                    <PhotoProvider>
                        <PhotoView src={picture}>
                            <img src={picture} alt="" className="w-full object-cover h-96 bg-gray-500" />
                        </PhotoView>
                    </PhotoProvider>



                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-cyan-900">
                        <div className="space-y-2">
                            <h1 className="inline-block text-2xl font-semibold sm:text-3xl">{name}</h1>
                            <p className="text-2xl font-semibold text-white">
                                Price: {price}
                            </p>
                        </div>
                        <div className="text-gray-100">
                            <p>{details}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* review section */}

            <div className="flex flex-col w-1/2 mx-48 p-8 shadow-sm rounded-xl lg:p-12 bg-cyan-900 text-gray-100">
                <div className="flex flex-col items-center w-full">
                    <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                    <div className="flex flex-col items-center py-6 space-y-3">
                        <span className="text-center">How was your experience?</span>

                    </div>

                    {/* review form  */}

                    <form onSubmit={handleSubmit} className="flex flex-col w-full">
                        <input rows="3"  type="text" placeholder='Write a review...' name='reviewmsg' className="p-4 rounded-md resize-none text-cyan-900 bg-white" />
                        
                        <button type="submit" className="py-4 my-8 font-semibold rounded-md text-cyan-900 bg-cyan-400">Leave feedback</button>
                    </form>

                </div>
                
            </div>


            {/* add revirews  */}

            {/* <form onSubmit={handleSubmit}>
                <h1>Add user</h1>
                <input type="text" placeholder='Write a review...' name='reviewmsg' />

                <button type='submit'>Add user</button>
            </form> */}


        </div>
    );
};

export default ServiceDetails;