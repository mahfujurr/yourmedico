import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import { Link } from 'react-router-dom';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../Hooks/useTitle';

const MyReview = () => {
    useTitle('My Reviews - Your Medico')
    const { user } = useContext(AuthContext);
    const [remainingReviews, setRemainingReviews] = useState([]);

    useEffect(() => {
        fetch(`https://your-medico-server.vercel.app/myreview/user/${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setRemainingReviews(data))
    }, [user?.email])

    const handleDelete = (id) => {
        fetch(`https://your-medico-server.vercel.app/myreview/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    const remainingReview = remainingReviews.filter(urs => urs._id !== id)
                    setRemainingReviews(remainingReview);
                    toast.success('Review deleted successfully');
                }
            })
    }

    return (
        <div>
            {
                remainingReviews.length === 0 ? <div className='font-bold text-2xl text-center my-10'>No review found :(</div>
                    :
                    remainingReviews.map(reviews =>
                        <div className='flex justify-center items-center my-10'>
                            <div className=" flex flex-col p-6 w-1/3 rounded-md divide-gray-700 bg-gray-900 text-gray-100">
                                <div className="flex justify-between p-4">
                                    <div className="flex space-x-4">
                                        <div>
                                            <img src={reviews.photoUser} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">{reviews.customer}</h4>
                                            <p className='text-xs'>Reviewed on {reviews.serviceName} </p>
                                        </div>
                                    </div>

                                </div>
                                <div className="p-4 space-y-2 text-sm text-gray-400">
                                    <p>{reviews.reviewMessage}</p>
                                </div>
                            </div>
                            <div className='ml-5'>
                                <button onClick={() => handleDelete(reviews._id)} className='text-red-500 hover:text-red-600 '>
                                    <TrashIcon className='w-10 ' />
                                </button>
                                <Link to={`/editreview/${reviews._id}`}>
                                    <PencilSquareIcon className='w-10 text-blue-500 hover:text-blue-600' />
                                </Link>
                            </div>
                        </div>)
            }

        </div>
    );
};

export default MyReview;