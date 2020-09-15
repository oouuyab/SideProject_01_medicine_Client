import React, { useState } from 'react';
import searchMediInfo from './apis/searchMediInfo';

const SearchBar = () => {
  const [itemName, setItemName] = useState('');
  const handleChange = (e) => {
    return setItemName(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="search.."
        className="searchBar"
        onChange={handleChange}
        onKeyDown={() => searchMediInfo(itemName)}
      />
      <button>추가</button>
    </form>
  );
};

export default SearchBar;
