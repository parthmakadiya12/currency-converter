export const Input = ({ onChange, inputValue, disabled = false }) => {
  return (
    <input
      className={`currencyInput ${disabled && "disabled"}`}
      value={inputValue}
      onChange={onChange}
    ></input>
  );
};
