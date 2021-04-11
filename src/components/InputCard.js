import { Input } from "./Input";
import { DropDown } from "./DropDown";

export const InputCard = ({
  onSelectChange,
  selectValue,
  inputValue,
  onChange,
  logo,
}) => {
  return (
    <>
      <div className="card">
        <DropDown onSelectChange={onSelectChange} selectValue={selectValue} />
        <div className="flx-row">
          {logo && <span className="currencyLogo">{logo}</span>}
          <Input onChange={onChange} inputValue={inputValue} />
        </div>
      </div>
    </>
  );
};
