import React from 'react';
import './styles.css';

const SearchBar = ({ formSubmit, value, handleSearchKey, clearSearch }) => (
  <div className='searchBar-wrap'>
    <form onSubmit={formSubmit}>
      <input
        type='text'
        placeholder='Recherche . . .'
        value={value}
        onChange={handleSearchKey}
      />
      {value && <span onClick={clearSearch}>×</span>}
      <button>Voir</button>
    </form>
  </div>
);

export default SearchBar;
