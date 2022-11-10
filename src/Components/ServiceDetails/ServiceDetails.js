import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { AuthContext } from '../../Context/AuthProvider';
import Opinions from '../Opinions/Opinions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServiceDetails = () => {
    const { user } = useContext(AuthContext);
    const serviceDetails = useLoaderData();
    const { picture, price, details, name, _id } = serviceDetails;
    const [review, setReview] = useState({});
    const [addedReview, setAddedReview] = useState([]);

    const handleInputBlur = e => {
        const form = e.target;
        const email = user?.email || 'unregistered';
        const reviewMessage = form.value;
        const photoUser = user.photoURL;
        const reviewDetails = {
            id: _id,
            serviceName: name,
            customer: user.displayName,
            email,
            reviewMessage,
            time: Date.now(),
            photoUser
        }
        setReview(reviewDetails);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://your-medico-server.vercel.app/myreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => console.log(data))
        toast.success('Thanks for your review');
    }

    // review data for showing review  
    useEffect(() => {
        fetch(`https://your-medico-server.vercel.app/myreview/${_id}`)
            .then(res => res.json())
            .then(data => setAddedReview(data))
    }, [_id])


    return (

        // service details 
        <div className='bg-cyan-100 flex flex-col justify-center items-center'>

            {/* service details info  */}
            <section className="bg-white dark:bg-gray-900 rounded-2xl my-5">
                <div className="container px-6 pb-10 mx-auto">


                    <div className="mt-8 lg:-mx-6 lg:flex lg:items-center">
                        <PhotoProvider>
                            <PhotoView src={picture}>
                                <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={picture} alt="" />
                            </PhotoView>
                        </PhotoProvider>
                        <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                            <h1 className="text-3xl font-semibold text-cyan-900 capitalize lg:text-4xl dark:text-white">{name}</h1>
                            <p className='font-bold text-cyan-900 text-2xl pt-2 pb-5'>
                                Price: {price}
                            </p>

                            <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                                {details}
                            </p>


                        </div>
                    </div>
                </div>
            </section>


            {/* review section */}



            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-10'>
                {
                    addedReview.map(rvw => <Opinions key={rvw._id} rvw={rvw}></Opinions>)
                }
            </div>


            {
                user?.email ?
                    <div className="flex flex-col w-1/2 mx-48 p-8 shadow-sm rounded-xl lg:p-5 mb-5 bg-cyan-900 text-gray-100">
                        <div className="flex flex-col items-center w-full">
                            <h2 className="text-3xl font-semibold text-center">Your opinion matters!</h2>
                            <div className="flex flex-col items-center py-6 space-y-3">
                                <span className="text-center">How was your experience?</span>

                            </div>

                            {/* review form  */}

                            <form onSubmit={handleSubmit} className="flex flex-col w-full">
                                <input onBlur={handleInputBlur} rows="3" type="text" placeholder='Write a review...' name='reviewmsg' className="p-4 rounded-md resize-none text-cyan-900 bg-white" />

                                <button type="submit" className="py-4 my-8 font-semibold rounded-md text-cyan-900 bg-cyan-400">Leave feedback</button>
                            </form>

                        </div>

                    </div> : <p className='mb-10 text-2xl border-2 p-3 rounded-2xl border-black'>Please <Link to='/login' className="text-blue-600 " >login</Link> to give a review!</p>
            }



        </div>
    );
};

export default ServiceDetails;