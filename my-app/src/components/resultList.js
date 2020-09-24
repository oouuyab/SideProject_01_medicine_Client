import React from 'react';

const ResultList = (props) => {
  try {
    const { currentList, getContraindicate } = props;

    let list = [];

    for (let i = 0; i < currentList.length - 1; i++) {
      for (let j = i + 1; j < currentList.length; j++) {
        list.push([currentList[i], currentList[j]]);
      }
    }
    let resultList = list.map((items) => {
      let result = getContraindicate(items);
      return (
        <div>
          <div>제조사</div>
          <div>{result.ENTP_NAME}</div>
          <div>품목 명</div>
          <div>{result.ITEM_NAME}</div>
          <div>제조사</div>
          <div>{result.MIXTURE_ENTP_NAME}</div>
          <div>품목 명</div>
          <div>{result.MIXTURE_ITEM_NAME}</div>
          <div>금기내용</div>
          <div>{result.PROHBT_CONTENT}</div>
        </div>
      );
    });

    return <>{resultList}</>;
  } catch (err) {
    console.log('CurrentList err');
    console.log(err);
    return <></>;
  }
};

export default ResultList;
