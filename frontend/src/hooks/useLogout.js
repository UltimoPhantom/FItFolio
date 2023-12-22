import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {
        //remove local storage
        localStorage.removeItem('user')

        //set dispatch action for global state
        dispatch({type: 'LOGOUT'})
    }

    return {logout}
}