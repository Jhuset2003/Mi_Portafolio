import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import "./BtnContacts.css/BtnLinkedin.css"


function BtnLinkedin() {
    return(
        <div className='BtnLinkedin'>
            <a href="https://www.linkedin.com/in/albert-quintanilla-peralta-807804226/" target="_blank" rel="noreferrer">
                <button className='BtnLinkedin'>
                    <i><BsLinkedin/></i>
                    <p>Albert Quintanilla </p>
                </button>
            </a>
        </div>
    )
}
export default BtnLinkedin;