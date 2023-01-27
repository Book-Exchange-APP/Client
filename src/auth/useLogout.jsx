import { useAuthContext } from './useAuthContext'

export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {
        sessionStorage.removeItem('user')
        sessionStorage.removeItem('book')
        dispatch({type: 'LOGOUT'})
    }
    return { logout }
}