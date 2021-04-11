import { Header } from "./components/Header";
import { InputCard } from "./components/InputCard";
import "./App.css";
import { useState } from "react";

function App() {
  const [logo, setLogo] = useState("€");
  const onSelectChange = (e, logo) => {
    console.log("onSelectChange", e.target.value);
    setLogo(logo);
  };
  const onChange = (e) => {
    console.log("onChange", e.target.value);
  };
  return (
    <div className="App">
      <div className="main">
        <Header />
        <InputCard
          onSelectChange={onSelectChange}
          onChange={onChange}
          logo={logo}
        />
        <InputCard
          onSelectChange={onSelectChange}
          onChange={onChange}
          logo={logo}
        />
        <div className="flx-col center">
          <button className="exchangeBtn" onClick={() => console.log("SUBMIT")}>
            Exchange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
