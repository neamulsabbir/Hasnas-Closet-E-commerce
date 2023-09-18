import { loadBanner } from "../ActionCreator/ActionCreator"

export const getBannerData = () => {
    return async (dispatch) =>{
        const res = await fetch('http://localhost:5000/api/banner')
        const data = await res.json()

        dispatch(loadBanner(data))
    }
}