import {  NavLink } from "react-router-dom";
import React from 'react';
import './nav_bar.css'

function Navbar(props){
    if (props.classname==='open'){
        return(
            <>
                <nav className={props.classname}>
                    <ul onClick={()=>{props.setValue(!props.value)}}>
                        <li><NavLink to={"/"}>HOME</NavLink></li>
                        <li><NavLink to={"/menu"}>MENU</NavLink></li>
                        <li><NavLink to={"/reservations"}>RESERVATIONS</NavLink></li>
                        <li><NavLink to={"/order_online"}>ORDER ONLINE</NavLink></li>
                    </ul>
                </nav>
            </>
        )
    }
    else{
        return(
            <>
                <nav className={props.classname}>
                    <ul>
                        <li><NavLink to={"/"}>HOME</NavLink></li>
                        <li><NavLink to={"/menu"}>MENU</NavLink></li>
                        <li><NavLink to={"/reservations"}>RESERVATIONS</NavLink></li>
                        <li><NavLink to={"/order_online"}>ORDER ONLINE</NavLink></li>
                    </ul>
                </nav>
            </>
        )
    }
}

export default Navbar
