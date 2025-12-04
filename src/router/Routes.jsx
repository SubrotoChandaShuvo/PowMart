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
        path: "/login",
        element: <Login/>
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
        path: "/forget/:email",
        element: <ForgetPass/>
      },
      {
        path: "/stories",
        element: <SuccessStories/>
      }
    ],
  },
]);

export default router;
