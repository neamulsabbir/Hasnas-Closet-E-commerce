import { LOAD_USERS } from "../ActionTypes/ActionTypes"

const initialState = {
    users: []
}

export const loadUsersReducers = (state = initialState, action) => {
    switch (action.type){
        case LOAD_USERS:
            return{
                ...state,
                users: action.payload
            }

        default:
            return state
    }
}