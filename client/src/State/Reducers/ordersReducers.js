import { ORDERS } from "../ActionTypes/ActionTypes"

const initialSatet = {
    orders: []
}

export const ordersReducers = (state = initialSatet, action) => {
    switch (action.type) {
        case ORDERS :
            return{
                ...state,
                orders: action.payload
            }
        default:
            return state
    }
}