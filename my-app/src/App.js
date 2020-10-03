import React, { useState } from 'react';
import SearchBar from './components/searchBar';
import CurrentList from './components/currentList';
import searchMediInfo from './components/apis/searchMediInfo';
import getContraindicate from './components/apis/getContraindicate';
import ContraindicateList from './components/contraindicateList';
import './App.css';

const App = () => {
  const [currentList, setCurrentList] = useState([]);
  const [recoMedi, setRecoMedi] = useState([]);
  const [contraindicate, setContraindicate] = useState([]);

  const handleChange = async (e) => {
    let newKeyword = e.target.value;
    let searchResult = await searchMediInfo('', newKeyword);
    if (newKeyword.length === 0 || !searchResult) {
      searchResult = [];
    }
    await setRecoMedi(searchResult);
  };

  const deleteItem = async (e) => {
    let target = e.currentTarget.innerText.split('\n')[0];
    setCurrentList(currentList.filter((item) => item[0] !== target));
  };

  //! 입력한 약의 갯수 -1 만큼의 contraindicate 결과가 출력되는 버그 => 입력한 약의 갯수만큼의 contraindicate 결과 출력 수정 필요
  const addList = async (e) => {
    let isNew = true;
    const [itemName, entpName] = e.currentTarget.innerText.split('\n');
    for (let item of currentList) {
      if (item[0] === itemName) {
        isNew = false;
        break;
      }
    }
    let newList = currentList;
    if (isNew === true) {
      newList = [...currentList, [itemName, entpName]];
    }
    setCurrentList(newList);
    let result = [];
    for (let i = 0; i < currentList.length; i++) {
      for (let j = 0; j < currentList.length; j++) {
        // console.log(currentList[i][0], currentList[j][0], currentList[i][0] !== currentList[j][0]);
        if (currentList[i][0] !== currentList[j][0]) {
          let contraindicateResult = await getContraindicate(currentList[i][0], currentList[j][0]);
          console.log(contraindicateResult);
          result.push(contraindicateResult);
        }
      }
    }
    setContraindicate(result);
    if (isNew === false) {
      alert('이미 추가한 약 이름입니다.');
    }
    document.querySelector('.searchBar').value = '';
    setRecoMedi({});
  };

  return (
    <div className="container">
      <h1 className="title">Hello World!</h1>
      <SearchBar
        className="searchBar"
        addList={addList}
        handleChange={handleChange}
        recoMedi={recoMedi}
      />
      <CurrentList className="currentList" currentList={currentList} onClick={deleteItem} />
      <ContraindicateList className="resultList" contraindicate={contraindicate} />
    </div>
  );
};

export default App;
