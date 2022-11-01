import React, {useState} from "react";
import {NavLink, useParams, Outlet} from "react-router-dom";
import HeaderBar from "./Header";

function ColorHome(){
    const [colors, setColors] = useState(['red', 'green', 'blue', 'purple']);
    const { name } = useParams();

    return (
        <>
        <HeaderBar bgColor={name} />
        <main>
            <Outlet context={{colors, setColors}}/>
            <p> Please select a color </p>
            {colors.map((c, i) => <NavLink to={`/colors/${c}`} key={i}> {c} </NavLink>)}
        </main>
        </>
    )
}

export default ColorHome;
