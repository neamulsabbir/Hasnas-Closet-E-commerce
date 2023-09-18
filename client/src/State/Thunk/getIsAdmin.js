import { loadIsAdmin } from "../ActionCreator/ActionCreator"

export const getIsAdmin = email => {
    return async (dispatch) => {
        const res = fetch(`http://localhost:5000/users/admin/${email}`)
        const data = res.json()
// console.log(data);
        dispatch(loadIsAdmin(data))
    }
}