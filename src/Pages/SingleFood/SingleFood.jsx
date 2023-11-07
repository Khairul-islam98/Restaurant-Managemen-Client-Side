import React from 'react';
import banner from '../../assets/images/singlefood.gif'
import { useLoaderData } from 'react-router-dom';
import Foods from './Foods/Foods';

const SingleFood = () => {
    const singleFoods = useLoaderData()


   
    
    return (
        <div>
            <div className="hero min-h-[400px] opacity-95 mb-5 " style={{ backgroundImage: `url(${banner})` }}>
            </div>
            <div className='mb-10'>
                {
                    singleFoods.map(food => <Foods key={food._id} food={food}></Foods>)
                }
            </div>
        </div>
    );
};

export default SingleFood;