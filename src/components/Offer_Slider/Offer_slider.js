import Slider_1 from "../../assets/images/Slider_1.webp"
import Slider_2 from "../../assets/images/Slider_2.webp"
import Slider_3 from "../../assets/images/Slider_3.webp"
import Slider_4 from "../../assets/images/Slider_4.webp"
import Slider_5 from "../../assets/images/Slider_5.webp"
import Slider_6 from "../../assets/images/Slider_6.webp"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import "../Offer_Slider/Offer_Slider.css"

 function Offer_Slider() {
return (
    <div className="main-slider-2">
	<div >
	
	<Carousel id="carousel-indicitors-icon">
		<Carousel.Item id="carousel-indicitors-icon" interval={1500}>
		<img
			className="Slider-pad"
             src={Slider_1}
			alt="Image One"
		/>
        <img
			className="Slider-pad"
             src={Slider_3}
			alt="Image One"
		/>
        <img
			className="Slider-pad"
             src={Slider_3}
			alt="Image One"
		/>
        <img
		    className="Slider-pad"
             src={Slider_4}
			alt="Image One"
		/>
		<Carousel.Caption>
			
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item  id="carousel-indicitors-icon" interval={1500}>
            
		<img
			 className="Slider-pad"
src={Slider_3}
			alt="Image Two"
		/>
        <img
			 className="Slider-pad"
             src={Slider_4}
			alt="Image One"
		/>
        <img
			 className="Slider-pad"
             src={Slider_5}
			alt="Image One"
		/>
        <img
		     className="Slider-pad"
             src={Slider_6}
			alt="Image One"
		/>
		<Carousel.Caption>
			
		</Carousel.Caption>
		</Carousel.Item>

	</Carousel>
	</div>
    
    </div>
);
}

export default Offer_Slider;