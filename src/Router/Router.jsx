import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../MainLayout/Root';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import Error from '../components/Error/Error';
import AllFoods from '../Pages/AllFoods/AllFoods';

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
                // loader: () => fetch('http://localhost:5001/products') 
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