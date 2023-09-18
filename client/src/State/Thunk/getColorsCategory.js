import { getColorCategoryData } from "../ActionCreator/ActionCreator"

export const getColorsCategory = () => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/colors")
        const data = await res.json()

        if(data.length){
            dispatch(getColorCategoryData(data))
        }
    }
}