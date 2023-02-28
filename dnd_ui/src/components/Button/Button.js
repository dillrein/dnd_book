import React from "react";

const Button = ({ text, bootstrapClass, onClick }) => {
  return (
    <button type="button" onClick={ onClick } className={ bootstrapClass }>
      { text }  
    </button>
  );
};

export default Button;
