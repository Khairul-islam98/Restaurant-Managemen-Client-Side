import React, { useContext } from 'react';
import banner from '../../assets/images/add-food.png';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';

const AddFoods = () => {
    const { user } = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const food_name = form.food_name.value
        const food_image = form.food_image.value
        const name = user?.displayName
        const email = user?.email
        const food_category = form.food_category.value
        const price = form.price.value
        const quantity = form.quantity.value
        const food_origin = form.food_origin.value
        const short_description = form.short_description.value

        const food = {
            name,
            email,
            food_name,
            food_image,
            food_category,
            price, quantity,
            food_origin,
            short_description
        }
        console.log(food);
        axios.post('https://restaurant-management-server-sigma.vercel.app/products', food)
            .then(res => {
                console.log(res.data);
                if(res.data.acknowledged){
                    toast.success('added successfully')
                }
            })
    }
    return (
        <div>
            <div className="hero min-h-[400px] opacity-95 mb-5 " style={{ backgroundImage: `url(${banner})` }}></div>
            <div className='flex justify-center mb-10 mt-10 '>
                <div className="w-full max-w-2xl p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <h5 className="text-xl font-medium text-center text-gray-900 dark:text-white">Add a Food</h5>
                        <div>
                            <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Name</label>
                            <input type="text" name="food_name" id="food_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Food Name" />
                        </div>
                        <div>
                            <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Image</label>
                            <input type="text" name="food_image" id="image" placeholder="Food Image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        </div>
                        <div>
                            <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Category</label>
                            <input type="text" name="food_category" id="category" placeholder="Food Category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        </div>
                        <div>
                            <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                            <input type="number" name="quantity" id="quantity" placeholder="Quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        </div>
                        <div>
                            <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                            <input type="number" name="price" id="price" placeholder="Price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        </div>
                        <div>
                            <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Added By</label>
                            <input type="text" name="name" id="name" defaultValue={user?.displayName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Added By" />
                        </div>
                        <div>
                            <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" name="emaiil" id="email" defaultValue={user?.email} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Email" />
                        </div>
                        <div>
                            <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Food Origin</label>
                            <input type="text" name="food_origin" id="food_origin" placeholder="Country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        </div>
                        <div>
                            <label for="rating" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short description</label>
                            <input type="text" name="short_description" id="description" placeholder="Short description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" />
                        </div>

                        <button type="submit" className="w-full btn btn-outline btn-success">Add A Food</button>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default AddFoods;