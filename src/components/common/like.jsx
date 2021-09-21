import React from "react";

const Like = (props) => {
  console.log('like props :', props);
  const styles = {
    cursor: "pointer",
  };
  return (
    <div>
      {props.liked ? (
        <i
          className="fa fa-heart"
          style={styles}
          onClick={props.onClick}
        ></i>
      ) : (
        <i
          className="fa fa-heart-o"
          style={styles}
          onClick={props.onClick}
        ></i>
      )}
    </div>
  );
}

export default Like;
