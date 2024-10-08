import React, { createContext, useEffect, useReducer } from 'react';

// Initial state
const initial_state = {
  user: localStorage.getItem('user') !==undefined? JSON.parse(localStorage.getItem('user')) : null,
  loading: false,
  error: null,
};

// Create context
export const AuthContext = createContext(initial_state);

// Reducer function
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        loading: true,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case 'LOGIN_FAILURE':
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case 'REGISTER_SUCCESS':
      return {
        user: null,
        loading: false,
        error: null,
      };
    case 'LOGOUT':
      return {
        user: null,
        loading: false,
        error: null,
      };
      case 'FORGOT_PASSWORD_SUCCESS':
       
            return {
                ...state,
                Loading:false,
                message: action.payload,
                error: null,
            };
        case 'FORGOT_PASSWORD_FAILURE':
        
            return {
                ...state,
                Loading: false,
                error: action.payload,
                message: null,
            };
            case 'RESET_PASSWORD_START':
              return{
              ...state,
              loading:true,
              
            };
            case 'RESET_PASSWORD_SUCCESS':
              return{
              ...state,
              loading:false,
              isAuthenticated:true,
              user:action.payload.user

            };
            case 'RESET_PASSWORD_FAILURE':
              return{
                ...state,
                loading:false,
                 error:action.payload
              };
    default:
      return state;
  }
};

// Context provider component
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initial_state);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
