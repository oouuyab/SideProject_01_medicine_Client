import React from 'react';

const Status = (props) => {
  try {
    const { contraindicate } = props;
    function getEmoji(contraindicate) {
      console.log(contraindicate);
      let status = 'Good';
      if (contraindicate.length > 0) {
        status = 'Bad!';
      }
      return (
        <>{status}</>
        // <button className="currentItem" key={item[0] + item[1]} type="button" onClick={onClick}>
        //   <div key={item[0]}>{item[0]}</div>
        //   <div key={item[1]}>{item[1]}</div>
        // </button>
      );
    }

    return getEmoji(contraindicate);
  } catch (err) {
    console.log('Status err');
    console.log(err);
    return <></>;
  }
};

export default Status;
