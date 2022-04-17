import { Hidden } from "@mui/material";

var active = false;

export function chatBoxOpen (event) {
    if (active == false) {
        Object.assign( document.getElementById("chatBody").style,
        {
            "display": "block",
            "overflow-y": "auto",
            "overflow-x": "hidden",
            "height" : "100%",
            "background-color ":"red"
        });


        Object.assign(document.getElementById("msgElement").style,{
            "min-width": "350px",
            "height": "450px",
            "right" : "1px",
            "margin-right" : "0px"

        });
        active = true;
    } else {
        Object.assign( document.getElementById("chatBody").style,
        {
            "display": "none",
            "overflow-y": "auto",
            "overflow-x": "hidden",
            "height" : "100%",
            "background-color ":"red"
        });


        Object.assign(document.getElementById("msgElement").style,{
            "min-width": "350px",

        });
        active = false;
    }


}

window.onclick = (event)=> {
    body = document.getElementById("chatBody");
    if (event.target == body) {
        // Object.assign(document.getElementById("chatBody").style,{"display":"none"})

        // Object.assign(document.getElementById("msgElement").style,{
        //     "min-width": "350px",
        // });

        body.style.display = "none";
    }
}
