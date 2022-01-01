import React, { useContext } from "react";
import "./App.css";
import { Button, Paper } from "@material-ui/core";
import { btnStyles } from "./styles";
import { parlay} from "./utils";
import MoneyLine from "./MoneyLine";
import Results from "./Results";
import { AddBetBtn, BetField, MoneyLineField } from "./Components/UtilityComponents";
import { store } from "./Store";

export default function App() {
  const [state, dispatch] = useContext(store);
  const { active, moneylines, payout, winings, betAmount } = state;
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
            className={active ? "disabled" : ""}
            disabled={active}
            style={btnStyles}
            onClick={(evt) => {
              const { wager, profit } = parlay(betAmount, moneylines);
              dispatch({
                type: "UPDATE_PAYOUT",
                payload: Number(profit) + Number(wager),
              });
              dispatch({ type: "UPDATE_WININGS", payload: Number(profit) });
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
  );
}
