import React,{useContext} from "react";
import AuthenticatedHeader from "../body/AuthenticatedHeader";
import NonAuthenticatedHeader from "../body/NonAuthenticatedHeader";

import {AppContext} from "../../Context";



function AuthOrNotHeader(props) {
    const contextApp = useContext(AppContext);

    if (contextApp.state.isAuth) {
        return <AuthenticatedHeader/>
    } else {
        return <NonAuthenticatedHeader/>
    }
}
export default AuthOrNotHeader;
