import { CLOSE_SIDEBAR, OPEN_SIDEBAR } from "../ActionTypes/ActionTypes"

const initialState ={
    isOpen: false
}

export const sidebarReducer = (state = initialState, action) => {
    switch(action.type){
        
        case OPEN_SIDEBAR:
            return{
                ...state,
                isOpen: true
            }
        case CLOSE_SIDEBAR:
            return{
                ...state,
                isOpen: false
            }

        default:
            return state;
    }
}

