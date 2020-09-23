import React, { useState } from 'react';
import SearchBar from './components/searchBar';
import CurrentList from './components/currentList';
import searchMediInfo from './components/apis/searchMediInfo';
import getContraindicate from './components/apis/getContraindicate';
import ResultList from './components/resultList';

const App = () => {
  const [currentList, setCurrentList] = useState([]);
  const [recoMedi, setRecoMedi] = useState({});
  const [result, setResult] = useState({});

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

  const getContraindicateResult = async (currnetList) => {
    //? 변경사항 발생 시 처음부터 조회하는 것이 아닌 기존의 리스트에서 추가된 것만 조회하는 방법이 있지 않을까?
    for (let i = 0; i < currentList.length - 1; i++) {
      for (let j = i + 1; j < currentList.length; j++) {
        let result = await getContraindicate(currentList[i][0], currentList[j][0]);
        console.log(result);
      }
    }
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
      <ResultList currentList={currentList} getContraindicate={getContraindicateResult} />
    </div>
  );
};

export default App;
