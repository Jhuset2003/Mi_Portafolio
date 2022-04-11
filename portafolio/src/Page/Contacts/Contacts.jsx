import React from 'react';
import "./Contacts.css"
import BtnContactsGit from "../../components/BtnContacts/BtnContactsGit";
import BtnContactsGmail from "../../components/BtnContacts/BtnContactsGmail";
import BtnLinkedin from "../../components/BtnContacts/BtnLinkedin";
import BtnWhatsapp from "../../components/BtnContacts/BtnWhatsapp";

function Contacts() {
    return(
        <section className="Contacts">
            <div className="ContactsLetters">
                <h1>Mis Redes</h1>
            </div>
            <div className="ContacMe">
                <BtnContactsGit/>
                <BtnContactsGmail/>
                <BtnLinkedin/>
                <BtnWhatsapp/>
            </div>
            <footer className='AboutMeFooter'>
                <div></div>
            </footer>
        </section>
    )
}
export default Contacts;