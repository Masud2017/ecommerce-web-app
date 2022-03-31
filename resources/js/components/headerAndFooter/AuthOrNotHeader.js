import React from "react";
import AuthenticatedHeader from "../body/AuthenticatedHeader";
import NonAuthenticatedHeader from "../body/NonAuthenticatedHeader";

function AuthOrNotHeader(props) {
    if (props.token) {
        return <AuthenticatedHeader/>
    } else {
        return <NonAuthenticatedHeader/>
    }
}
export default AuthOrNotHeader;
