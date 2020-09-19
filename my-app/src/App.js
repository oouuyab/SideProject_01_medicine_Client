import React, { useState } from 'react';
import SearchBar from './components/searchBar';
import CurrentList from './components/currentList';

const App = () => {
  const [currentList, setCurrentList] = useState([]);

  const addList = (value) => {
    console.log(value);
    let newList = [...currentList, value];
    console.log(newList);
    setCurrentList(newList);
  };

  return (
    <div>
      <h1>Hello World!</h1>
      <SearchBar addList={addList} />
      <CurrentList currentList={currentList} />
    </div>
  );
};

export default App;
