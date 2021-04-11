import { Input } from "./Input";
import { DropDown } from "./DropDown";
import { countries } from "../data/countries";
export const InputCard = ({
  onSelectChange,
  selectValue,
  inputValue,
  onChange,
  disabled,
}) => {
  return (
    <>
      <div className="card">
        <DropDown
          onSelectChange={onSelectChange}
          selectValue={selectValue}
          isMain={!disabled}
        />
        <div className="flx-row">
          {selectValue && (
            <span className={`currencyLogo ${disabled && "disabled"}`}>
              {countries[selectValue]}
            </span>
          )}
          <Input
            onChange={onChange}
            inputValue={inputValue}
            disabled={disabled}
          />
        </div>
      </div>
    </>
  );
};
