import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout/MainLayout";
import Page404 from "../pages/Page404/Page404";
import Login from "../pages/Auth/login";
import Register from "../pages/Auth/Register";
import Blog from "../pages/Blog/Blog";
import PrivateRoute from "./PrivateRoute";
import AddToy from "../pages/AddToy/AddToy";
import AllToy from "../pages/AllToy/AllToy";
import Details from "../pages/Details/Details";
import { async } from "@firebase/util";
import UpdateToy from "../pages/UpdateToy/UpdateToy";
import MyToys from "../pages/MyToys/MyToys";

const routes = createBrowserRouter([
  {
    path: `/`,
    element: <MainLayout />,
    children: [
      {
        path: `/`,
        element: <Home />,
      },
      {
        path: `/login`,
        element: <Login />,
      },
      {
        path: `/register`,
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: `add-toy`,
        element: (
          <PrivateRoute>
            <AddToy />
          </PrivateRoute>
        ),
      },
      {
        path: `/all-toy`,
        element: <AllToy />,
        loader: async () => await fetch(`${import.meta.env.VITE_ULR}/toys`),
      },
      {
        path: `/details/:id`,
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await fetch(`${import.meta.env.VITE_ULR}/toy/${params.id}`),
      },
      {
        path: `/mytoys`,
        element: (
          <PrivateRoute>
            <MyToys />
          </PrivateRoute>
        ),
      },
      {
        path: `/update/:id`,
        element: (
          <PrivateRoute>
            <UpdateToy />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await fetch(`${import.meta.env.VITE_ULR}/toy/${params.id}`),
      },
    ],
  },

  {
    path: `*`,
    element: <Page404 />,
  },
]);

export default routes;
