import React, { useEffect, useState } from 'react';
import SearchBar from '../../Components/Home/Searchbar';
import Filters from '../../Components/Home/Filters';
import ProductGrid from '../../Components/Home/ProductGrid';
import { datalist } from '../../constants';
import './styles.css';


const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedPrice, setSelectedPrice] = useState([15, 100]);
  const [selectedBedroom, setSelectedBedroom] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [list, setList] = useState(datalist);
  const [type, setType] = useState([
    {
      id:1,
      checked:false,
      label:'Flat'
    },
    {
      id:2,
      checked:false,
      label:'Bungalow'
    },
    {
      id:3,
      checked:false,
      label:'Rowhouse'
    },
  ])

  const handleSelectPrice = (event, value) => {
    setSelectedPrice(value);
  };

  const handleSelectBedroom = (event, value) =>
    !value ? null : setSelectedBedroom(value);

  const handleSelectLocation = (event, value) =>
    !value ? null : setSelectedLocation(value);

  const handleChangeChecked = (id) => {
    const typesStateList = type;
    const changeCheckedTypes = typesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setType(changeCheckedTypes);
  };

  const applyFilters=()=>{
    let updatedList=datalist;

    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.address.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];
    updatedList = updatedList.filter(
      (item) => item.rent >= minPrice && item.rent <= maxPrice
    );

    if(selectedLocation){
      updatedList = updatedList.filter(
        (item) => item.location === selectedLocation
      );
    }

    const typesChecked = type
      .filter((item)=> item.checked)
      .map((item)=>item.label);
    if (typesChecked.length) {
      updatedList = updatedList.filter((item) =>
        typesChecked.includes(item.category)
      )
    }

    if(selectedBedroom){
      updatedList = updatedList.filter(
        (item) => parseInt(item.bedrooms) === parseInt(selectedBedroom)
      );
    }

    setList(updatedList);
  }

  useEffect(()=>{
    applyFilters();
  }, [searchInput, selectedPrice, selectedLocation, type, selectedBedroom]);

  return (
    <div className='home'>
      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />

      <div className='wrap'>
        <div className='filter'>
          <Filters 
          selectBedroom={handleSelectBedroom} 
          selectedBedroom={selectedBedroom}
          selectLocation={handleSelectLocation} 
          selectedLocation={selectedLocation}
          type={type}
          changeChecked={handleChangeChecked}
          selectedPrice={selectedPrice}
          changedPrice={handleSelectPrice}
          />
        </div>

        <div className="product-grid">
          <ProductGrid list={list} />
        </div>
      </div>
    </div>
  );
}

export default Home