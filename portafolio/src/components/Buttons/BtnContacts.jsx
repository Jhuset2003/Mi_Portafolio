import React from 'react';
import { FaPhone } from "react-icons/fa";
import "./BtnCss/BtnContacts.css";
import { NavLink } from "react-router-dom";
function BtnContacts() {
    return(
        <div className='btnContactsContainer dropdown-item'>
            <NavLink className="nav-link" to="/Contacts">
                <button>
                    <i><FaPhone/></i>
                </button>
            </NavLink>
        </div>
    )
}
export default BtnContacts;