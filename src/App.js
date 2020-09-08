import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { Button, TextField, InputAdornment, Paper } from "@material-ui/core";
import styled from "styled-components";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import { btnStyles } from "./styles";
import { parlay, StyledTextField } from "./utils";
import MoneyLine from "./MoneyLine";
import Results from "./Results";

export default function App() {
  const [betAmount, setBetAmount] = useState("");
  const [youWin, setYouWin] = useState(0);
  const [payout, setPayout] = useState(0);
  const [moneyLines, setMoneyLines] = useState([]);
  const [oddsField, setOddsField] = useState("");
  const [active, setActive] = useState(true);

  return (
    <Paper elevation={5} className="container">
      <div className="banner"></div>
      <br />
      <StyledTextField
        InputProps={{
          startAdornment: (
            <InputAdornment id="start" className="start" position="start">
              $
            </InputAdornment>
          ),
        }}
        id="outlined-basic"
        label="Bet Amount"
        variant="filled"
        onChange={(evt) => setBetAmount(evt.target.value)}
      />
      <br />

      <div className="add_bet_container">
        <StyledTextField
          InputProps={{
            startAdornment: (
              <InputAdornment
                selected
                classes={{ root: "dollar" }}
                position="start"
              ></InputAdornment>
            ),
          }}
          id="outlined-basic"
          label="Money Line"
          variant="filled"
          value={oddsField}
          onChange={(evt) => setOddsField(evt.target.value)}
        />

        <span style={{ display: "flex" }}>
          <Button
            id="add_bet_btn"
            variant="contained"
            style={btnStyles}
            onClick={(evt) => {
              setMoneyLines([...moneyLines, Number(oddsField)]);
              setActive(false);
            }}
          >
            <span>Add Bet</span>
          </Button>
          <Button
            className={active ? "disabled" : ""}
            disabled={active}
            style={btnStyles}
            onClick={(evt) => {
              const { wager, profit } = parlay(betAmount, moneyLines);
              setOddsField("");
              setYouWin(profit);
              setPayout(Number(profit) + Number(wager));
              setActive(true);
            }}
            variant="contained"
            size="small"
          >
            Calculate
          </Button>
        </span>
      </div>
      <div>
        {moneyLines.map((moneyLine, index) => (
          <MoneyLine moneyLine={moneyLine} index={index} />
        ))}
      </div>
      <Results youWin={youWin} payout={payout} />
    </Paper>
  );
}
