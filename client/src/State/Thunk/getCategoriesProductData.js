import { getCategoriesProduct } from "../ActionCreator/ActionCreator"


export const getCategoriesProductData = (name) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/api/products/${name}`)
        const data = await res.json()
        
            dispatch(getCategoriesProduct(data))
        
    }
}