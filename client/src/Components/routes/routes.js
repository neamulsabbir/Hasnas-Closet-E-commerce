import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Cart from "../Pages/Main/Cart/Cart";
import Home from "../Pages/Main/Home/Home";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import SignUp from "../Pages/Main/SignUp/SignUp";
import SignIn from "../Pages/Main/SignIn/SignIn";
import Categories from "../Pages/Main/Home/ProuductsSection/Categories/Categories";
import ProductDetails from "../Pages/Main/Home/ProuductsSection/ProductDetails/ProductDetails";
import DashboardProducts from "../Pages/Dashboard/DashboardProducts/DashboardProducts";
import DashboardProductsColors from "../Pages/Dashboard/DashboardProductsColors/DashboardProductsColors";
import AddColor from "../Pages/Dashboard/DashboardProductsColors/AddColor/AddColor";
import AddProduct from "../Pages/Dashboard/DashboardProducts/AddProduct/AddProduct";
import EditProducts from "../Pages/Dashboard/DashboardProducts/EditProducts/EditProducts";
import CheckOut from "../Pages/Main/CheckOut/CheckOut";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import Users from "../Pages/Dashboard/Users/Users";
import DashboardInfo from "../Pages/Dashboard/DashboardInfo/DashboardInfo";
import PrivateAdmin from "../../PrivateAdmin/PrivateAdmin";
import Orders from "../Pages/Dashboard/Orders/Orders";
import MyOrders from "../Pages/Main/MyOrders/MyOrders";
import DashboardCategoryList from "../Pages/Dashboard/DashboardCategory/DashboardCategoryList/DashboardCategoryList";
import CreateNewCategory from "../Pages/Dashboard/DashboardCategory/CreateNewCategory/CreateNewCategory";
import EditCategories from "../Pages/Dashboard/DashboardCategory/EditCategories/EditCategories";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/category/:name",
        element: <Categories />,
      },
      {
        path: "/product/:slug",
        element: <ProductDetails />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-orders",
        element: <MyOrders />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <DashboardInfo />,
      },
      {
        path: "/dashboard/products",
        element: <DashboardProducts></DashboardProducts>,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/edit-product/:id",
        element: <EditProducts />,
      },
      {
        path: "/dashboard/product-color",
        element: <DashboardProductsColors />,
      },
      {
        path: "/dashboard/add-color",
        element: <AddColor />,
      },
      {
        path: "/dashboard/users",
        element: <Users />,
      },
      {
        path: "/dashboard/orders",
        element: <Orders />,
      },
      {
        path: "/dashboard/create-category",
        element: <CreateNewCategory />,
      },
      {
        path: "/dashboard/category-list",
        element: <DashboardCategoryList />,
      },
      {
        path: "/dashboard/edit-category/:banner",
        element: <EditCategories />,
      },
    ],
  },
]);
