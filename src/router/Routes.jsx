import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Profile from "../pages/Profile";
import PrivateRoute from "./PrivateRoute";
import ServiceDetails from "../pages/ServiceDetails";
import ForgetPass from "../pages/ForgetPass";
import SuccessStories from "../pages/SuccessStories";
import PetAndSupplies from "../pages/PetAndSupplies";
import AddProducts from "../pages/AddProducts";
import FilterPage from "../component/FilterPage";
import MyProducts from "../pages/MyProducts";
import UpdateProducts from "../pages/UpdateProducts";
import MyOrders from "../pages/MyOrders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/petAndSupplies",
        element: <PetAndSupplies/>,
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/addProducts",
        element: <PrivateRoute><AddProducts/></PrivateRoute>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/profile",
        element: <PrivateRoute><Profile/></PrivateRoute>
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><ServiceDetails/></PrivateRoute>
      },
      {
        path: "/filter/:category",
        element: <FilterPage/>
      },
      {
        path: "/forget/:email",
        element: <ForgetPass/>
      },
      {
        path: "/my-products",
        element: <PrivateRoute><MyProducts/></PrivateRoute>
      },
      {
        path: "/update-products/:id",
        element: <PrivateRoute><UpdateProducts/></PrivateRoute>
      },
      {
        path: "/my-orders",
        element: <PrivateRoute><MyOrders/></PrivateRoute>
      },
      {
        path: "/stories",
        element: <SuccessStories/>
      },
    ],
  },
]);

export default router;
