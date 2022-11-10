import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import HomeService from './HomeService';

const Home = () => {
    useTitle('Home - Your Medico')
    const services = useLoaderData();
    // console.log(services)
    return (
        <div className='lg:mx-16'>
            <div className='flex lg:flex-row flex-col my-16 '>
                <div className='w-full lg:w-2/3 bg-cyan-50 rounded-2xl mr-10'>
                    <h1 className='text-5xl text-center py-10 font-bold text-cyan-900'>
                        Your smile is important.
                    </h1>
                    <p className='text-center text-cyan-900 mx-10 md:mx-16 lg:mx-24 pb-10'>You know when your smile is less than great. It’s why you hide your smile behind your hand or refuse to let anyone see your teeth. When you don’t smile, people tend to judge you harshly and think you’re unhappy even when you’re in a really good mood. Seeing the dentist on a regular basis for check-ups and to take care of problems keeps your smile looking it’s best. Talk to your dentist about using whiteners or other simple measures to brighten your smile.</p>
                </div>
                <img className="rounded-2xl w-full object-cover  lg:w-1/3 " src="https://images.unsplash.com/photo-1498674202614-ac0172c6c61a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" />


            </div>
            <div className='flex lg:flex-row flex-col mt-24 mb-3 text-justify'>

                <img className="rounded-2xl w-full object-cover lg:w-1/2 " src="https://images.unsplash.com/photo-1626736903650-2289a3b32ed8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1524&q=80" alt="" />

                <div className='w-full lg:w-1/2 bg-cyan-50 px-5 rounded-2xl lg:mx-10 text-center '>
                    <h1 className='text-5xl  py-10  font-bold text-cyan-900'>
                        I'll will be your dentist for keep your smile
                    </h1>
                    <h1 className='font-semibold my-5'>
                        Dr. Amy Davidson
                    </h1>
                    <p className='text-justify'>
                        Dr. Amy Davidson is a licensed dentist who provides all the physiologic jaw and dental arch developmental services at Professional Dental of Clarkston.  She also treats many common myofunctional / speech disorders as it relates to structures of the head and neck region.  She is originally from Pittsburgh, Pennsylvania and completed her Bachelor of Science degree at the University of Pittsburgh in 1998. She continued her education at the University of Pittsburgh School of Dental Medicine and graduated in 2002. Shortly after dental school, she moved to Michigan and completed a 2-year intensive orthodontic* training program with Progressive Orthodontics Seminars (POS). This program has a proven 34-year history of successfully training over 7,000 general dentists from all over the world.

                    </p>
                </div>
            </div>

            <div className='bg-cyan-50 text-justify px-5 rounded-2xl'>
                <p>
                    Dr. Amy’s very best treatment modalities continue to change as her knowledge and skill set is always evolving through continuing education.  She considers herself a truly dedicated life-long student in the dental field.  Currently, she continues to expand her knowledge through several leading educational organizations including the world renowned, Las Vegas Institute for Advanced Dental Studies in the areas of Physiologic Neuromuscular and Full Face Orthopedic concepts.  She is also a certified “Preferred Provider” in Invisalign.    Dr. Amy is currently working toward a Masters degree in applied breathing science.  This program is designed for various health care professionals to help patients with sleep and other daytime breathing/airway disorders.  She is trained to diagnose and treat lip and tongue ties on infants and children.  Some infants that struggle to thrive due to their inability to latch to their mother during feeding can be due to a lip or tongue tie.  It is life changing to both the infant and mother’s health to have this procedure.

                    Dr. Amy’s primary treatment concepts focus on the in-depth diagnosis of physiologic dental and skeletal malocclusions (“bad bites”).  She understands if there is a physiologic problem with any area of the head and neck region, it requires a physiologic solution.  Straight teeth do not always translate to a healthy TMJ, muscle/jaw balance, or airway health.  These cutting-edge concepts are what Dr. Amy is passionate about in dentistry.  It is important for her to consider proper muscle balance with the TMJ joints in every one of her patients.  Recognizing airway obstruction and sleep / breathing disorders in both her adult and pediatric patients is paramount.  Dr. Amy believes in the value of early muscular skeletal intervention as it relates to facial development in young children. However, she evaluates each patient individually and understands that not all cases require early treatment. The most important aspect of Dr. Amy’s services is the value that she takes the time to see every one of her patients at each individual visit.
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10 gap-20'>
                {
                    services.map(service =>
                        <HomeService
                            key={service._id}
                            service={service}

                        ></HomeService>
                    )
                }

            </div>
            <div className='text-center mb-10'>
                <Link className=' text-white font-semibold p-5 hover:bg-cyan-900 transition duration-300 ease-in-out rounded-2xl bg-cyan-800' to='/services'>View All Services</Link>
            </div>
        </div>
    );
};

export default Home;