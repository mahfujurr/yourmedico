import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [open, setOpen] = useState(true);
    const { user, logOutUser } = useContext(AuthContext);
    const handleLogout = () => {
        logOutUser()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
                console.log(error.message)
            });
    }
    const menuItems = <>
        {
            user?.email ?
                <>
                    <button onClick={handleLogout} className="self-center lg:px-8 py-3 text-white font-semibold px-4 bg-cyan-900 rounded-2xl hover:bg-cyan-900/80 transition duration-300 ease-in-out">SignOut</button>
                </>
                :
                <div className='items-center flex-shrink-0  lg:flex'>
                    <Link to='/login'><button className="self-center lg:px-8 py-3 font-semibold px-4  rounded-2xl hover:bg-black/10 transition duration-300 ease-in-out">Sign in</button></Link>
                    <Link to='/signup'><button className="self-center lg:px-8 py-3 border p-3 border-black/50 hover:border-white transition duration-300 ease-in-out font-semibold rounded-2xl text-white bg-cyan-900 ">Join Now</button></Link>
                </div>
        }
    </>
    return (
        <div className=' drop-shadow-xl'>
            <header className=" bg-cyan-200 ">
                <div className=" py-1 flex justify-between items-center">
                    <div className='flex justify-center items-center pl-10'>
                        <img className='w-10' src="https://cdn-icons-png.flaticon.com/512/458/458073.png" alt="" />
                        <Link to='/' className='text-2xl font-bold text-cyan-900 ml-2'>Your Medico</Link>
                    </div>

                    {/* links  */}
                    <div className={`lg:flex py-2 font-semibold  lg:py-0 text-center justify-center items-center  lg:flex-row flex-col absolute lg:static bg-cyan-200 lg:bg-black/0 w-full lg:w-auto  duration-200 ease-in ${open ? 'hidden' : 'top-[56px]'}`}>
                        
                            <Link to='/' className="flex items-center px-4 py-2 rounded-2xl hover:bg-black/10 transition duration-300 ease-in-out   ">Home</Link>                     
                            <Link to='/services' className="flex items-center px-4 py-2 rounded-2xl hover:bg-black/10 transition duration-300 ease-in-out">Services</Link>                       
                            <Link to='/blog' className="flex items-center px-4 py-2 rounded-2xl hover:bg-black/10 transition duration-300 ease-in-out">Blog</Link>                        
                            <Link to={`/myreview/user/${user?.email}`} className="flex items-center px-4 py-2 rounded-2xl hover:bg-black/10 transition duration-300 ease-in-out">My Review</Link>                       
                            <Link to='/addservices' className="flex items-center px-4 py-2 rounded-2xl hover:bg-black/10 transition duration-300 ease-in-out">Add Services</Link>
                    </div>
                    {/* sign up and sign in  */}

                    <div className="lg:pr-10 ">
                        {menuItems}
                    </div>

                    <button onClick={() => setOpen(!open)} className=" h-12 flex w-12 text-white lg:hidden">
                        {
                            open ? <Bars3Icon /> : <XMarkIcon />
                        }
                    </button>
                </div>
            </header>
        </div>
    );
};

export default Header;