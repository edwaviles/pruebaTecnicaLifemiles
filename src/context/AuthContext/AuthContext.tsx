import React, { createContext, useReducer } from 'react'
import { authReducer } from './AuthReducer';

//Definiendo la informacion:
export interface AuthState{
    isLoggedIn:boolean,
    username?:string,
    favoriteIcon?:string
}

// Estado inicial al lanzar la app
export const authInitialState:AuthState={
    isLoggedIn:false,
    username:undefined,
    favoriteIcon:undefined
}

//interfaz de salida
export interface AuthContextProps{
    authState:AuthState,
    signIn: ()=>void,
    logout: ()=>void,
    changeFavoriteIcon:(iconName:string)=>void,
    changeUser:(name:string)=>void
}

//contexto
export const AuthContext = createContext({} as AuthContextProps);

//componente proveedor
export const AuthProvider =({children}:any)=>{

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signIn = () =>{
        dispatch({type:'signIn'})
    }

    const logout = () =>{
        dispatch({type:'logout'})
    }

    const changeFavoriteIcon = (iconName:string) =>{
        dispatch({type:'changeFavIcon', paylod:iconName})
    }

    const changeUser = (name:string) =>{
        dispatch({type:'changeUser', paylod:name})
    }

    return  (
        <AuthContext.Provider value={{
            authState:authState,
            signIn:signIn,
            changeFavoriteIcon:changeFavoriteIcon,
            logout:logout,
            changeUser:changeUser
        }}>
            {children}
        </AuthContext.Provider>
    )
}