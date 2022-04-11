import React from 'react';
import { SiGmail } from 'react-icons/si';
import "./BtnContacts.css/BtnContactsGmail.css"


function BtnGmail() {
    return(
        <div className='BtnGmail'>   
                <button className='BtnGmail'>
                    <i><SiGmail/></i>
                    <p>jhusetqp@gmail.com</p>
                </button>
        </div>
    )
}
export default BtnGmail;