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

    if (newKeyword.length !== 0) {
      await setRecoMedi(searchResult);
    } else {
      await setRecoMedi([]);
    }
  };

  const deleteItem = async (e) => {
    let target = e.currentTarget.innerText.split('\n')[0];
    setCurrentList(currentList.filter((item) => item[0] !== target));
  };

  // const getContraindicateResult = async (currnetList) => {
  //   let targetList = currentList;
  //   let result = [];
  //   for (let i = 0; i < targetList.length; i++) {
  //     for (let j = 0; j < targetList.length; j++) {
  //       if (targetList[i][0] !== targetList[j][0]) {
  //         let contraindicateResult = await getContraindicate(targetList[i][0], targetList[j][0]);
  //         result.push(contraindicateResult);
  //       }
  //     }
  //   }
  //   console.log(result);
  //   setContraindicate(result);
  // };

  const addList = async (e) => {
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
      let targetList = currentList;
      let result = [];
      for (let i = 0; i < targetList.length; i++) {
        for (let j = 0; j < targetList.length; j++) {
          if (targetList[i][0] !== targetList[j][0]) {
            let contraindicateResult = await getContraindicate(targetList[i][0], targetList[j][0]);
            result.push(contraindicateResult);
          }
        }
      }
      setContraindicate(result);
    } else {
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
