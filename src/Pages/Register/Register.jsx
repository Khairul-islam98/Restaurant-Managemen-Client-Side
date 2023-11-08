import React, { useContext } from 'react';
import img from '../../assets/images/loginimg.jpg';
import imgbg from '../../assets/images/login-bg.jpg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { Helmet } from 'react-helmet';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, photo, email, password);


        if (!/(?=.*[A-Z])/.test(password)) {
            toast.error("Password must contain at least one capital letter.")
            return
        } else if (!/(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\-])/.test(password)) {
            toast.error("one special character")
            return
        }
        else if (password.length < 6) {
            toast.error("Password must be at least 6 characters long.")
            return
        }
        createUser(email, password)
            .then(result => {
                toast.success('Registration successful')
                navigate(location?.state ? location.state : '/')
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo,
                })


            })
            .catch(() => toast.error("Already have a Account"))
    }
    return (
        <div className="w-full h-full" style={{ backgroundImage: `url(${imgbg})` }}>
            <Helmet>
                <title>Restaurant Management || Register </title>
            </Helmet>
            <section className="p-10">
                <div className="container grid h-full gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
                    <img src={img} alt="" className="object-cover mt-5 opacity-50 border w-full rounded-md xl:col-span-3" />
                    <div className="w-full gradient-border space-y-5 px-6 py-5 border rounded-md sm:px-12 md:px-16 xl:col-span-2">
                        <h1 className="text-4xl mb-8 font-extrabold text-white">Please Registration</h1>
                        <form onSubmit={handleRegister} className="self-stretch space-y-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                            </div>
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
                            </div>
                            <div>
                                <button type="submit" className="w-full btn btn-outline px-12 text-red-400">Registration</button>
                                <p className='text-white'>Already have account? <Link className='text-red-400' to='/login'>Login</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Register;