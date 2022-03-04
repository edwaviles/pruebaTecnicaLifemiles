import { AuthState } from './AuthContext';

type AuthAction = 
| {type:'signIn'}
| {type:'logout'}
| {type:'changeUser', paylod:string}
| {type:'changeFavIcon', paylod:string}

export const authReducer = (state:AuthState, action:AuthAction):AuthState =>{
    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn:true,
            }
            break;
        case 'logout':
            return {
                isLoggedIn:false,
                username:undefined,
                favoriteIcon:undefined
            }
            break;
        case 'changeUser':
            return {
                ...state,
                username:action.paylod,
            }
            break;
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon:action.paylod
            }
            break;
    
        default:
            return state;
            break;
    }
}