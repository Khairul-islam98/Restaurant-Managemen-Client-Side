import React from 'react';
import { Link } from 'react-router-dom';

const Food = ({ product }) => {
    const { _id, food_name, food_image, food_category, price, quantity } = product;

    
    return (
        <div className='py-5'>
            <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                <div className="mx-4  overflow-hidden text-white shadow-lg rounded-xl ">
                    <img className='h-56 w-full'
                        src={food_image}
                        alt="img-blur-shadow"
                        layout="fill"
                    />
                </div>
                <div className="p-6 ">
                    <div className='flex justify-between'>
                        <div className=' flex flex-col'>
                            <h5 className="block mb-2 text-xs antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 lg:text-xl">
                                {food_name}
                            </h5>
                            
                            <h2 className='text-lg '>Price: {price} $</h2>
                        </div>
                        <div className=''>
                            <h5 className="block text-sm antialiased font-semibold leading-snug tracking-normal text-red-500">
                                {food_category}
                            </h5>
                            <h5 className="block mb-2 text-base antialiased font-semibold leading-snug tracking-normal text-blue-500">
                            quantity: {quantity}
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mb-2">
                   <Link to={`/singlefood/${_id}`}><button className='btn btn-outline px-12 text-red-400 w-56'>Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Food;