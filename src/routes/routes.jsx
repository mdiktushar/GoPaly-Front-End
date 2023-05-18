import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import MainLayout from '../layout/MainLayout/MainLayout';

const routes = createBrowserRouter([
    {
        path: `/`,
        element: <MainLayout />,
        children: [
            {
                path: `/`,
                element: <Home />
            }
        ]
    }
])

export default routes;