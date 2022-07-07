import React,{useContext} from "react";
import AuthenticatedHeader from "../body/AuthenticatedHeader";
import NonAuthenticatedHeader from "../body/NonAuthenticatedHeader";

import {AppContext} from "../../Context";
import AdminRegularBody from "../admin-components/body/AdminRegularBody";



function AuthOrNotHeader(props) {
    const contextApp = useContext(AppContext);
    if (localStorage.getItem("role") == "admin") {
        return <AdminRegularBody/>
    }

    if (contextApp.state.isAuth) {
        return <AuthenticatedHeader/>
    } else {
        return <NonAuthenticatedHeader/>
    }
}
export default AuthOrNotHeader;
