import React, {useContext } from "react";
import "./App.css";
import { Button, Paper } from "@material-ui/core";
import { btnStyles } from "./styles";
import { parlay, StyledTextField } from "./utils";
import MoneyLine from "./MoneyLine";
import Results from "./Results";
import { AddBetBtn, BetField, MoneyLineField } from "./Components/BetField";
import { StateProvider, store } from "./Store";

export default function App() {
  const GlobalState = useContext(store);
  const { betAmount, active, moneylines, payout, winings } = GlobalState

  return (
    <StateProvider>
      <Paper elevation={5} className="container">
        <div className="banner"></div>
        <br />
        <BetField />
        <br />

        <div className="add_bet_container">
          <MoneyLineField />

          <span style={{ display: "flex" }}>
            <AddBetBtn/>
            <Button
              className={active ? "disabled" : ""}
              disabled={active}
              style={btnStyles}
              onClick={(evt) => {
                // const { wager, profit } = parlay(betAmount, moneylines);
                // setOddsField("");
                // setYouWin(profit);
                // setPayout(Number(profit) + Number(wager));
                // setActive(true);
              }}
              variant="contained"
              size="small"
            >
              Calculate
            </Button>
          </span>
        </div>
        <div>
          {moneylines.map((moneyline, index) => (
            <MoneyLine moneyLine={moneyline} index={index} />
          ))}
        </div>
        <Results youWin={winings} payout={payout} />
      </Paper>
    </StateProvider>
  );
}
