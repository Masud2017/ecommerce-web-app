import {createContext,useReducer} from "react";

export const AppContext = createContext();


export const setStorageEvent = (element,callabck)=> {
    const event = new Event("sessionEvent");
    element.addEventListener("sessionEvent",callback);
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
