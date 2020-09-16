import React, { useState } from 'react';
import searchMediInfo from './apis/searchMediInfo';
import dotenv from 'dotenv';
dotenv.config();

const Recommend = (props) => {
  let results = props.recoMedi.item;
  let items = <> </>;
  if (props.recoMedi.item && Array.isArray(props.recoMedi.item)) {
    items = results.map((item) => {
      console.log(item);
      const textUrl = '/images';
      const query = item.INSERT_FILE.replace('http://www.health.kr/images', '');
      console.log(textUrl + query);
      return (
        <div id="eachSearchResult">
          <div key={item.ITEM_NAME}>{item.ITEM_NAME}</div>
          <div key={item.ENTP_NAME}>{item.ENTP_NAME}</div>
          <a key={item.ITEM_SEQ} href={textUrl + query}>
            설명서
          </a>
        </div>
      );
    });
  } else {
    items = <> </>;
  }
  return <div>{items}</div>;
};
//? 문제 : e.target.value 변경이랑 setState  비동기 문제
const SearchBar = () => {
  const [recoMedi, setRecoMedi] = useState({});

  const handleChange = async (e) => {
    let getNewKeyword = () => e.target.value;
    let newKeyword = await getNewKeyword();

    console.log('keyword :' + newKeyword);
    let searchResult = await searchMediInfo('', newKeyword);

    if (newKeyword.length !== 0) {
      await setRecoMedi(searchResult);
    } else {
      await setRecoMedi({ recoMedi: { item: [] } });
    }
  };

  return (
    <form>
      <input type="text" placeholder="search.." className="searchBar" onKeyUp={handleChange} />
      <button>추가</button>
      <Recommend recoMedi={recoMedi} />
    </form>
  );
};

export default SearchBar;
