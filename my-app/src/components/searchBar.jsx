import React from 'react';
import dotenv from 'dotenv';
dotenv.config();

const SearchBar = (props) => {
  const { addList, handleChange, recoMedi } = props;

  return (
    <form>
      <input
        type="text"
        placeholder="약 이름을 적어주세요"
        className="searchBar"
        onKeyUp={handleChange}
      />
      <Recommend recoMedi={recoMedi} addList={addList} />
    </form>
  );
};

const Recommend = (props) => {
  let { addList, recoMedi } = props;
  let results = recoMedi.item;
  let items = <> </>;

  function makeRecommend(item) {
    // const textUrl = '/images';
    // const query = item.INSERT_FILE.replace('http://www.health.kr/images', '');
    return (
      <div key={item.ITEM_NAME + item.ENTP_NAME}>
        <button type="button" onClick={addList}>
          <div key={item.ITEM_NAME}>{item.ITEM_NAME}</div>
          <div key={item.ENTP_NAME}>{item.ENTP_NAME}</div>
          {/* <a key={item.ITEM_SEQ} href={textUrl + query}>
            설명서
          </a> */}
        </button>
      </div>
    );
  }
  if (results) {
    if (Array.isArray(results)) {
      items = results.map((item) => {
        return makeRecommend(item);
      });
    } else if (typeof results === 'object') {
      const item = results;
      return makeRecommend(item);
    }
  } else {
    items = <> </>;
  }
  return <div>{items}</div>;
};
export default SearchBar;
