import React, { useContext, useEffect } from "react";
import { StyledTextField } from "../../utils";
import { store } from "../../Store";
import { InputAdornment } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { btnStyles } from "../../styles";
import {parlay} from '../../utils'

export const BetField = () => {
  const [state, dispatch] = useContext(store);
  const { betAmount } = state;
  return (
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
      value={betAmount}
      variant="filled"
      onChange={(evt) =>
        dispatch({ type: "UPDATE_BET_AMOUNT", payload: evt.target.value })
      }
    />
  );
};

export const MoneyLineField = () => {
  const [state, dispatch] = useContext(store);
  const { oddsField } = state;
  return (
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
      onChange={(evt) =>
        dispatch({ type: "UPDATE_MONEY_LINE", payload: evt.target.value })
      }
    />
  );
};

export const AddBetBtn = () => {
  const [state, dispatch] = useContext(store);
  const { moneylines, oddsField, betAmount } = state;
  console.log(state)
  const canPlaceBet = (oddsField !== '' && betAmount !== '')
  return (
    <Button
      className={!canPlaceBet ? 'disabled': ''}
      id="add_bet_btn"
      variant="contained"
      style={btnStyles}
      disabled={!canPlaceBet}
      onClick={(evt) => {
        dispatch({
          type: "ADD_BET",
          payload: { moneylines: moneylines, oddsField: oddsField },
        });

        dispatch({type:'SET_IS_DISABLED', payload: false})
      }}
    >
      <span>Add Bet</span>
    </Button>
  );
};

export const CalculateBtn = () => {
    const [state, dispatch] = useContext(store)
    const{isDisabled, betAmount, moneylines} = state

    return (
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
    )
}

export const ThemeBtn = () => {
  const [state, dispatch] = useContext(store);
  const {theme} = state;

  useEffect(() => {
   theme === 'light'? document.querySelector('body').style.backgroundColor = 'white' : document.querySelector('body').style.background = 'black';
  }, [theme])
    return(
      <Button style={{position: 'absolute', top:'50px'}} onClick={() => { dispatch({type:"SET_THEME", payload:!theme})}} className="theme-btn">Toggle Theme</Button>
    )
}



