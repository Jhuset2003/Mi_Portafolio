import React from 'react';
import { RiWhatsappFill } from 'react-icons/ri';
import "./BtnContacts.css/BtnWhatsapp.css"


function BtnWhatsapp() {
    return(
        <div className='BtnWhatsapp'> 
                <button className='BtnWhatsapp'>
                    <i><RiWhatsappFill/></i>
                    <p>+57 3134432374</p>
                </button>
        </div>
    )
}
export default BtnWhatsapp;