export const Input = ({ onChange, inputValue }) => {
  return (
    <input
      type="number"
      className="currencyInput"
      value={inputValue}
      onChange={onChange}
    >
      {inputValue}
    </input>
  );
};
