import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Foods = ({ food }) => {
    const { _id, food_name, food_image, food_category, price, quantity, food_origin, made_by, short_description} = food;
    // const { user} = useContext(AuthContext)
    // const handleOrder = () => {
    //     if (parseInt(quantity) === 0) {
    //         toast("This item is not available for purchase.");
    //         return
    //     } else if (parseInt(quantity) > 20) {
    //         toast("You can't buy more than.");
    //     } else if (user.email === email) {
    //         toast("You can't purchase your own added food items.");
    //     } else {
    //         const purchaseData = {
    //             food_name: food_name,
    //             food_image: food_image,
    //             price: price,
    //             quantity: quantity,
    //             buyerName: user.displayName,
    //             buyerEmail: user.email,
    //             orderTime: new Date().toLocaleString(),
    //         }
    //         console.log(purchaseData);
    //     }
    // }

    return (
        <div>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 lg: mx-auto">
                <img className='object-cover w-[90%] rounded-t-lg h-72  md:w-48 md:rounded-none md:rounded-l-lg' src={food_image} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{food_name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{short_description}</p>
                    <h5 className="block text-sm antialiased font-semibold leading-snug tracking-normal text-red-500">
                        {food_category}
                    </h5>
                    <h2 className='text-lg text-white'>Price: {price}$</h2>
                    <h5 className="block mb-2 text-base antialiased font-semibold leading-snug tracking-normal text-blue-500">
                        quantity: {quantity}
                    </h5>
                    <h5 className="block mb-2 text-base antialiased font-semibold leading-snug tracking-normal text-red-400">
                        Made By: {made_by}
                    </h5>
                    <h5 className="block mb-2 text-base antialiased font-semibold leading-snug tracking-normal text-blue-500">
                        {food_origin}
                    </h5>
                    <Link to={`/foodpurchase/${_id}`}><button  className='btn btn-outline btn-success px-20'>Order</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Foods;