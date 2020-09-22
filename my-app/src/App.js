import React, { useState } from 'react';
import SearchBar from './components/searchBar';
import CurrentList from './components/currentList';
import searchMediInfo from './components/apis/searchMediInfo';

const App = () => {
  const [currentList, setCurrentList] = useState([]);
  const [recoMedi, setRecoMedi] = useState({});

  const handleChange = async (e) => {
    let getNewKeyword = () => e.target.value;
    let newKeyword = await getNewKeyword();
    let searchResult = await searchMediInfo('', newKeyword);

    if (newKeyword.length !== 0) {
      await setRecoMedi(searchResult);
    } else {
      await setRecoMedi({ recoMedi: { item: [] } });
    }
  };
  const deleteItem = async (e) => {
    let target = e.currentTarget.innerText.split('\n')[0];
    setCurrentList(currentList.filter((item) => item[0] !== target));
  };

  const addList = (e) => {
    let isNew = true;
    const [itemName, entpName] = e.currentTarget.innerText.split('\n');
    for (let item of currentList) {
      if (item[0] === itemName) {
        isNew = false;
        break;
      }
    }
    if (isNew === true) {
      let newList = [...currentList, [itemName, entpName]];
      setCurrentList(newList);
    } else {
      alert('이미 추가한 약 이름입니다.');
    }
    document.querySelector('.searchBar').value = '';
    setRecoMedi({});
  };

  return (
    <div>
      <h1>Hello World!</h1>
      <SearchBar addList={addList} handleChange={handleChange} recoMedi={recoMedi} />
      <CurrentList currentList={currentList} onClick={deleteItem} />
    </div>
  );
};

export default App;
