import React, { useContext } from 'react';
import img from '../../assets/images/loginimg.jpg';
import imgbg from '../../assets/images/login-bg.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import toast from 'react-hot-toast';
import axios from 'axios';
const Login = () => {
    const { signUser, signInGoogle } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        signUser(email, password)
        .then(result => {
                
            // toast.success('Login successful')
            // navigate(location?.state ? location.state : '/')
        })
        .catch(() => toast.error("An error occurred while logging in."))
    } 

    const handleGoogle = () => {
        signInGoogle()
        .then(() => {
            toast.success('Login successful')
            navigate(location?.state ? location.state : '/')
        })
        .catch(() => toast.error("Can't sign in to your Account"))
    }
    return (
        <div className="" style={{ backgroundImage: `url(${imgbg})` }}>
            <section className="p-6">
                <div className="container grid h-full gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <img src={img} alt="" className="object-cover opacity-50 border w-full rounded-md xl:col-span-3" />
                    <div className="w-full gradient-border space-y-5 px-6 py-5 border rounded-md sm:px-12 md:px-16 xl:col-span-2">
                        <h1 className="text-5xl mb-8 font-extrabold text-white">Please Login</h1>

                        <form onSubmit={handleLogin} className="self-stretch space-y-7">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover  text-white">Forgot password?</a>
                                </label>
                            </div>

                            <button type="submit" className="w-full btn btn-outline px-12 text-red-400">Login</button>
                        </form>
                        <button
                            onClick={handleGoogle}
                            className="flex select-none text-gray-500 dark:text-gray-300  mx-auto items-center gap-3 rounded-lg border border-blue-gray-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-blue-gray-500 transition-all hover:opacity-75 focus:ring focus:ring-blue-gray-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                        >
                            <p className="text-3xl"> <FcGoogle></FcGoogle> </p>
                            Continue with Google
                        </button>
                        <p className='text-white'>Don't have account? <Link className='text-red-400' to='/register'>Registration</Link></p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;