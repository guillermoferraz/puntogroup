import React from 'react';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import i1 from './img/i1.jpg';
import i2 from './img/i2.jpg';
import i3 from './img/i3.jpg';
import i4 from './img/i4.jpg';
import i5 from './img/i5.jpg';
import i6 from './img/i6.jpeg';


const Home = () => {

    const settings = {
        dots: false,
        arrows: false,
        fade: true,
        autoplaySpeed: 900,
        infinite: true,
        autoplay:true,
        speed: 2000,
        slidesToShow:1,
        pauseOnHover: false,
        slidesToScroll:1
    }; 

    return(
        <div>
            <div className="text-home">
                <h1>Bienvenido a PuntoGroup</h1>
                <h3>Soluciones constructivas</h3>
            </div>
            <Slider {...settings} className="slider">

                <div className="sliderDiv">
                    <img src={i1}/>
                </div>
                <div className="sliderDiv">
                    <img src={i2}/>
                </div>
                <div className="sliderDiv">
                    <img src={i3}/>
                </div>                
                <div className="sliderDiv">
                    <img src={i4}/>
                </div>                

                <div className="sliderDiv">
                    <img src={i5}/>
                </div>                
                <div className="sliderDiv">
                    <img src={i6}/>
                </div>                

            </Slider>

        </div>
    )
}

export default Home;
