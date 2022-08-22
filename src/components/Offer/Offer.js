import Slider_1 from "../../assets/images/Slider_1.webp"
import Slider_2 from "../../assets/images/Slider_2.webp"
import Slider_3 from "../../assets/images/Slider_3.webp"
import Slider_4 from "../../assets/images/Slider_4.webp"
import Slider_5 from "../../assets/images/Slider_5.webp"
import Slider_6 from "../../assets/images/Slider_6.webp"
import "../Offer/Offer.css"
import Offer_Slider from "../Offer_Slider/Offer_slider"
import Small_Slider from "../Small_Slider/Small_Slider"
function Offer() {
    return (
      <div className="offer">
        <div className="images-offer">
            <img  className="pad-offer" src={Slider_1}/>
            <img className="pad-offer" src={Slider_2}/>
            <img className="pad-offer" src={Slider_3}/>
            <img className="pad-offer" src={Slider_4}/>
            <img className="pad-offer" src={Slider_5}/>
            <img className="pad-offer" src={Slider_6}/>
        </div>
              
      
      </div>
    );
  }

  export default Offer;