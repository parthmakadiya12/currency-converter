import { countries } from "../data/countries";
const keys = Object.keys(countries);
export const DropDown = ({ onSelectChange, selectValue, isMain }) => {
  return (
    <select
      className="dropdown"
      onChange={(e) => onSelectChange(e, isMain)}
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
