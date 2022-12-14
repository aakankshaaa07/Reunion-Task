import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './styles.css'

const SearchBar = ({ value, changeInput }) => (
  <div className='searchbar'>
    <SearchIcon className='search-icon' />
    <input
      type='text'
      placeholder='Search Properties to Rent'
      value={value}
      onChange={changeInput}
    />
  </div>
);

export default SearchBar