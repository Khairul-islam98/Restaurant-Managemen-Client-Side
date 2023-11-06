import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../assets/images/404.gif'

const Error = () => {
    return (
        <div>
            <div>
                <div className='text-center mt-20 py-3'>
                    <Link><button className='btn btn-outline px-12 text-red-400'>Go to Home</button></Link>
                </div>
                <div className="container mx-auto px-5 flex justify-center items-center rounded-sm">
                    <img className=' h-96' src={error} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Error;