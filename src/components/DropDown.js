import { countries } from "../data/countries";
const keys = Object.keys(countries);
export const DropDown = ({ onSelectChange, selectValue }) => {
  return (
    <select
      className="dropdown"
      onChange={(e) => onSelectChange(e, countries[e.target.value])}
      value={selectValue}
    >
      {keys.length > 0 &&
        keys.map((i, index) => {
          return (
            <option key={index + i} value={i}>
              {i}
            </option>
          );
        })}
    </select>
  );
};
