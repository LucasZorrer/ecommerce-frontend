import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Profile from "../pages/Profile/Profile";
import MyProducts from "../pages/MyProducts/MyProducts";
import CreateProduct from "../pages/CreateProduct/CreateProduct";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/myproducts",
    element: <MyProducts />,
  },
  {
    path: "/createProduct",
    element: <CreateProduct />,
  },
]);

export default Routes;
