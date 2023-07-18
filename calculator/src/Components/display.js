import React from 'react';

const Display = ({ value, hasMemory }) => {
  const displayValue = hasMemory ? `M ${value}` : value;

  return <div className={'display-container'}>{displayValue}</div>;
};

export default Display;
