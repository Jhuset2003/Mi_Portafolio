import React from 'react'
import { SiAboutdotme } from "react-icons/si";
import "./BtnCss/BtnAboutMe.css"
import { NavLink } from "react-router-dom";
function BtnAboutMe() {
    return(
        <div className='btnAboutMeContainer dropdown-item'>
            <NavLink className="nav-link" to="/AboutMe">
                <button>
                    <i><SiAboutdotme/></i>
                </button>
            </NavLink>
        </div>
    )
}
export default BtnAboutMe;