import React from "react";

function Footer() {

   let footer = {
        position: "fixed",
        bottom: 0,
        height: "100px",
        width: "100%"
    }

    let text = {
        textAlign: "center",
        color: "white",
        fontFamily: "Roboto",
        fontSize: "34px"
    }
    
    return (
        <div style={footer} className="bg-teal-500">
               <h1 style={text}> I am a simple footer!</h1>
        </div>
    )
}

export default Footer;