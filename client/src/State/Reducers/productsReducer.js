import { LOAD_PRODUCT } from "../ActionTypes/ActionTypes"

const initialState = {
    products: []
}

export const productsReducer = (state=initialState, action) => {
    switch (action.type){
        case LOAD_PRODUCT:
            return{
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}