import { loadUserOrders } from "../ActionCreator/ActionCreator"

export const getUserOrders = email => {
    return async (dispatch) => {
        const res  = await fetch(`http://localhost:5000/orders?email=${email}`)
        const data = await res.json()

        dispatch(loadUserOrders(data))
    }
}