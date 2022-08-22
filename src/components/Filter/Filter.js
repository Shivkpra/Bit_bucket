import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './Filter.css';

import { useDispatch,  useSelector } from 'react-redux';
import { filterData } from '../../modules/reducer';

function Filter() {
    const [ShowDropdown, SetShowDropdown] = useState(false);
    const dispatch = useDispatch()
    const productData = useSelector(state => state.product.filterData)

    console.log(productData)
    const handleFilterChange = (data) => {
      dispatch(filterData(data)); 
      
    }

  return (
    <Dropdown
    onMouseLeave={() => SetShowDropdown(false)}
    onMouseOver={() => SetShowDropdown(true)}
    style = {{width : '13%'}}
    >
      <Dropdown.Toggle variant='success' id="dropdown">
        Shop By Category
      </Dropdown.Toggle>

      <Dropdown.Menu show = {ShowDropdown}>
      <Dropdown.Item><span onClick = {() =>  {handleFilterChange("All")}}>All</span></Dropdown.Item>
        <Dropdown.Item><span onClick ={() => {handleFilterChange("fruites")}}>Fruites</span></Dropdown.Item>
        <Dropdown.Item><span onClick = {() => {handleFilterChange("vegetables")}}>Vegetables</span></Dropdown.Item>
        <Dropdown.Item><span onClick = {() =>  {handleFilterChange("herbs")}}>Herbs</span></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Filter;