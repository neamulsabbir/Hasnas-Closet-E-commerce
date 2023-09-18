import { getProductDetails } from "../ActionCreator/ActionCreator"

export const getProductDetailsData = (slug) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/api/allProducts/${slug}`)
        const data = await res.json()
        // console.log(data);

        
            dispatch(getProductDetails(data))
        
    }
}