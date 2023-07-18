import React, { useState } from 'react';
import Button from './button';
import Display from './display';

const Calculadora = () => {
  const [displayValue, setDisplayValue] = useState('0');
  const [memoryValue, setMemoryValue] = useState(0);
  const [hasMemoryValue, setHasMemoryValue] = useState(false);

  const handleButtonClick = (value) => {
    switch (value) {
      case 'C':
        setDisplayValue('0');
        setHasMemoryValue(false);
        break;
      case '=':
        try {
          // eslint-disable-next-line no-eval
          const result = eval(displayValue);
          setDisplayValue(result.toString());
        } catch (error) {
          setDisplayValue('Error');
        }
        break;
      case 'MC':
        setMemoryValue(0);
        setHasMemoryValue(false);
        break;
      case 'MR':
        setDisplayValue(memoryValue.toString());
        break;
      case 'M+':
        const newValueMPlus = parseFloat(displayValue) + memoryValue;
        setMemoryValue(newValueMPlus);
        setHasMemoryValue(true);
        setDisplayValue('');
        break;
      case 'M-':
        const newValueMMinus = memoryValue - parseFloat(displayValue);
        setMemoryValue(newValueMMinus);
        setHasMemoryValue(true);
        setDisplayValue(''); 
        break;
      default:
        if (displayValue === '0' || displayValue === 'Error') {
          setDisplayValue(value);
        } else {
          setDisplayValue(displayValue + value);
        }
        break;
    }
    console.log('Valor da memória:', memoryValue);

  };

  return (
    <div className="calculadora-container">
      <Display value={displayValue} hasMemory={hasMemoryValue} />

      <div>
        <Button value="MC" onClick={() => handleButtonClick('MC')} />
        <Button value="MR" onClick={() => handleButtonClick('MR')} />
        <Button value="M+" onClick={() => handleButtonClick('M+')} />
        <Button value="M-" onClick={() => handleButtonClick('M-')} />
      </div>
      <div>
        <Button value="7" onClick={() => handleButtonClick('7')} />
        <Button value="8" onClick={() => handleButtonClick('8')} />
        <Button value="9" onClick={() => handleButtonClick('9')} />
        <Button value="/" onClick={() => handleButtonClick('/')} />
      </div>
      <div>
        <Button value="4" onClick={() => handleButtonClick('4')} />
        <Button value="5" onClick={() => handleButtonClick('5')} />
        <Button value="6" onClick={() => handleButtonClick('6')} />
        <Button value="*" onClick={() => handleButtonClick('*')} />
      </div>
      <div>
        <Button value="1" onClick={() => handleButtonClick('1')} />
        <Button value="2" onClick={() => handleButtonClick('2')} />
        <Button value="3" onClick={() => handleButtonClick('3')} />
        <Button value="-" onClick={() => handleButtonClick('-')} />
      </div>
      <div>
        <Button value="0" onClick={() => handleButtonClick('0')} />
        <Button value="." onClick={() => handleButtonClick('.')} />
        <Button value="=" onClick={() => handleButtonClick('=')} />
        <Button value="+" onClick={() => handleButtonClick('+')} />
      </div>
      <div>
        <Button value="C" onClick={() => handleButtonClick('C')} />
      </div>
    </div>
  );
};

export default Calculadora;
