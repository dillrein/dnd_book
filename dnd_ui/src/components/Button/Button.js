import React from "react";

const Button = ({ text, bootstrapClass }) => {
  return (
    <button type="button" className={ bootstrapClass }>
      { text }  
    </button>
  );
};

export default Button;
