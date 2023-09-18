import {
  ADD_TO_CART,
  ADD_WISH_LIST,
  CLEAR_FILTER_ITEM,
  CLEAR_FROM_CART,
  CLOSE_DASHBOARD_SIDEBAR,
  CLOSE_SIDEBAR,
  DASHBOARD_PRODUCT,
  DASHBOARD_SIDEBAR,
  DELETE_PRODUCT_FROM_CART,
  GET_CATEGORIES_PRODUCT,
  GET_COLOR_CATEGORY,
  GET_DASHBOARD_CATEGORY,
  GET_PRODUCT_DETAIL,
  IS_ADMIN,
  LOAD_BANNER,
  LOAD_PRODUCT,
  LOAD_USERS,
  OPEN_DASHBOARD_SIDEBAR,
  OPEN_SIDEBAR,
  ORDERS,
  REMOVE_FROM_CART,
  REMOVE_FROM_WISHLIST,
  SEND_PRODUCT_COLOR,
  USER_ORDERS,
} from "../ActionTypes/ActionTypes";

export const loadBanner = data => {
  return {
    type: LOAD_BANNER,
    payload: data
  }
}
export const loadProduct = data => {
  return{
    type: LOAD_PRODUCT,
    payload: data
  }
}





export const getProductDetails = (data) => {
  return {
    type: GET_PRODUCT_DETAIL,
    payload: data,
  };
};

export const getCategoriesProduct = (data) => {
  return {
    type: GET_CATEGORIES_PRODUCT,
    payload: data,
  };
};
export const getColorCategoryData = (data) => {
  return {
    type: GET_COLOR_CATEGORY,
    payload: data,
  };
};

export const sendProductColor = data => {
  return{
    type: SEND_PRODUCT_COLOR,
    payload: data
  }
}

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    payload: data,
  };
};
export const removeFromCart = (data) => {
  return {
    type: REMOVE_FROM_CART,
    payload: data,
  };
};
export const clearFromCart = (data) => {
  return {
    type: CLEAR_FROM_CART,
    payload: data,
  };
};

export const deleteFromCart = (data) => {
  return {
    type: DELETE_PRODUCT_FROM_CART,
    payload: data,
  };
};

export const addToWishList = (data) => {
  return {
    type: ADD_WISH_LIST,
    payload: data,
  };
};
export const removeToWishList = (data) => {
  return {
    type: REMOVE_FROM_WISHLIST,
    payload: data,
  };
};

export const openSidebar = () => {
  return {
    type: OPEN_SIDEBAR,
  };
};
export const closeSidebar = () => {
  return {
    type: CLOSE_SIDEBAR,
  };
};

export const getDashboardProductData = data => {
  return{
    type: DASHBOARD_PRODUCT,
    payload: data
  }
}

export const clearFilterItem = data => {
  return{
    type: CLEAR_FILTER_ITEM,
    payload: data
  }
}

export const getDashboardCategoryData = (data) => {
  return{
    type: GET_DASHBOARD_CATEGORY,
    payload: data
  }
}

export const loadUsers = data => {
  return{
    type: LOAD_USERS,
    payload: data
  }
}

export const loadIsAdmin = data => {
  return{
    type: IS_ADMIN,
    payload: data
  }
}
export const loadUserOrders = data => {
  return{
    type: USER_ORDERS,
    payload: data
  }
}
export const loadOrders = data => {
  return{
    type: ORDERS,
    payload: data
  }
}
export const openDashboardSidebar = data => {
  return{
    type: OPEN_DASHBOARD_SIDEBAR,
    payload: data
  }
}
export const closeDashboardSidebar = data => {
  return{
    type: CLOSE_DASHBOARD_SIDEBAR,
    payload: data
  }
}
