import { CLOSE_DASHBOARD_SIDEBAR, OPEN_DASHBOARD_SIDEBAR } from "../ActionTypes/ActionTypes"

const initialState = {
    isOpen : false
}

export const dashboardSidebarReducer = (state = initialState,action) => {
    switch (action.type){
        case OPEN_DASHBOARD_SIDEBAR:
            return{
                ...state,
                isOpen: true
            }
        case CLOSE_DASHBOARD_SIDEBAR:
            return{
                ...state,
                isOpen: false
            }

        default:
            return state;
    }
}