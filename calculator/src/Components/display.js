import React from 'react';

const Display = ({ value, hasMemory }) => {
  const displayValue = hasMemory ? `${value}` : value;
  const displayContainerStyle = {
    display: 'flex',
    justifyContent: hasMemory ? 'flex-start' : 'flex-end',
  };

  return (
    <div className="display-container" style={displayContainerStyle}>
      {hasMemory && <div className="memory-value">M</div>}
      <div className="number-value">{displayValue}</div>
    </div>
  );
};

export default Display;
