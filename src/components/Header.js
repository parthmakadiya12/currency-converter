import logo from "../assets/currency.svg";

export const Header = () => {
  return (
    <div className="flx-row headerWrapper center">
      <img className="logo" src={logo} alt="logo" />
      <h1 className="header">Convertio</h1>
    </div>
  );
};
