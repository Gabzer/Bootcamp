import { useState } from 'react';

const InputNumerico = ({ initialValue, min = 1, max = 9, correct = 0 }) => {
  const [value, setValue] = useState(initialValue);
  const [showCorrect, setShowCorrect] = useState(false);

  const testNumber = async (number, correctNumber) => {
    return number === correctNumber;
  };
  const callApi = async value => {
    setTimeout(() => {
      setShowCorrect(testNumber(value, correct));
    }, 500);
  };
  const handleChange = async e => {
    setValue(e.target.value);
    await callApi(e.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor="numericInput">Numero</label>
      <input
        id="numericInput"
        type="text"
        value={value}
        onChange={handleChange}
      />
      {value < min || value > max ? <span>Erro</span> : null}
      {showCorrect ? <span>Numero Correto</span> : null}
    </div>
  );
};

export default InputNumerico;
