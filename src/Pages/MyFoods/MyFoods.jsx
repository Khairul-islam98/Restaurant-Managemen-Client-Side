import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const MyFoods = () => {
    const { user } = useContext(AuthContext)
    const [foodItems, setFoodItems] = useState([]);
    console.log(foodItems);
    const [selectedFoodItem, setSelectedFoodItem] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        axios.get(`restaurant-management-server-snowy.vercel.app/products?email=${user.email}`)
            .then((response) => {
                setFoodItems(response.data);
            })
            .catch((error) => {
                console.error('Error fetching food items:', error);
            });
    }, [user.email]);
    const openModal = (foodItem) => {
        setSelectedFoodItem(foodItem);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const food_name = form.food_name.value
        const food_image = form.food_image.value
        const price = form.price.value
        const quantity = form.quantity.value

        const foodUpdate = {
            food_name,
            food_image,
            price,
            quantity,

        }
        axios.put(`restaurant-management-server-snowy.vercel.app/products/${selectedFoodItem._id}`, foodUpdate)
            .then((res) => {
                if (res.data.modifiedCount > 0) {
                    toast.success('Food updated successfully');
                    setFoodItems((prevFoodItems) => {
                        return prevFoodItems.map((item) => {
                            if (item._id === selectedFoodItem._id) {
                                return { ...item, ...foodUpdate };
                            } else {
                                return item;
                            }
                        });
                    });
                    closeModal();
                }
            });
    }
    return (
        <div className="container mx-auto mb-28">
            <h2 className="text-2xl font-semibold mb-4 text-center py-6">My Food items</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full table text-center border rounded-lg">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2">Food Image</th>
                            <th className="px-4 py-2">Food Name</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Quantity</th>
                            <th className="px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {foodItems.map((foodItem) => (
                            <tr key={foodItem._id} className="bg-white">
                                <td className="px-4 py-2 text-center">
                                    <img src={foodItem.food_image} alt={foodItem.food_image} className="w-16 h-16 mx-auto" />
                                </td>
                                <td className="px-4 py-2 text-center">{foodItem.food_name}</td>
                                <td className="px-4 py-2 text-center">${foodItem.price}</td>
                                <td className="px-4 py-2 text-center">{foodItem.quantity}</td>
                                <td className="px-4 py-5 flex justify-center">
                                    <button className="btn btn-outline btn-success" onClick={() => openModal(foodItem)}>update</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {isModalOpen && selectedFoodItem && (
                    <dialog id="my_modal_1" className="modal" open>
                        <div className="modal-box">
                            <form onSubmit={handleUpdate}>
                                <div>
                                    <label for="text" className="block mb-2 text-sm font-medium text-black">Food Name</label>
                                    <input type="text" name="food_name" defaultValue={selectedFoodItem.food_name} id="food_name" className="input input-bordered input-success w-full" placeholder="Food Name" />
                                </div>
                                <div>
                                    <label for="text" className="block mb-2 mt-3 text-sm font-medium text-black">Food Image</label>
                                    <input type="text" name="food_image" defaultValue={selectedFoodItem.food_image} id="image" placeholder="Food Image" className="input input-bordered input-success w-full" />
                                </div>
                                <div>
                                    <label for="text" className="block mb-2 mt-3 text-sm font-medium text-black">Price</label>
                                    <input type="number" name="price" defaultValue={selectedFoodItem.price} id="image" placeholder="Price" className="input input-bordered input-success w-full" />
                                </div>
                                <div>
                                    <label for="text" className="block mb-2 mt-3 text-sm font-medium text-black">Quantity</label>
                                    <input type="number" name="quantity" defaultValue={selectedFoodItem.quantity} id="image" placeholder="Quantity" className="input input-bordered input-success w-full" />
                                </div>
                                <button type='submit' className='btn btn-outline btn-success mt-2 px-14 flex mx-auto'>Updated</button>
                            </form>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn" onClick={closeModal}>Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                )}
            </div>
        </div>
    );
};

export default MyFoods;