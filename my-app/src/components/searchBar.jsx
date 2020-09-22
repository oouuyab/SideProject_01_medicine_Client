import React from 'react';
import dotenv from 'dotenv';
dotenv.config();

const Recommend = (props) => {
  let results = props.recoMedi.item;
  let addList = props.addList;
  let items = <> </>;

  function makeRecommend(item) {
    // const textUrl = '/images';
    // const query = item.INSERT_FILE.replace('http://www.health.kr/images', '');
    return (
      <div key={item.ITEM_NAME + item.ENTP_NAME}>
        <button type="button" onClick={addList} id="eachSearchResult">
          <div key={item.ITEM_NAME}>{item.ITEM_NAME}</div>
          <div key={item.ENTP_NAME}>{item.ENTP_NAME}</div>
          {/* <a key={item.ITEM_SEQ} href={textUrl + query}>
            설명서
          </a> */}
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
  const addList = props.addList;

  return (
    <form>
      <input
        type="text"
        placeholder="search.."
        className="searchBar"
        onKeyUp={props.handleChange}
      />
      <Recommend recoMedi={props.recoMedi} addList={addList} />
    </form>
  );
};

export default SearchBar;
