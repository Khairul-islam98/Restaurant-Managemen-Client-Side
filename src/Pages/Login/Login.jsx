import React from 'react';
import img from '../../assets/images/loginimg.jpg';
import imgbg from '../../assets/images/login-bg.jpg';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="w-full" style={{ backgroundImage: `url(${imgbg})` }}>
            <div className="hero min-h-screen flex items-center justify-center">
                <div className="md:hero-content">
                    <div >
                        <img className='rounded-xl mb-1 lg:h-[450px]' src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm border justify-center">
                        <h2 className='text-center font-semibold text-2xl mt-6 text-white'>Please Login</h2>
                        <form  className="card-body">
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
                                    <a href="#" className="label-text-alt link link-hove text-white">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn bg-[#FF3811] text-white' type="submit" value="Login" />
                            </div>
                            <p className='text-white'>Already have account? <Link className='text-red-500' to='/register'>Registration</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;