import React from 'react'
import demo from '../../Img/Demo.jpg'
import "./ImgCarousel.css"
import log from "../../Img/LOG.png"
import code from "../../Img/code.jpg"
import demo2 from "../../Img/demo2.png"
function ImgCarrousel() {
    return(
            <div id="carousel" className="carousel slide" data-bs-ride="carousel" data-bs-wrap="true">
                <div className="carousel-inner">
                    <div className='coverCarousel'>
                        <div className='LogCarousel'><img src={log} alt="" /></div>
                    </div>
                    <div className="carousel-item active">
                    <img src={demo} alt=""  className="d-block "/>
                    </div>
                    <div className="carousel-item">
                    <img src={code} alt=""  className="d-block" />
                    </div>
                    <div className="carousel-item">
                    <img src={demo2} alt=""  className="d-block " />
                    </div>
                </div>
            </div>
    )
}
export default ImgCarrousel;