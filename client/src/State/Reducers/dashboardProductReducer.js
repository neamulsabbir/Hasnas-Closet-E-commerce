import { DASHBOARD_PRODUCT } from "../ActionTypes/ActionTypes"

const initialState = {
    product: []
}

export const dashboardProductReducer = (state = initialState, action) => {
    switch (action.type){
        case DASHBOARD_PRODUCT:
            return{
                ...state,
                product: action.payload
            }
        default:
            return state
    }
}