import { createContext, useReducer } from 'react'
import { useEffect } from 'react'

// Create instance of context
const AuthContext =  createContext()
// Depending on state and action input return desired response
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload }
    case 'LOGOUT':
        return { user: null }
    default:
      return state
  }
}
// Provides constext to the application, provided in sesssionStorage and console
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  })
// Fires only on mount
  useEffect (() => {
    const user = JSON.parse(sessionStorage.getItem('user'))
    // If user is logged in
    if (user) {
      dispatch({type:'LOGIN', payload: user})
    }
  }, [])
// keep track of state in console
  console.log('AuthContext state: ', state)

  return (
    <AuthContext.Provider value ={{...state, dispatch}}>
      { children }
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthContextProvider, authReducer}