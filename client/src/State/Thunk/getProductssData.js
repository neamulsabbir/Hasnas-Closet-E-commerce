import { loadProduct } from "../ActionCreator/ActionCreator"

export const getProductssData = () => {
    return async (dispatch) => {
        const res = await fetch('http://localhost:5000/api/products')
        const data = await res.json()

        dispatch(loadProduct(data))
    }
}