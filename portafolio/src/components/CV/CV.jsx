import React from 'react';
import "./CV.css"
import log from "../../Img/LOG.png"
import { IoLogoCss3,IoLogoJavascript } from 'react-icons/io';
import { ImHtmlFive } from 'react-icons/im';
import { SiReact,SiMongodb,SiMysql } from 'react-icons/si';


function CV() {
    return(
        <div className='CV'>
            <header className='CVTitle'> <h1><strong>CV </strong>Albert Quintanilla</h1></header>
            <div className='CVBody'>
                <div className='CVImgContainer'><img src={log} alt="" /></div>
                
                <div className='CVLetters'>
                    <div className='EXP'>
                        <h3>Experciencia</h3>
                        <p>Proyectos Personales y Estudiantiles</p>
                    </div>
                    <div className='Capabilities'>
                        <h3>Capacidades</h3>
                        <ul>
                            <li><IoLogoCss3/></li>
                            <li><IoLogoJavascript/></li>
                            <li><ImHtmlFive/></li>
                            <li><SiReact/></li>
                            <li><SiMongodb/></li>
                            <li><SiMysql/></li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CV;