import { useState } from "react";
import "./App.css";
import CardPage from "./pages/CardPage";
import gainsSum from "./util/gainsSum";
import investmentSum from "./util/investmentSum";

function App() {
  const formatTheString = (str) => {
    const values = str.split(" ");

    const gainedAmount = gainsSum(values);
    const investedAmount = investmentSum(values);

    return (
      <div>
        Total : {gainedAmount}-{investedAmount}=
        {Number(gainedAmount) - Number(investedAmount)}
      </div>
    );
  };

  return <CardPage format={formatTheString} />;
}

export default App;
