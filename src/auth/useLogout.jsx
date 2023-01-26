import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {
        sessionStorage.removeItem('user')
        dispatch({type: 'LOGOUT'})
    }
    return { logout }
}