import { USER_ORDERS } from "../ActionTypes/ActionTypes"

const initialState = {
    UserOrders : []
}

export const userOrdersReducers = (state = initialState, action) => {
    switch (action.type){
        case USER_ORDERS:
            return {
                ...state,
                UserOrders : action.payload
            }
        default:
            return state
    }
}