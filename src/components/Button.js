import React from "react";


const Button = (props) => {
  const { label, onClick} = props;
  return (
    <button disabled={!onClick} onClick={onClick}>
      {label}
    </button>
  );
};
export default Button;