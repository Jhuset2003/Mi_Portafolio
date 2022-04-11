import React from 'react';
import "./Home.css";
import ImgCarousel from "../../components/ImgCarousel/ImgCarousel";
function Home() {
    return(
        <section className='Home'>
            <div className='carouselContainerHome'><ImgCarousel/></div>
            <div className="letters">
                <h1>Bienvenidos</h1>
                <p>Mi nombre es Albert Quintanilla y 
                esta es mi Pagina Web</p>
            </div>
            
        </section>
    )
}

export default Home;