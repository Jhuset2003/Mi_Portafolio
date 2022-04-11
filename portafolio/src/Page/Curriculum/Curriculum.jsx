import React from 'react';
import CV from '../../components/CV/CV';
import "./Curriculum.css"

function Curriculum() {
    return(
        <section className='Curriculum'>
            <div className='CurriculumLetters'><h1>Curriculum</h1></div>
            <div className='CVContainer'>
                <CV/>
            </div>
        </section>
    )
}

export default Curriculum;