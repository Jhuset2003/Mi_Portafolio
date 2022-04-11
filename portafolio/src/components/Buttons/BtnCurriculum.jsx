import React from 'react';
import { MdContactPage } from "react-icons/md";
import "./BtnCss/BtnCurriculum.css";
import { NavLink } from "react-router-dom";
function BtnCurriculum() {
    return(
        <div className='btnCurriculumContainer dropdown-item'>
            <NavLink className="nav-link" to="/Mi_Portafolio/Curriculum">
                <button>
                    <i><MdContactPage/></i>
                </button>
            </NavLink>
        </div>
    )
}
export default BtnCurriculum;