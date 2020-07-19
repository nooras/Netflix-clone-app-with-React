import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from "./requests"
import './Nav.css'

function Nav(){
    
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav_logo"
                src={require("./netflix.png")}
                alt="Netflix Logo"
            />
            <img
                className="pro_logo"
                src={require("./profile.png")}
                alt="Profile Logo"
            />
        </div>
    )
}

export default Nav;