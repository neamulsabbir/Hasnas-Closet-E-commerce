import { getDashboardCategoryData } from "../ActionCreator/ActionCreator"

export const getDashboardCategory = () => {
    return async (dispatch) => {
        const res = await fetch('http://localhost:5000/dashboard/category')
        const data = await res.json()

        if(data.length){
            dispatch(getDashboardCategoryData(data))
        }

    }
}