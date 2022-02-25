import React, { useContext } from "react";
import "./App.css";
import { Paper } from "@material-ui/core";
import MoneyLine from "./MoneyLine";
import Results from "./Results";
import {
  AddBetBtn, 
  BetField,
  MoneyLineField,
  CalculateBtn,
  ThemeBtn
} from "./Components/UtilityComponents";
import { store } from "./Store";



export default function App() {
  const [state] = useContext(store);
  const { moneylines, profit, payout} = state;
  return (
    <Paper elevation={5} className="container">
      <div className="banner"></div>
      <br />
      <BetField />
      <br />

      <div className="add_bet_container">
        <MoneyLineField />

        <span style={{ display: "flex" }}>
          <AddBetBtn />
        <CalculateBtn/>
        </span>
      </div>
      <div className="moneyline_container">
        {moneylines.map((moneyline, index) => (
          <MoneyLine moneyLine={moneyline} index={index} />
        ))}
      </div>
      <Results youWin={profit} payout={payout} />
    </Paper>
  );
}
