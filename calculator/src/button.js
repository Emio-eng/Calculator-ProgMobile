import React from 'react';

const Button = ({ value, onClick }) => {
  const isSpecialButton = ["M+", "M-", "MC", "MR"].includes(value);

  let buttonClass = `custom-button ${isSpecialButton ? "special-button" : ""}`;
  switch (value) {
    case '+':
      buttonClass += ' plus-button';
      break;
    case '-':
      buttonClass += ' minus-button';
      break;
    case '*':
      buttonClass += ' multiply-button';
      break;
    case '/':
      buttonClass += ' divide-button';
      break;
    default:
      break;
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
