import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TopSellingitem = () => {
    const [topSellingItems, setTopSellingItems] = useState([]);

    useEffect(() => {
        axios.get('https://restaurant-management-server-snowy.vercel.app/products')
            .then(data => {
                setTopSellingItems(data.data)
            })
    }, [])

    const topSixItems = topSellingItems.slice(0, 6);

    return (
        <div className='py-10'>
            <div className="grid mx-auto md:grid-cols-2 lg:grid-cols-3 gap-3 w-5/6">
                {topSixItems.map((food) => (
                    <div key={food._id} className='py-5'>
                        <div className="relative flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                            <div className="mx-4  overflow-hidden text-white shadow-lg rounded-xl ">
                                <img className='h-56 w-full'
                                    src={food.food_image}
                                    alt="img-blur-shadow"
                                    layout="fill"
                                />
                            </div>
                            <div className="p-6 ">
                                <div className='flex justify-between'>
                                    <div className=' flex flex-col'>
                                        <h5 className="block mb-2 text-xs antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 lg:text-xl">
                                            {food.food_name}
                                        </h5>

                                        <h2 className='text-lg '>Price: {food.price} $</h2>
                                    </div>
                                    <div className=''>
                                        <h5 className="block text-sm antialiased font-semibold leading-snug tracking-normal text-red-500">
                                            {food.food_category}
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center mb-2">
                                <Link to={`/singlefood/${food._id}`}><button className='btn btn-outline px-12 text-red-400 w-56'>Details</button></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Link to='/allfoods'><button className='btn btn-outline btn-success px-10 mt-5 flex mx-auto'>see all</button></Link>
        </div>
    );
};

export default TopSellingitem;