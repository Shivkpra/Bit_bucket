import {BsTelephone} from 'react-icons/bs';
import {GoLocation} from 'react-icons/go';
import {MdOutlinePermIdentity} from 'react-icons/md';

import "../Topbar/Topbar.css";

function Topbar() {

    return (
      <div className='main -navbar'>
      
        <div className='top'  >
        <span className='pad-0'><BsTelephone /> 1860 123 1000</span>
        <span className='pad-0'><GoLocation/> 560004 Bangalore</span>
        <span className='pad-0'><MdOutlinePermIdentity/>Login/Sign up</span>
        </div>
      
      
      </div>
    );
  }

  export default Topbar;