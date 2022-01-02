import React, { useContext } from "react";
import "./App.css";
import { Button, Paper } from "@material-ui/core";
import { btnStyles } from "./styles";
import { parlay } from "./utils";
import MoneyLine from "./MoneyLine";
import Results from "./Results";
import {
  AddBetBtn,
  BetField,
  MoneyLineField,
} from "./Components/UtilityComponents";
import { store } from "./Store";

export default function App() {
  const [state, dispatch] = useContext(store);
  const { isDisabled, moneylines, profit, payout, betAmount } = state;
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
          {/* // Move calculate btn to components */}
          <Button
            className={isDisabled ? "disabled" : ""}
            disabled={isDisabled}
            style={btnStyles}
            onClick={(evt) => {
              const { wager, winnings } = parlay(betAmount, moneylines);
              dispatch({
                type: "UPDATE_PAYOUT",
                payload: Number(winnings) + Number(wager),
              });
              dispatch({ type: "UPDATE_WININGS", payload: Number(winnings) });
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
      <Results youWin={profit} payout={payout} />
    </Paper>
  );
}
