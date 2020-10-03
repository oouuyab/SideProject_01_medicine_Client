import React from 'react';

const contraindicateList = (props) => {
  try {
    const { contraindicate } = props;
    console.log(contraindicate.length);
    let contraindicateList = contraindicate.map((items) => {
      return (
        <div key={items.ITEM_SEQ}>
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
    return <div>{contraindicateList}</div>;
  } catch (err) {
    console.log('ContraindicateList err');
    console.log(err);
    return <></>;
  }
};

export default contraindicateList;
