import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import MainLayout from '../layout/MainLayout/MainLayout';
import Page404 from '../pages/Page404/Page404';

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
    },
    {
        path: `*`,
        element: <Page404 />
    }
])

export default routes;