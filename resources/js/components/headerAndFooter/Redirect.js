import React, {useEffect} from "react";
import Header from "./Header";

function Redirect(props) {
    useEffect(async ()=> {
        await fetch(`http://localhost:8000/api/auth/google/callback${props.location.search}`).then(data=> {
            if (data.ok) {
                return data.json();
            }
            throw new Error ("something went wrong");
        }).then(res=>{
            alert(res.access_token);
            // localStorage.setItem("token",res.access_token);
            sessionStorage.setItem("token",res.access_token);
        }).catch(e=>console.log("This is catch "+e));
    });

    return (
        <Header/>
    );
}
export default Redirect;
