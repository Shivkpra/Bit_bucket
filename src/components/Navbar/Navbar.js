import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Navbar/Navbar.css'
import logo from "../../assets/images/bb_logo.png"

import {RiShoppingBasketFill} from 'react-icons/ri'

import {BsSearch} from 'react-icons/bs'
import Topbar from '../Topbar/Topbar';
import Filter from '../Filter/Filter';
import Slider from '../Slider/Slider';
import Offer_Slider from "../Offer_Slider/Offer_slider"

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import Offer from '../Offer/Offer';
import Bank from '../Bank/Bank';
import {GoLocation} from 'react-icons/go';
import {MdOutlinePermIdentity} from 'react-icons/md';
import Card from '../Card/Card'
import {useState} from 'react'
import bb from "../../assets/images/bb_icon.png"
import Small_Slider from "../Small_Slider/Small_Slider"
import Footer from '../Footer/Footer';


function Main() {
    const style = { color: "red", fontSize: "2em"}
    const sty ={color:"white", fontSize:"1.5em"}
    const st ={color:"white", fontSize:"1em"}
    const sestyle={marginLeft:"-10%"}
    const [count, setCount] = useState(0);
    const cart ={color:"white"}
    const cart_value ={color:"red"}

  const [searchData, setSearchData] = useState("");
  const [dataChange, setDataChange] = useState(false);
   

  const increment = () => {
    setCount(count +1)
    
  }

  const search = () => {
    setDataChange(true)
    
  }

  const searchDataHandler = (e) => {
    setDataChange(false)
    setSearchData(e.target.value)
    
  }
  


  return (
    <div className='navbar-main'>
        <Topbar/>
         
    <Navbar expand="lg" sticky="top">
      <Container >
        <Navbar.Brand href="#home"><img  className="img-main-logo" src={logo}/></Navbar.Brand>
      
        <Navbar.Brand href="#home"><span  className="img-main-logo-toogler" ><Badge badgeContent={count && count} style={cart_value} className="mtb-2">
              <ShoppingCartIcon className='basket' style={cart}/>
              </Badge><span/></span></Navbar.Brand>
              <Navbar.Brand href="#home"><span  className="img-main-logo-toogler" style={sty}><GoLocation/></span></Navbar.Brand>
              <Navbar.Brand href="#home"><span  className="img-main-logo-toogler"><img  className="bb"src={bb} /></span></Navbar.Brand>

              <Navbar.Brand href="#home"><span  className="img-main-logo-toogler" style={sty}><MdOutlinePermIdentity/></span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
    
        
        <Navbar.Collapse id="basic-navbar-nav">
        
      
          <Nav className="me-auto">
                    

          
            <Nav.Link href="#home"> <input  className="input" type="search"
                    placeholder="Search"
                  
                    aria-label="Search"
                    value= {searchData}
                    onChange = {(e) => {searchDataHandler (e)}}/>
                    
        <button onClick={search} ><BsSearch/></button></Nav.Link>
             
        
        <span className='bucket'><RiShoppingBasketFill style={style}/> My Bucket {count && count} items </span>
         
          </Nav>
        </Navbar.Collapse>
        
      </Container>
      <span className='input-ms'><input  className="input-md" type="search"
                    placeholder="Search of product ..."
                  
                    aria-label="Search"
                    value= {searchData}
                    onChange = {(e) => {searchDataHandler (e)}} /><BsSearch  onClick={search} style={sestyle}/></span>
   
      
    </Navbar>
    
  
    
    <div className='navbar-filter'>
    <Filter/>
    </div>
    
    <Slider/>
  
    
    <Offer/>
    <Small_Slider/>
    <Offer_Slider/>
    <Bank/>
    
    <Card increment = {increment} searchData = {searchData} dataChange = {dataChange} />
  <Footer/>
    
    </div>

  );
}

export default Main;


