import React from "react";

const Button = ({ prev, next, clickHandler }) => {
  return (
    <div>
      {prev ? (
        <button className="navBtn" onClick={() => clickHandler(prev)}>
          Previous 
        </button>
      ) : null}
      {next ? (
        <button className="navBtn" onClick={() => clickHandler(next)}>
          Next 
        </button>
      ) : null}
    </div>
  );
};

export default Button;
