import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const HomeService = ({ service }) => {
    const { _id, name, details, picture, price } = service;
    console.log(service);
    return (
        <div>
            <div className=" rounded-md shadow-md  border border-black/10">

                <PhotoProvider>
                    <PhotoView src={picture}>
                        <img src={picture} alt="" className="object-cover  h-80 w-full  rounded-t-md  dark:bg-gray-500" />
                    </PhotoView>
                </PhotoProvider>



                <div className="flex flex-col justify-between p-6 space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl text-cyan-900 font-semibold tracking-wide">{name}</h2>
                        <p className=" text-black/80">{details.length > 150 ? details.slice(0, 150) + '...' : details}</p>
                    </div>
                    {/* <p>
                        Rating: {rating}
                    </p> */}

                    <p className='font-bold text-2xl'>
                        Price: {price}
                    </p>

                    <Link to={`/services/${_id}`}><button type="button" className=" bg-cyan-200 hover:bg-cyan-400 text-cyan-900 flex items-center justify-center w-full p-3 text-xl font-semibold tracking-wide rounded-md ">Read more</button></Link>
                </div>
            </div>
        </div>
    );
};

export default HomeService;