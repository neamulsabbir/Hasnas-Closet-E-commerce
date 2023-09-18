import { combineReducers } from "redux";
import { categoriesProductReducer } from "../Reducers/categoriesProductReducer";
import { productDetailsReducer } from "../Reducers/productDetailReducer";
import { productCartReducer } from "../Reducers/productCartReducer";
import { sidebarReducer } from "../Reducers/sidebarReducer";
import { colorsProductReducer } from "../Reducers/colorsProductReducer";
import { dashboardProductReducer } from "../Reducers/dashboardProductReducer";
import { dashboardCategoryReducer } from "../Reducers/dashboardCategoryReducer";
import { loadUsersReducers } from "../Reducers/loadUsersReducers";
import { isAdminReducers } from "../Reducers/isAdminReducers";
import { userOrdersReducers } from "../Reducers/userOrdersReducers";
import { ordersReducers } from "../Reducers/ordersReducers";
import { bannerReducer } from "../Reducers/bannerReducer";
import { productsReducer } from "../Reducers/productsReducer";
import { dashboardSidebarReducer } from "../Reducers/dashboardSidebarReducer";

export const rootReducers = combineReducers({
    banner: bannerReducer,
    products: productsReducer,
    categoriesProduct: categoriesProductReducer,
    productDetails: productDetailsReducer,
    colors : colorsProductReducer,
    cart: productCartReducer,
    sidebar: sidebarReducer,
    dashboardProduct : dashboardProductReducer,
    dashboardCategory : dashboardCategoryReducer,
    users : loadUsersReducers,
    isAdmin : isAdminReducers,
    UserOrders : userOrdersReducers,
    orders : ordersReducers,
    dashboardSidebar : dashboardSidebarReducer,
});