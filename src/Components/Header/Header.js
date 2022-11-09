import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Header = () => {
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
                    <button onClick={handleLogout} className="self-center px-8 py-3 rounded">SignOut</button>
                </>
                :
                <div className='items-center flex-shrink-0 hidden lg:flex'>
                    <Link to='/login'><button className="self-center px-8 py-3 font-semibold rounded">Sign in</button></Link>
                    <Link to='/signup'><button className="self-center px-8 py-3 border p-3 border-black/50 hover:border-white font-semibold rounded-2xl text-white bg-cyan-900 ">Join Now</button></Link>
                </div>
        }
    </>
    return (
        <div>
            <header className="p-4 bg-cyan-200 dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex justify-between items-center h-5 mx-auto">

                {/* links  */}
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <Link to='/' className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border-transparent ">Home</Link>
                        </li>
                        <li className="flex">
                            <Link to='/services' className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border-transparent">Services</Link>
                        </li>
                        <li className="flex">
                            <Link to='/blog' className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border-transparent">Blog</Link>
                        </li>
                        <li className="flex">
                            <Link to='/myreview' className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border-transparent">My Review</Link>
                        </li>
                        <li className="flex">
                            <Link to='/addservice' className="flex items-center px-4 -mb-1 hover:border-b-2 dark:border-transparent">Add Services</Link>
                        </li>
                    </ul>
                {/* sign up and sign in  */}

                    <div className="">
                        {menuItems}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;