import { IS_ADMIN } from "../ActionTypes/ActionTypes"

const initialState = {
    isAdmin: []
} 

export const isAdminReducers = (state = initialState, action) => {
    switch(action.type){
        case IS_ADMIN:
            return{
                ...state,
                isAdmin: action.payload
            }
        default:
            return state
    }
}