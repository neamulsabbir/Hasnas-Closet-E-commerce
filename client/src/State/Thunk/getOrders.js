import { loadOrders } from "../ActionCreator/ActionCreator"

export const getOrders = () => {
    return async (dispatch) => {
        const res = await fetch("http://localhost:5000/dashboard/orders")
        const data = await res.json()

        dispatch(loadOrders(data))
    }
}