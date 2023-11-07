import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../MainLayout/Root';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Error from '../components/Error/Error';
import AllFoods from '../Pages/AllFoods/AllFoods';
import SingleFood from '../Pages/SingleFood/SingleFood';
import AddFoods from '../Pages/AddFoods/AddFoods';
import MyFoods from '../Pages/MyFoods/MyFoods';
import FoodUpdate from '../Pages/FoodUpdate/FoodUpdate';
import FoodPurchase from '../Pages/FoodPurchase/FoodPurchase';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/allfoods',
                element: <AllFoods />,
            },
            {
                path: '/singlefood/:id',
                element: <SingleFood />,
                loader: ({params}) => fetch(`http://localhost:5001/products/${params.id}`) 
            },
            {
                path: '/addfood',
                element: <AddFoods />,
            },
            {
                path: '/myfood',
                element: <MyFoods />,
            },
            {
                path: '/foodupdate/:id',
                element: <FoodUpdate />,
                loader: ({params}) => fetch(`http://localhost:5001/products/${params.id}`)
            },
            {
                path: '/foodpurchase/:id',
                element: <FoodPurchase />,
                loader: ({params}) => fetch(`http://localhost:5001/products/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            }
        ]
    }
])

export default Router;