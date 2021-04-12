import { Header } from "./components/Header";
import { InputCard } from "./components/InputCard";
import { useEffect } from "react";
import change from "./assets/change.svg";
import "./App.css";

function App({
  from,
  to,
  amount,
  total,
  error,
  showSpinner,
  updateAmount,
  updateFromCountry,
  updateToCountry,
  swapValues,
  getRates,
}) {
  const isMain = true;
  useEffect(() => {
    getRates();
  }, []);
  const onSelectChange = (e, isMain) => {
    if (isMain) {
      updateFromCountry(e.target.value);
    } else {
      updateToCountry(e.target.value);
    }
    getRates();
  };
  const onChange = (e) => {
    updateAmount(e.target.value);
    getRates();
  };
  const swap = () => {
    swapValues();
  };
  return (
    <div className="App">
      <div className="main">
        <Header />
        <InputCard
          onSelectChange={onSelectChange}
          disabled={!isMain}
          selectValue={from}
          inputValue={amount}
          onChange={onChange}
        />
        <InputCard
          onSelectChange={onSelectChange}
          disabled={isMain}
          selectValue={to}
          inputValue={total}
          onChange={onChange}
        />
        <div className="flx-col center">
          <button className="exchangeBtn" onClick={() => swap()}>
            <img className="changeIcon" src={change} alt="swap" />
            Swap
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
