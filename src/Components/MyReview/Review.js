import React from 'react';
import { Link } from 'react-router-dom';
import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid'

const Review = ({ reviews }) => {
    // console.log(reviews);
    const { customer, reviewMessage, _id, photoUser } = reviews;
    const handleDelete = () => {

        fetch(`https://your-medico-server.vercel.app/myreview/${_id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('User deleted successfully');
                }
            })

    }
    return (
        <div className='flex justify-center items-center my-10'>
            <div className=" flex flex-col p-6 w-1/3 rounded-md divide-gray-700 bg-gray-900 text-gray-100">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src={photoUser} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">{customer}</h4>

                        </div>
                    </div>

                </div>
                <div className="p-4 space-y-2 text-sm text-gray-400">
                    <p>{reviewMessage}</p>
                </div>
            </div>
            <div className='ml-5'>
                <button onClick={handleDelete} className='text-red-500 hover:text-red-600 '>
                    <TrashIcon className='w-10 ' />
                </button>
                <Link to={`/editreview/${_id}`}>
                    <PencilSquareIcon className='w-10 text-blue-500 hover:text-blue-600' />
                </Link>
            </div>
        </div>
    );
};

export default Review;