import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Service from './Service';

const Services = () => {
    const services = useLoaderData();
    const {loading} = useContext(AuthContext);
    if (loading) {
        return <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 rounded-full animate-pulse bg-cyan-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-cyan-400"></div>
            <div className="w-4 h-4 rounded-full animate-pulse bg-cyan-400"></div>
        </div>
    }
    // console.log(services)
    return (
        <div className='grid grid-cols-3 m-10 gap-20'>
            {
                services.map(service =>
                    <Service
                        key={service._id}
                        service={service}

                    ></Service>
                )
            }
        </div>
    );
};

export default Services;