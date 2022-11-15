import React from "react";

const Button = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.title}
      {props.iconClassName && (
        <i className={props.iconClassName}>{props.icon}</i>
      )}
    </button>
  );
};

export default Button;
