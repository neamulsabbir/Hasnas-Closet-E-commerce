import { GET_COLOR_CATEGORY } from "../ActionTypes/ActionTypes"

const initialState = {
    colors:[]
}

export const colorsProductReducer = (state = initialState, action) => {
    switch(action.type){

        case GET_COLOR_CATEGORY:
            return{
                ...state,
                colors: action.payload
            }
            
        default:
            return state
    }

}