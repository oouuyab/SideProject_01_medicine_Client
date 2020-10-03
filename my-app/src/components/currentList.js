import React from 'react';

const CurrentList = (props) => {
  try {
    const { currentList, onClick } = props;
    function makeList(item) {
      return (
        <div key={item[0] + item[1]}>
          <button type="button" onClick={onClick}>
            <div key={item[0]}>{item[0]}</div>
            <div key={item[1]}>{item[1]}</div>
          </button>
        </div>
      );
    }

    return currentList.map((item) => {
      return makeList(item);
    });
  } catch (err) {
    console.log('CurrentList err');
    console.log(err);
    return <></>;
  }
};

export default CurrentList;
