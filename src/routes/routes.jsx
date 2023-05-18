import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import MainLayout from '../layout/MainLayout/MainLayout';
import Page404 from '../pages/Page404/Page404';
import Login from '../pages/Auth/login';
import Register from '../pages/Auth/Register';
import Blog from '../pages/Blog/Blog';

const routes = createBrowserRouter([
    {
        path: `/`,
        element: <MainLayout />,
        children: [
            {
                path: `/`,
                element: <Home />
            },
            {
                path: `/login`,
                element: <Login />
            },
            {
                path: `/register`,
                element: <Register />
            },
            {
                path: '/blog',
                element: <Blog />
            }
        
        ]
    },
    



    {
        path: `*`,
        element: <Page404 />
    },
])

export default routes;