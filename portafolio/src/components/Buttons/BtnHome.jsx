import React from 'react';
import { AiFillHome } from "react-icons/ai";
import "./BtnCss/BtnHome.css";
import { NavLink } from "react-router-dom";
function BtnHome() {
    return(
        <div className='btnHome dropdown-item'>
            <NavLink className="nav-link" to="/Mi_Portafolio">
                <button>
                    <i><AiFillHome/></i>
                </button>
            </NavLink>
        </div>
    )
}
export default BtnHome;