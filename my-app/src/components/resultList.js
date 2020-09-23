import React from 'react';

const ResultList = (props) => {
  try {
    const { currentList, getContraindicate } = props;

    getContraindicate(currentList);

    // function makeList(item) {
    //   return (
    //     <div key={item[0] + item[1]}>
    //       <div key={item[0]}>{item[0]}</div>
    //       <div key={item[1]}>{item[1]}</div>
    //     </div>
    //   );
    // }
    // return currentList.map((item) => {
    // return makeList();
    // });
    return <></>;
  } catch (err) {
    console.log('CurrentList err');
    console.log(err);
    return <></>;
  }
};

export default ResultList;
