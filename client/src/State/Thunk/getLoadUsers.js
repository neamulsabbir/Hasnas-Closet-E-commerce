import { loadUsers } from "../ActionCreator/ActionCreator"

export const getLoadUsers = () => {
    return async (dispatch) => {
        const res = await fetch("http://localhost:5000/users")
        const data = await res.json()

        dispatch(loadUsers(data))
    }
}