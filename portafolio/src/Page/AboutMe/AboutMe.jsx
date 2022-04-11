import React from 'react';
import Accordion from "../../components/Accordion/Accordion"
import "./AboutMe.css"
function AboutMe() {
    return(
        <section className="AboutMe">
            <div className='LetterAboutMe'>
                <h1>Acerca De Mi</h1>
            </div>
            <div className='AccordionContainer'>
                <Accordion/>
            </div>
            <footer className='AboutMeFooter'>
                <div></div>
            </footer>
        </section>
    )
}
export default AboutMe;