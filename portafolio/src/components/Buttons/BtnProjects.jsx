import React from 'react';
import { IoIosConstruct } from "react-icons/io";
import "./BtnCss/BtnProjects.css";
import { NavLink } from "react-router-dom";
function BtnProjects() {
    return(
        <div className='btnProjectContainer dropdown-item'>
            <NavLink className="nav-link" to="/Mi_Portafolio/Projects">
                <button>
                    <i><IoIosConstruct/></i>
                </button>
            </NavLink>
        </div>
    )
}
export default BtnProjects;