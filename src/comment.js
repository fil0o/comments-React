import React from 'react';

// Функциональный компонент User
const UserInfo = (props) => {
  return (
    <div className="userInfo">

        <div className="userName">
          {props.user.name}
        </div>

        <button
        className="buttonDel"
        onClick={props.delComment}
        >X</button>

        <div className="userText">
          {props.user.text}
        </div>



        <div className="commentDate">

          От {typeof props.user.date == 'string' ?
          new Date(props.user.date).toLocaleTimeString() :
          props.user.date.toLocaleTimeString()}

        </div>

    </div>
  );
}

export default UserInfo;
