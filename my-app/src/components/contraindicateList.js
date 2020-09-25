import React from 'react';

const contarindicateList = (props) => {
  try {
    const { currentList, contarindicate, getContraindicateResult } = props;

    getContraindicateResult(currentList);

    let contarindicateList = contarindicate.map((items) => {
      return (
        <div key={items}>
          <div>제조사</div>
          <div>{items.ENTP_NAME}</div>
          <div>품목 명</div>
          <div>{items.ITEM_NAME}</div>
          <div>제조사</div>
          <div>{items.MIXTURE_ENTP_NAME}</div>
          <div>품목 명</div>
          <div>{items.MIXTURE_ITEM_NAME}</div>
          <div>금기내용</div>
          <div>{items.PROHBT_CONTENT}</div>
        </div>
      );
    });

    return <div>{contarindicateList}</div>;
  } catch (err) {
    console.log('CurrentList err');
    console.log(err);
    return <></>;
  }
};

export default contarindicateList;
