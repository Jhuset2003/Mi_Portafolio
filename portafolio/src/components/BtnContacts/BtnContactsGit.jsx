import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import "./BtnContacts.css/BtnContactsGit.css"


function BtnGit() {
    return(
        <div className='BtnGit'>
            <a href="https://github.com/Jhuset2003" target="_blank" rel="noreferrer">
                <button className='BtnGit'>
                    <i><AiFillGithub/></i>
                    <p>Jhuset 2003</p>
                </button>
            </a>
        </div>
    )
}
export default BtnGit;