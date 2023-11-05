import React from 'react';
import img from '../../assets/images/loginimg.jpg';
import imgbg from '../../assets/images/login-bg.jpg';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className="" style={{ backgroundImage: `url(${imgbg})` }}>
            <section className="p-6">
                <div className="container grid h-full gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <img src={img} alt="" className="object-cover opacity-50 border w-full rounded-md xl:col-span-3" />
                    <div className="w-full gradient-border space-y-5 px-6 py-5 border rounded-md sm:px-12 md:px-16 xl:col-span-2">
                        <h1 className="text-5xl mb-8 font-extrabold text-white">Please Login</h1>

                        <form className="self-stretch space-y-7">
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
                            <p className='text-white'>Don't have account? <Link className='text-red-400' to='/register'>Registration</Link></p>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;