import React from 'react';
import { Link } from 'react-router-dom';

const Review = ({ reviews }) => {
    // console.log(reviews);
    const { customer, reviewMessage, _id , photoUser} = reviews;
    const handleDelete = () => {

            fetch(`http://localhost:5000/myreview/${_id}`,{
                method: 'DELETE',

            })
            .then(res=> res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('User deleted successfully');
                }
            })
        
    }
    return (
        <div>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
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
            <button onClick={handleDelete} className='p-3 bg-black text-white text-center '>
                delete
            </button>
            <Link to={`/editreview/${_id}`}>
                Edit review
            </Link>
        </div>
    );
};

export default Review;