import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import HomeService from './HomeService';

const Home = () => {
    useTitle('Your Medico')
    const services = useLoaderData();
    // console.log(services)
    return (
        <div>
            <div className='grid grid-cols-3 m-10 gap-20'>
                {
                    services.map(service =>
                        <HomeService
                            key={service._id}
                            service={service}

                        ></HomeService>
                    )
                }

            </div>
            <div className='w-full text-center'>
                <Link to='/services'>View All Services</Link>
            </div>
        </div>
    );
};

export default Home;