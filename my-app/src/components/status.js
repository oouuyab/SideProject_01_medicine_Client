import React from 'react';

const Status = (props) => {
  try {
    const { contraindicate } = props;
    function getEmoji(contraindicate) {
      console.log(contraindicate);
      let status = (
        <div className="statusContainer">
          <i className="far fa-smile-wink" />
          <h2 className="smileText">안전합니다!</h2>
        </div>
      );
      if (contraindicate.length > 0) {
        status = (
          <div className="statusContainer">
            <i
              className="far fa-dizzy"
              style={{ fontSize: 75 + 'px', color: '#ED462F', position: 'static' }}
            ></i>
            <h2 className="dizzyText">위험합니다!</h2>
          </div>
        );
      }
      return <>{status}</>;
      // <button className="currentItem" key={item[0] + item[1]} type="button" onClick={onClick}>
      //   <div key={item[0]}>{item[0]}</div>
      //   <div key={item[1]}>{item[1]}</div>
      // </button>
    }

    return getEmoji(contraindicate);
  } catch (err) {
    console.log('Status err');
    console.log(err);
    return <></>;
  }
};

export default Status;
