import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../Hooks/useTitle';

const AddServices = () => {
    useTitle('Add Services - Your Medico')
    const [service, setService] = useState({});
    // console.log(service)
    const handleAddServices = (e) => {
        e.preventDefault();

        // console.log(service);

        fetch('https://your-medico-server.vercel.app/services',{
            method: 'POST',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(service)
        })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
        })
        toast.success('Service added successfully');

    }
    
    const handleInputBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newService = { ...service }
        newService[field] = value;
        setService(newService);
    }
    return (
        <div className='flex flex-col justify-center items-center w-full my-10'>
            <form onSubmit={handleAddServices} class=" w-full max-w-lg">

                {/* service name input  */}
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full  px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Service Name
                        </label>
                        <input onBlur={handleInputBlur} name="name" className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="enter service name here..." />
                    </div>

                </div>


                {/* service details input  */}

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Details of your service
                        </label>
                        <input onBlur={handleInputBlur} name='details' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="enter service details here" />
                    </div>
                </div>


                {/* service price  */}

                <div className="flex flex-wrap -mx-3 mb-2">
                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Price
                        </label>
                        <input onBlur={handleInputBlur} name='price' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="$00" />
                    </div>

                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Rating
                        </label>
                        <input onBlur={handleInputBlur} name='rating' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="5.0" />
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Service picture URL
                        </label>
                        <input onBlur={handleInputBlur} name='picture' className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="'https://www.image.com'" />
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <button type='submit' className='p-3 hover:bg-black hover:text-white rounded-2xl border-2 border-black transition duration-300 ease-in-out font-bold  w-1/2'>Add Service</button>
                </div>

            </form>
        </div>
    );
};

export default AddServices;