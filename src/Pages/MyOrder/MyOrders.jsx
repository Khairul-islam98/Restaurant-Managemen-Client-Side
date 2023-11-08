import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast';

const MyOrders = () => {
    const { user } = useContext(AuthContext)
    const [orderItems, setOrderItems] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:5001/orders?buyerEmail=${user.email}`, {withCredentials: true})
            .then((response) => {
                console.log(response.data);
                setOrderItems(response.data);
            })
            .catch((error) => {
                console.error('Error fetching order items:', error);
            });
    }, []);

    const handleDelete = (_id) => {
        axios.delete(`http://localhost:5001/orders/${_id}`)
            .then(data => {
                console.log(data.data);
                if (data.data.deletedCount > 0) {
                    toast.success('Deleted successful')
                    const remaining = orderItems.filter(order => order._id !== _id)

                    setOrderItems(remaining)
                }
            })
    }

    return (
        <div className="container mx-auto mb-28">
            <h2 className="text-2xl font-semibold mb-4 text-center py-6">My Order items</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full table text-center border rounded-lg">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2">Food Image</th>
                            <th className="px-4 py-2">Food Name</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">OrderTime</th>
                            <th className="px-4 py-2 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderItems.map((orderItem) => (
                            <tr key={orderItem._id} className="bg-white">
                                <td className="px-4 py-2 text-center">
                                    <img src={orderItem.food_image} alt={orderItem.food_image} className="w-16 h-16 mx-auto" />
                                </td>
                                <td className="px-4 py-2 text-center">{orderItem.food_name}</td>
                                <td className="px-4 py-2 text-center">${orderItem.price}</td>
                                <td className="px-4 py-2 text-center">{orderItem.orderTime}</td>
                                <td className="px-4 py-5 flex justify-center">
                                    <button onClick={() => handleDelete(orderItem._id)} className="btn btn-outline btn-success">delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;