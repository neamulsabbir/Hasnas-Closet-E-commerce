import { GET_PRODUCT_DETAIL } from "../ActionTypes/ActionTypes"

const initialState = {
    product : []
}

export const productDetailsReducer = (state = initialState, action) => {

    // console.log(action.payload);

switch(action.type){

    case GET_PRODUCT_DETAIL:
        return{
            ...state,
            product: action.payload,
        }

    default:
        return state
}

};