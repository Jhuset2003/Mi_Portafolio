import React from 'react';
import CardProjects from '../../components/CardProjects/CardProjects';
import "./Projects.css"

function Projects() {
    return(
       <section className='Projects'>
           <div className='ProjectsLetters'><h1>Proyectos</h1></div>
           <div className='Cards'><CardProjects/></div>
       </section>
            
        
    )
}
export default Projects;