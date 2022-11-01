import React from "react";
import {Link} from "react-router-dom";

const hrStyle = {
    backgroundColor: "black",
    width: "80vw",
    height: "5px",
    position: "relative",
    right: "9%",
    border: "none"
}

function HeaderBar({bgColor}){

    return (
        <header style={{backgroundColor: bgColor}}>
            <h1>Welcome to the color factory!</h1>
            <hr style={hrStyle}></hr>
            <Link to={'/colors/add'}> Add a color </Link>
        </header>
    )
}

export default HeaderBar;
