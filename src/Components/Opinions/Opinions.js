import React from 'react';

const Opinions = ({ rvw }) => {
    const { reviewMessage, customer, photoUser } = rvw;

    return (
        <div>
            <div className=" flex flex-col px-24 my-5 w-full p-6 mx-auto divide-y rounded-md divide-gray-700 bg-gray-900 text-gray-100">
                <div className="flex justify-between p-4">
                    <div className="flex space-x-4">
                        <div>
                            <img src={photoUser} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                        </div>
                        <div>
                            <h4 className="font-bold">{customer}</h4>
                            <span className="text-xs text-gray-400">{}</span>
                        </div>
                    </div>
                    
                </div>
                <div className="p-4 space-y-2 text-sm text-gray-400">
                    <p>{reviewMessage}</p>
                </div>
            </div>
        </div>
    );
};

export default Opinions;