import React from 'react';
import dotenv from 'dotenv';
dotenv.config();

const SearchBar = (props) => {
  const { addList, handleChange, recoMedi } = props;

  return (
    <div className="searchBarContainer">
      <form>
        <input
          type="text"
          placeholder="약 이름을 적어주세요"
          className="searchBar"
          onKeyUp={handleChange}
        />
      </form>
      <div className="recommend">
        <Recommend recoMedi={recoMedi} onClick={addList} />
      </div>
    </div>
  );
};

const Recommend = (props) => {
  let { onClick, recoMedi } = props;
  let results = recoMedi;
  let items = <> </>;

  function makeRecommend(item) {
    // const textUrl = '/images';
    // const query = item.INSERT_FILE.replace('http://www.health.kr/images', '');
    return (
      <button className="recommendResult" type="button" onClick={onClick} key={item.ITEM_SEQ}>
        <div key={item.ITEM_NAME}>{item.ITEM_NAME}</div>
        <div key={item.ENTP_NAME}>{item.ENTP_NAME}</div>
        {/* <a key={item.ITEM_SEQ} href={textUrl + query}>
            설명서
          </a> */}
      </button>
    );
  }
  if (results) {
    if (Array.isArray(results)) {
      items = results.map((item) => {
        return makeRecommend(item);
      });
    } else if (typeof results === 'object' && Object.keys(results).length > 0) {
      const item = results;
      return makeRecommend(item);
    }
    return <div>{items}</div>;
  }
  return;
};
export default SearchBar;
