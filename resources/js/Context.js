import {createContext,useReducer} from "react";

export const AppContext = createContext();

const getJwtMiddleInfo = (jwtToken)=> {
    return atob(jwtToken.split(".")[1]);
}

const isJwtExpired = (jwt)=> {
    const payload = getJwtMiddleInfo(jwt);

    const now = new Date();
    const fiveMin = 1000 * 60 * 5;
    const expiration = new Date(payload.exp);

    if (expiration.getTime() - now.getTime() < fiveMin) {
        return true; // expired
    } else {
        return false; // not expired
    }

    return false; // not expired
}
if (localStorage.getItem("token")) {

    if (isJwtExpired(localStorage.getItem("token"))) {
        localStorage.removeItem("token");
    }
}


const initialState = {darkMode:true,isAuth:false,isOpenModel:false};

/**
 *
 * @param {*} state - global state of the application
 * @param {*} action - action for determining state change
 * @returns
 */
const globalReducer = (state, action)=> {
    switch(action.type) {
        case 'toggle':
            return {darkMode : !state.darkMode};
        case 'grantAuth':
            return {isAuth:true};
        case 'logout':
            return {isAuth:false}
        case 'modal':
            return {isOpenModel : !state.isOpenModel};
        default:
            return state;
    }
}

export const ContextProvider = (props)=> {
    const [state, dispatch] = useReducer(globalReducer,initialState);

    return (
        <AppContext.Provider value={{state,dispatch}}>
            {props.children}
        </AppContext.Provider>
    );
}
