import React from 'react';
import { ImMenu } from "react-icons/im";
import "./BtnCss/BtnMenu.css";
function BtnMenu() {
    return(
        <div className='btnMenuContainer dropdown-toggle'  type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown">
            <button>
                <i><ImMenu/></i>
            </button>
        </div>
    )
}
export default BtnMenu;