import React from "react";
import {useParams} from "react-router-dom";

function ColorDisplay(){
    const {name} = useParams();

    return (
        <div style={{backgroundColor: name, height: '50vh', width: '100vw'}}></div>
    )
}

export default ColorDisplay;
