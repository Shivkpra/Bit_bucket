import img_1 from "../../assets/images/img_1.webp"
import img_2 from "../../assets/images/img_2.webp"
import img_3 from "../../assets/images/img_2.webp"
import img_4 from "../../assets/images/img_3.webp"
import img_5 from "../../assets/images/img_4.webp"
import img_6 from "../../assets/images/img_5.webp"
import img_7 from "../../assets/images/img_6.webp"
import "../Slider/Slider.css"
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

 function Slider() {
return (
    <div className="main-slider">
	<div >
	
	<Carousel>
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
             src={img_1}
			alt="Image One"
		/>
		<Carousel.Caption>
			
		</Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src={img_2}
			alt="Image Two"
		/>
		<Carousel.Caption>
			
		</Carousel.Caption>
		</Carousel.Item>

		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src={img_3}
			alt="Image Three"
		/>
		<Carousel.Caption>
			
		</Carousel.Caption>
		</Carousel.Item>
        
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src={img_4}
			alt="Image four"
		/>
		<Carousel.Caption>
			
		</Carousel.Caption>
		</Carousel.Item>
    
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src={img_5}
			alt="Image five"
		/>
		<Carousel.Caption>
			
		</Carousel.Caption>
		</Carousel.Item>
        
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src={img_6}
			alt="Image Six"
		/>
		<Carousel.Caption>
			
		</Carousel.Caption>
		</Carousel.Item>
    
		<Carousel.Item interval={1500}>
		<img
			className="d-block w-100"
src={img_7}
			alt="Image Seven"
		/>
		<Carousel.Caption>
			
		</Carousel.Caption>
		</Carousel.Item>
	</Carousel>
	</div>
    
    </div>
);
}

export default Slider;