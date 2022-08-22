import { AiOutlineCopyright } from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
import {AiOutlineTwitter} from 'react-icons/ai';
import ios from "../../assets/images/play store.png"
import android from "../../assets/images/app_store.webp"
import './Footer.css'
function Footer() {
    const style={color:"blue", fontSize:"3em"}
    const styl={color:"red", fontSize:"3em"}
    const sty={color:"blue", fontSize:"3em"}


    return (
        
      <div className='  main -footer'>
        <div className="row footer">

         <div className=" col-4 copy-right">
            <h6 className='footer-heading'>copy right <AiOutlineCopyright/> 2022-2024</h6>
        </div>

        <div className=" col-4 download">
            <h6 className='footer-heading'>Download Our app</h6> 
            <img  className="image-pad0-footer"src={ios}/>
            <div>
            <img  className="image-pad0-footer" src={android}/>
            </div>
        </div>
        <div className=" col-4 contact">
            <h6 className='footer-heading'>Get Social With us</h6> 
            <span className='icons'><BsFacebook style={style}/></span>
            <span className='icons'><BsInstagram style={styl}/></span>
            <span className='icons'><AiOutlineTwitter style={sty}/></span>

        </div>
        </div>
        <div className="footer-md-ms-md">
       

        <div className=" download-md">
            <h6 className='footer-heading-md'>Download Our app</h6> 
            <img  className="image-pad0-footer-md"src={ios}/>
            
            <img  className="image-pad0-footer-md-2" src={android}/>
        
        </div>
        <div className=" contact-md">
            <h6 className='footer-heading-md'>Get Social With us</h6> 
            <div className='soical'>
            <span className='icons-md'><BsFacebook style={style}/></span>
            <span className='icons-md'><BsInstagram style={styl}/></span>
            <span className='icons-md'><AiOutlineTwitter style={sty}/></span>
            </div>
        </div>
        <div className=" copy-right-md">
            <p className='footer-md'>copy right <AiOutlineCopyright/> 2022-2024</p>
        </div>
        <div className=" copy-right-ms">
            <p className='footer-ms'>copy right <AiOutlineCopyright/> 2022-2024</p>
        </div>

         </div>      
      
      </div>
    );
  }

  export default Footer;