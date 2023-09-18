import { LOAD_BANNER } from "../ActionTypes/ActionTypes"

const initialState = {
    banner:[]
}

export const bannerReducer = (state = initialState, action) => {
    switch (action.type){
        case LOAD_BANNER:
            return{
                ...state,
                banner: action.payload
            }
        default:
            return state
    }
}