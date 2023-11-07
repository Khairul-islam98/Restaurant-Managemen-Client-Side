import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { AuthContext } from '../../../Provider/AuthProvider';


const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    const handleSignOut = () => {
        logout()
            .then(() => {

            })
            .catch()
    }

    const navLink = <>
        <li><NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white font-bold underline" : ""
            }
        >
            Home
        </NavLink></li>
        <li><NavLink
            to="/allfoods"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white font-bold underline" : ""
            }
        >
            All Food Items
        </NavLink></li>
        <li><NavLink
            to="/blogs"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white font-bold underline" : ""
            }
        >
            Blogs
        </NavLink></li>
    </>

    return (
        <div className="navbar bg-[#0e7490] shadow-md ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0e7490] rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to="/" className="navbar-item">
                    <div className='flex items-center'>
                    <img src={logo} alt="logo" className=" h-14" />
                    <h1 className='font-bold text-white'>Restaurant Management</h1>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                <label tabIndex={0} className="">
                    <div className="">
                            {
                                user ? <div className='w-10 rounded-full'><img className='btn btn-ghost btn-circle avatar border border-blue-800 rounded-full' src={user?.photoURL} /></div> : 
                                <button className='btn w-full'>Login</button>

                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#0e7490] rounded-box w-52">
                        <li>
                            <a className="justify-center">
                                {
                                    user ? <h2 className='font-bold text-red-400'> {user && <span> {user?.displayName} </span>}</h2> :
                                    <p></p>
                                }

                            </a>
                        </li>
                        <li>
                            
                            {
                                user ? <Link to='/myfood'><button className='btn bg-[#fe3811] text-white px-12'>My Food</button></Link> : <p></p>
                            }
                            
                        </li>
                        <li>
                            
                            {
                                user ? <Link to='/addfood'><button className='btn  bg-[#fe3811] text-white px-12'>Add Food</button></Link> : <p></p>
                            }
                            
                        </li>
                        <li>
                            
                            {
                                user ? <Link to='/myorder'><button className='btn bg-[#fe3811] text-white px-12'>My order</button></Link> : <p></p>
                            }
                            
                        </li>
                        {
                            user ?
                                <button onClick={handleSignOut} className='btn btn-outline px-12 text-red-400'>Sign Out</button>
                                :
                                <Link to='/login'>
                                    <button className='btn w-full'>Login</button>
                                </Link>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;



