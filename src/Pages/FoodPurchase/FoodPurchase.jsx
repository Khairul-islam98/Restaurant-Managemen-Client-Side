import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const FoodPurchase = () => {
    const data = useLoaderData()
    const food = data[0]
    const { _id, food_name, food_image, price, email } = food
    const { user } = useContext(AuthContext)
    const [quantity, setQuantity] = useState(food.quantity);
    const [showLowQuantityMessage, setShowLowQuantityMessage] = useState(false);

    const handleQuantityChange = (event) => {
        const newQuantity = parseInt(event.target.value);
        setQuantity(newQuantity);
    };

    const handlePurchase = () => {
        if (parseInt(quantity) === 0) {
            toast.error("This Food is not available for purchase.");
            return;
        } else if (user.email === food.email) {
            toast.error("You can't purchase your own added food items.");
        } else if (parseInt(quantity) > 20) {
            toast.error("You can't buy more than 20.");
        } else {
            const updatedQuantity = parseInt(quantity) - 1;
            setQuantity(updatedQuantity);
            if (updatedQuantity === 1) {
                setShowLowQuantityMessage(true);
            }
            const purchaseData = {
                food_name: food.food_name,
                food_image: food.food_image,
                price: food.price,
                quantity: updatedQuantity,
                food_category: food.food_category,
                orderCount: food.orderCount,
                buyerName: user?.displayName,
                buyerEmail: user?.email,
                orderTime: new Date().toLocaleString(),
            };

            axios.patch(`http://localhost:5001/products/${food._id}`, { quantity: updatedQuantity })
                .then((res) => {
                    console.log(res.data);
                    if (res.data.modifiedCount > 0) {
                        setQuantity(updatedQuantity);
                    }
                });

            axios.post('http://localhost:5001/orders', purchaseData, {withCredentials:true})
                .then(data => {
                    console.log(data.data);
                    if(data.data.acknowledged){
                        toast.success('Purchase successful')
                    }
                })
                }
    }

        return (
            <div className="p-4 lg:w-1/2 mx-auto">
                <h2 className="text-2xl mb-4">Food Purchase Form</h2>
                <form className="mb-4">
                    <div className="mb-4">
                        <label className="block mb-1">Food Name:</label>
                        <input
                            type="text"
                            className="border rounded w-full p-2"
                            value={food_name}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Price:</label>
                        <input
                            type="number"
                            className="border rounded w-full p-2"
                            value={price}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Quantity:</label>
                        <input
                            type="number"
                            className="border rounded w-full p-2"
                            value={quantity}
                            onChange={handleQuantityChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Buyer Name:</label>
                        <input
                            type="text"
                            className="border rounded w-full p-2"
                            value={user?.displayName}
                            readOnly
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Buyer Email:</label>
                        <input
                            type="email"
                            className="border rounded w-full p-2"
                            value={user?.email}
                            readOnly
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">Buying Date:</label>
                        <input
                            type="date"
                            className="border rounded w-full p-2"
                            name='orderTime'
                        />
                    </div>
                    <button
                        type="button"
                        onClick={handlePurchase}
                        className="bg-blue-500 text-white p-2 rounded"
                    >
                        Purchase
                    </button>
                </form>
            </div>
        );
    };

    export default FoodPurchase;
