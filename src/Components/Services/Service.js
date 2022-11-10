import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../Hooks/useTitle';

const Service = ({ service }) => {
    useTitle('Services')
    const { _id, name, details, picture, price } = service;
    console.log(service);
    return (
        <div>
            <div className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 border border-black/10">

                <PhotoProvider>
                    <PhotoView src={picture}>
                        <img src={picture} alt="" className="object-cover  h-80 w-full  rounded-t-md  dark:bg-gray-500" />
                    </PhotoView>
                </PhotoProvider>



                <div className="flex flex-col justify-between p-6 space-y-6">
                    <div className="space-y-2">
                        <h2 className="text-3xl text-cyan-900 font-semibold tracking-wide">{name}</h2>
                        <p className="dark:text-gray-100 text-black/80">{details.length > 150 ? details.slice(0, 100) + '...' : details}</p>
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

export default Service;