import React from 'react'
import { bedroomList, locationList } from '../../../constants';
import ButtonToggle from '../../Common/ButtonToggle'
import CheckBox from '../../Common/Checkbox';
import RangePicker from '../../Common/RangePicker';
import './styles.css'

const Filters = ({selectedBedroom, selectBedroom, selectedLocation, selectLocation, type, changeChecked, changedPrice, selectedPrice}) => {
  return (
    <div>
      <div className="input-group">
        <p className="label-range">Price Range (in 1000)</p>
        <RangePicker value={selectedPrice} changedPrice={changedPrice}/>
      </div>
      <div className="input-group">
        <p className="label">Location</p>
        <ButtonToggle 
        options={locationList} 
        value={selectedLocation} 
        selectToggle={selectLocation}
        />
      </div>
      <div className="input-group">
        <p className="label">Type of House</p>
        {type.map(type=>(
        <CheckBox key={type.id} 
        type={type}
        changeChecked={changeChecked}
        />))}
      </div>
      <div className="input-group">
        <p className="label">Number of bedrooms</p>
        <ButtonToggle 
        options={bedroomList} 
        value={selectedBedroom} 
        selectToggle={selectBedroom}
        />
      </div>
    </div>

  )
}

export default Filters