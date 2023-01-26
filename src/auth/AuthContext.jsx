import { createContext, useReducer } from 'react'

// 
const AuthContext =  createContext()
// 
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
// 
const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null
  })
// keep track of state in console
  console.log('AuthContext state: ', state)

  return (
    <AuthContext.Provider value ={{...state, dispatch}}>
      { children }
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthContextProvider, authReducer}