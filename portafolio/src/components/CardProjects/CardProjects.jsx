import React from 'react';
import "./CardProjects.css"


function CardProjects() {
    const CardImages = require.context("../../Img/IMGProjects", true)
    const [Datos, setDatos] = React.useState([])
    React.useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch('json/Data.json')
        const info = await data.json()
        setDatos(info)
    }
    
    return(
        <div className='CardProjects'>
            {
                Datos.map(item =>(
                    <div className='CardContainer'>
                        <a href={item.link} key={item.id} target="_blank" rel="noreferrer">
                            <div className='CardProjectsTitle'><h2 key={item.id}>{item.name} </h2></div>
                            <img src={CardImages(`./${item.img}`)} alt="" key={item.id}></img>
                        </a>
                    </div>
                 
                ))
            }
            
        </div>
    )
}

export default CardProjects;