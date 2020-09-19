import React, { useState } from 'react';
import searchMediInfo from './apis/searchMediInfo';
// import getContraindicate from './apis/getContraindicate';
import dotenv from 'dotenv';
dotenv.config();

const Recommend = (props) => {
  let results = props.recoMedi.item;
  let addList = props.addList;
  console.log(addList);
  let items = <> </>;

  function makeRecommend(item) {
    const textUrl = '/images';
    const query = item.INSERT_FILE.replace('http://www.health.kr/images', '');
    return (
      <div>
        <button type="submit" onClick={addList} id="eachSearchResult">
          {item.ITEM_NAME}
          {/* <div class="item_name" key={item.ITEM_NAME}>
             
            </div> */}
          <div key={item.ENTP_NAME}>{item.ENTP_NAME}</div>
          <a key={item.ITEM_SEQ} href={textUrl + query}>
            설명서
          </a>
        </button>
      </div>
    );
  }
  if (props.recoMedi.item) {
    if (Array.isArray(props.recoMedi.item)) {
      items = results.map((item) => {
        return makeRecommend(item);
      });
    } else if (typeof props.recoMedi.item === 'object') {
      const item = props.recoMedi.item;
      return makeRecommend(item);
    }
  } else {
    items = <> </>;
  }
  return <div>{items}</div>;
};

const SearchBar = (props) => {
  const [recoMedi, setRecoMedi] = useState({});
  const addList = props.addList;
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

  return (
    <form>
      <input type="text" placeholder="search.." className="searchBar" onKeyUp={handleChange} />
      <Recommend recoMedi={recoMedi} addList={addList} />
    </form>
  );
};

export default SearchBar;
