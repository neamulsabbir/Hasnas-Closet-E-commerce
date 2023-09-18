import { GET_DASHBOARD_CATEGORY } from "../ActionTypes/ActionTypes"

const initialState = {
    category: []
}

export const dashboardCategoryReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_DASHBOARD_CATEGORY:
            return{
                ...state,
                category: action.payload
            }

        default:
            return state
    }
}